import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { UserAuth } from "../../context/AuthContext.jsx";

import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Profile",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const { handleGoogleSignIn, logout, user } = UserAuth();
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link>Discover</Navbar.Link>
          <Navbar.Link isActive>Initiatives</Navbar.Link>
          <Navbar.Link>Learn</Navbar.Link>
          <Navbar.Link>Incubator</Navbar.Link>
          <Navbar.Link>Team</Navbar.Link>
          <Navbar.Link>Startup</Navbar.Link>
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          {user?.name ? (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src={user.avatar}
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                color="secondary"
                onAction={(actionKey) => {
                  if (actionKey === "logout") {
                    logout();
                  } else if (actionKey === "dashboard") {
                    router.push("dashboard");
                  }
                }}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {user.name.length <= 25
                      ? user.name
                      : user.name.slice(0, 22) + "..."}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="dashboard" withDivider>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font- text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
              onClick={handleGoogleSignIn}
            >
              Login
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          )}
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
