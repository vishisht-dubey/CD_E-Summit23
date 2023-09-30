import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { UserAuth } from "../../context/AuthContext.jsx";
// import { Link as NextLink } from "next/link";

import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../assets/ecell_logo.png";
// import { useRouter } from "next/router";
// import { doc, getDoc, setDoc, collection, set } from "firebase/firestore";

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
  console.log(user);
  return (
    <Layout className="bg-white">
      <Navbar variant="sticky">
        {/* <Navbar.Toggle showIn="xs" /> */}
        <Link href="/">
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          ></Navbar.Brand>
          <Image
            src={logo}
            alt="logo"
            className=" cursor-pointer h-auto w-28 logo"
          />
        </Link>

        <Navbar.Content
          enableCursorHighlight
          activeColor="#FFA500"
          hideIn="xs"
          variant="highlight-rounded"
          className="p-2"
        >
          <Navbar.Link href="/#" className="border-orange-500 hover:border-b-2">
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/#whyCD"
            className="  border-orange-500 hover:border-b-2"
          >
            Why CD?
          </Navbar.Link>
          <Navbar.Link
            href="/#what-we-offer"
            className="  border-orange-500 hover:border-b-2"
          >
            What we offer?
          </Navbar.Link>
          <Navbar.Link
            href="/#responsibilities"
            className="  border-orange-500 hover:border-b-2"
          >
            Responsibilities
          </Navbar.Link>
          <Navbar.Link
            href="/#testimonials"
            className="  border-orange-500 hover:border-b-2"
          >
            Testimonials
          </Navbar.Link>
          <Navbar.Link
            href="/#contacts"
            className="border-orange-500 hover:border-b-2"
          >
            Contacts
          </Navbar.Link>
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
                    color="orange"
                    size="md"
                    src={user.avatar}
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                color="orange"
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
                <Dropdown.Item key="dashboard" withDivider className="hover:bg-orange-400">
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button
              className="inline-flex items-center w-fit justify-center px-3 py-3 mr-2 text-base text-center text-white rounded-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
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
