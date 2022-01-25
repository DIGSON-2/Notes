import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <h1>
      This <br />
      Page <br />
      Not Found <br />
      <Link to='/' >Go to Main Page </Link>
    </h1>
  );
};
export default NotFound