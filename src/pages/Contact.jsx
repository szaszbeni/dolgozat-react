export default function Contact() {
    return (
        <>
            <div style={styles.main}>
                <h1 className="title-color contact">Contact</h1>
                <p style={styles.text}> Fill and submit the form below to contact
                </p>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">Name:</label>
                    <input style={styles.input} type="text" id="name" />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="email">Email:</label>
                    <input style={styles.input} type="email" id="email" />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="message">Message:</label>
                    <input style={styles.textarea} type="text" id="message" />

                </div>

                <button style={styles.button}>Submit</button>
            </div>
        </>
    );
}

const styles = {
    text:{
        marginTop:'0px',
        marginBottom:'50px',
    },
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
        maxWidth: "700px", 
        margin: "auto",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px", 
    },
    label: {
        marginBottom: "5px",
    },
    input: {
        width: "682px",
        height: "20px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    textarea: {
        textAlign: "left",
        textAlignVertical: "top", // A szöveg a bal felső sarokból indul
        width: 682,
        justifyContent: "flex-start",
        height: 100,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    }
    ,
    button: {
        width: "100%", 
        height: "53px",
        backgroundColor: "#FF6464",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
    }
};
