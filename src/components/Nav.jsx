import { NavLink } from "react-router";
export default function Navigation() {
    return (
        <header style={styles.header}>
            <div style={styles.itemek}>
            <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color:  isActive ? 'red' : 'black',
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="Work"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color:  isActive ? 'red' : 'black',
                    })}
                >
                    Works
                </NavLink>


                <NavLink to="Blog" style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color:  isActive ? 'red' : 'black',

                    })}>
                    Blog
                </NavLink>
                <NavLink to="Contact" style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color:  isActive ? 'red' : 'black',

                    })}
                >
                    Contact
                </NavLink>
            </div>
        </header>
    )
}

const styles = {
    header: {


    },
    itemek:{
        marginTop:'30px',
        display: "flex",
        justifyContent: "end",
        gap: "30px",
        marginRight: "5%",
    }


}