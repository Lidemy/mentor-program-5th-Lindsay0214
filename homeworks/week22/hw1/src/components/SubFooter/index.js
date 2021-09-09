import React from "react";
import { WebsiteRights } from "./SubFooterElements";

const SubFooter = () => {
  return (
    <WebsiteRights>
      Lindsay's work © {new Date().getFullYear()} All rights reserved.
    </WebsiteRights>
  );
};

export default SubFooter;
