import { NavLink } from "react-router";

export default function Work_post({ title, date, tags, content, kepek }) {
    return (
        <>
            <NavLink to="/Work_detail">
                <section  >
                    {/* elso */}    
                    <div style={styles.workContainer}>
                        <div>
                            <img style={styles.kepek} src={kepek} />
                        </div>
                        <div style={styles.workText}>
                            <h1 style={styles.workTitle}>{title}</h1>
                            <div style={styles.yearAndCategory}>
                                <span style={styles.year}>{date}</span>
                                <p style={styles.category}>{tags}</p>
                            </div>
                            <p style={styles.workDescription}>
                                {content}
                            </p>
                        </div>

                    </div>
                    <hr style={styles.hr} />

                </section>
            </NavLink>
        </>
    );
}

const styles = {
    workContainer: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "20px 0",
    },
    kepek: {
        width: "246px",
        height: "180px",
        borderRadius: "6px",
        objectFit: "cover",
    },
    workText: {
        flex: 1,
    },
    workTitle: {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "30px",
    },
    yearAndCategory: {
        display: "flex",
        gap: "10px",
        fontSize: "10px",
        color: "#555",
        alignItems: "center",
        marginTop: "-15px",
    },
    year: {
        backgroundColor: "#142850",
        padding: "0px 10px 0px 10px ",
        borderRadius: "16px",
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
    },
    category: {
        color: "#8695A4",
        fontSize: "18px",
    },
    workDescription: {
        fontSize: "16px",
        color: "#666",
        lineHeight: "1.6",
        marginTop: "10px",
        width: '418px',
    },
    hr: {
        border: "none",
        height: "1px",
        backgroundColor: "#E5E5E5",
        marginTop: '-10px',
        width: '670px',
    },
};
