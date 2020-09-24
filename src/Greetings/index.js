import React from "react";
import fullname from "../fullname";
import { string } from "prop-types";

/**
 *
 * @param {firstname} prénom
 * @param {lastname} nom
 */
export default function Greetings({ firstname, lastname }) {
  return <p>Hello {fullname({ firstname, lastname })}!</p>;
}
Greetings.propTypes = {
  firstname: string.isRequired,
  lastname: string,
};

Greetings.defaultProps = {
  lastname: "Martin2",
};
