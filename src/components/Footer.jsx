export default function Footer() {
    return (
        <div style={styles.footer}>
            <div style={styles.kepek}>
                <img src="/icons/facebook.svg" alt="facebook" />
                <img src="/icons/instagram.svg" alt="instagram" />
                <img src="/icons/twitter.svg" alt="twitter" />
                <img src="/icons/linkedin.svg" alt="linkedin" />
            </div>

            <p style={styles.leiras}>Copyright ©2020 All rights reserved</p>
        </div>
    );
}

const styles = {
    footer: {
        height: "182px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "10px", 
    },
    leiras: {
        opacity: "60%",
        fontSize: "14px",
    },
    kepek: {
        display: "flex",
        gap: "40px", 
    },
};
