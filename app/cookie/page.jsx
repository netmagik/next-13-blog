import React from "react";
import { cookies } from "next/headers";

const Cookie = () => {
  const getCookies = cookies();

  const action = getCookies.get("action");
  return (
    <h1>
      {action?.value
        ? `Cookie's value is: "${action.value}"`
        : "No cookie has been set. Refresh this page to see the cookie value"}
    </h1>
  );
};

export default Cookie;
