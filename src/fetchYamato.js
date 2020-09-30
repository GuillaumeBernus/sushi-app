export default async function fetchYamato(route) {
  const baseUri =
    process.env.REACT_APP_BASE_URI ||
    "//localhost:3001"; /*protocol relative URL*/

  const response = await fetch(`${baseUri}${route}`);
  if (!response.ok) throw new Error(response.status);
  return await response.json();
  //return fetch(`${baseUri}${route}`).then.then(responseToJson);
}
