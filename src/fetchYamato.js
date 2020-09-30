import config from "react-global-configuration";

const responseToJson = (response) => response.json();

export default function fetchYamato(route) {
  const baseUri =
    process.env.REACT_APP_BASE_URI ||
    "//localhost:3001"; /*protocol relative URL*/
  return fetch(`${baseUri}${route}`).then(responseToJson);
}
