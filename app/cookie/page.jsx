import React from "react";
import { cookies } from "next/headers";

const Cookie = () => {
  const getCookies = cookies();

  const action = getCookies.get("action");
  return (
    <div className="cookie">
      {action?.value ? (
        <p>
          Cookie's value from the Edge Function is:
          <span className="cookie-value"> {action.value}</span>
        </p>
      ) : (
        <p>
          No cookie has been set. <strong>Refresh</strong> this page to see the cookie value
        </p>
      )}
    </div>
  );
};

export default Cookie;
