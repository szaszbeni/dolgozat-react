import { Link, NavLink } from "react-router";

export default function Navigation() {
    return (
        <header style={styles.header}>
            <nav>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <NavLink to="/"
                        style={
                            ({isActive}) => {
                                
                                return {
                                    fontWeight: isActive ? "bold" : "normal",
                                    color: 'black'
                                }
                            }
                        }   
                        >Kezdőlap</NavLink>
                        { /* <Link style={styles.link} to="/">Kezdőlap</Link> */}
                    </li>
                    <li style={styles.li}>
                        <NavLink to="rolam" 
                        style={
                            ({isActive}) => {
                                return {
                                    fontWeight: isActive ? "bold" : "normal",
                                    color: 'black'
                                }
                            }
                        }  
                        >Rólam</NavLink>
                        { /* <Link style={styles.link} to="rolam">Rólam</Link>  */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
{/*
    Tegyétek szebbé a navigációs sávot:
    - az ul-en belül, display: flex-szel, igazítsuk középre 
    függőlegesen align-items: center-rel,
    tegyük egymás mellé a linkeket (styles-ban legyen egy 'ul')
    - linkek színe legyen fekete és ne legyen aláhúzva
    (styles-ban legyen egy 'link')
*/}
const styles = {
    header: {
        backgroundColor: '#dedede',
        height: 100,
        display: 'flex',    
        alignItems: 'center'
    },
    ul: {
        display: 'flex',
        gap: 10
    },
    li: {
        listStyle: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}