import { Box, Burger, Container, Image, List } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyle.scss";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <Container fluid px={120} className="navbar">
      {/*      <!-- LOGO --> */}
      <Box className="logo">
        <Image src="https://www.wedsinvite.com/img/logo.png" alt="logo" />
      </Box>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
      {/*        <!-- NAVIGATION MENUS --> */}
      <List className={`menu ${opened ? "menu-show" : "menu-hide"}`}>
        <List.Item>
          <NavLink to="/aboutpage">ABOUT</NavLink>
        </List.Item>
        <List.Item>
          <NavLink to="/services">SERVICES</NavLink>
        </List.Item>
        <List.Item>
          <NavLink to="/gallery">GALLERY</NavLink>
        </List.Item>
        <List.Item>
          <NavLink to="/testMonials">TESTIMONIALS</NavLink>
        </List.Item>
        <List.Item>
          <NavLink to="/team">TEAM</NavLink>
        </List.Item>
        <List.Item>
          <NavLink to="/contact">CONTACT</NavLink>
        </List.Item>
      </List>
    </Container>
  );
};

export default Navbar;
