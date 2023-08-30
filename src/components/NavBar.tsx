import React, { useEffect } from "react";
import { fetchExample } from "../services/giphy.services";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Page 01</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="https://github.com/JuanQuiro"
            aria-current="page"
          >
            Github
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="https://www.youtube.com/c/GentlemanProgramming"
            aria-current="page"
          >
            GentlemanProgramming
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://www.linkedin.com/in/dreyz/">
            Linkedink
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
