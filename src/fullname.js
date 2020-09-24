export default function fullname({ firstname, lastname }) {
  const name = [firstname, lastname].join(" ");
  return name;
}
