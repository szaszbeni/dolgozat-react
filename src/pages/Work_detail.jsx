export default function WorkDetail() {
    return (
        <>
            <section>
                <div style={styles.content}>
                    <h1>Designing Dashboards with Usability in Mind</h1>
                    <span style={styles.tag}>2020</span> <span>Dashboard, User Experience Design</span>
                    <p style={styles.workDescription}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    
                    <img style={styles.image} src="/single-blog-post-images/dashboard-user-experience.webp" alt="Dashboard UX" />
                    
                    <h2>Heading 1</h2>
                    <h3>Heading 2</h3>
                    <p style={styles.workDescription}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    
                    <img style={styles.image} src="/single-blog-post-images/car.webp" alt="Car Illustration" />
                    <br />
                    <img style={styles.image} src="/single-blog-post-images/dashboard-delivery-pickup.webp" alt="Delivery Pickup UI" />
                </div>
            </section>
        </>
    );
}

const styles = {
    content: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    tag: {
        backgroundColor: '#FF5A5F',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        marginRight: '10px',
        fontSize: '14px',
    },
    image: {
        width: '100%',
        maxWidth: '681px',
        height: 'auto',
        borderRadius: '8px',
        marginTop: '20px',
    },
    workDescription: {
        fontSize: "16px",
        color: "#666",
        lineHeight: "1.6",
        marginTop: "10px",
        width: '750x',
    },
};
