import * as React from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";

const navStyles: Partial<INavStyles> = { root: { width: "100%" } };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: "Basic components",
    links: [
      {
        key: "ActivityItem",
        name: "ActivityItem",
        url: "#/examples/activityitem",
      },
      {
        key: "Breadcrumb",
        name: "Breadcrumb",
        url: "#/examples/breadcrumb",
      },
      {
        key: "Button",
        name: "Button",
        url: "#/examples/button",
      },
    ],
  },
];

const SideNav: React.FunctionComponent = () => {
  return <Nav styles={navStyles} groups={navLinkGroups} />;
};

export default SideNav;
