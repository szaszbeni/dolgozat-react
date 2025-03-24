import { NavLink } from "react-router";
import styles from '../css/NavBar.module.css'
import contact from "../components/NavBar.jsx"
import { useState } from "react";
import { Spin as HamburgerButton } from 'hamburger-react'
export default function NavBar(){
    let [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <ul className={`${menuOpen ? styles.open : styles.closed}`}>
                <li>
                    <NavLink 
                    onClick={() => setMenuOpen(!menuOpen)}
                    to="Work"
                    style={
                        ({isActive}) => ({
                            color: isActive ? "red" : "black"
                        })
                    }
                    >
                        Works</NavLink>
                </li>
                <li><NavLink
                onClick={() => setMenuOpen(!menuOpen)}
                 style={
                    ({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })
                }
                to="Blog">Blog</NavLink></li>
                <li><NavLink
                onClick={() => setMenuOpen(!menuOpen)}
                 style={
                    ({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })
                }
                to="Contact">Contact</NavLink></li>
            </ul>
            <div
                className={styles.hamburger_menu_button}
            >
                <HamburgerButton 
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={28}
            direction="left"
            />
            </div>
            
        </nav>
    )
}