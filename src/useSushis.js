import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import fetchYamato from "./fetchYamato";
import config from "react-global-configuration";

const { minLength } = config.get("search");
const hasMinLength = (search) => search.length >= minLength;
export default function useSushis(search) {
  let route = ["/sushis"];

  if (!isEmpty(search) && hasMinLength(search)) {
    route.push(`?q=${search}`);
  }
  return useQuery([route, hasMinLength(search) && search], () =>
    fetchYamato(route.join(""))
  );
}
