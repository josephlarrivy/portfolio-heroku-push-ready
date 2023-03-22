import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({navItemClick}) {

	

	return (
		<div>
			<Navbar className="nav-container">
				<Nav>
        			<NavItem >
						<NavLink to="/" onClick={navItemClick} >Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/education" onClick={navItemClick}>Education</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/minigames" onClick={navItemClick}>miniGames</NavLink>
					</NavItem>
					{/* <NavItem>
						<NavLink to="/projects" onClick={navItemClick}>Projects</NavLink>
					</NavItem> */}
					<NavItem>
						<NavLink to="/contact" onClick={navItemClick}>Contact</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
