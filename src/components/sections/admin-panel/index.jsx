import React, { useEffect, useState } from "react";
import UserPanelLayoutMobile from "./mobile";
import UserPanelLayoutDesktop from "./desktop";
import { routesList as menuItems } from "../../../router/routes";

const UserPanelLayout = ({ children, pageTitle }) => {
  const [isMobile, setIsMobile] = useState(false);
  // const [role, setRole] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      const mobile = window.matchMedia("(max-width:599px)").matches;
      setIsMobile(mobile);
    };
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  return isMobile ? (
    <UserPanelLayoutMobile menuItems={menuItems} pageTitle={pageTitle}>
      {children}
    </UserPanelLayoutMobile>
  ) : (
    <UserPanelLayoutDesktop menuItems={menuItems} pageTitle={pageTitle}>
      {children}
    </UserPanelLayoutDesktop>
  );
};

export default UserPanelLayout;
