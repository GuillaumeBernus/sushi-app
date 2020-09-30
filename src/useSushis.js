import { useQuery } from "react-query";

import fetchYamato from "./fetchYamato";
import config from "react-global-configuration";
import hasMinLength from "./hasMinLength";
const { minLength } = config.get("search");

export default function useSushis(search) {
  let route = ["/sushis"];

  if (hasMinLength(search, minLength)) {
    route.push(`?q=${search}`);
  }
  return useQuery([route, hasMinLength(search, minLength) && search], () =>
    fetchYamato(route.join(""))
  );
}
