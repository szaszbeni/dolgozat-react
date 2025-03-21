import Blog_post from "../components/Blog_post.jsx";
import Work_post from "../components/Work_post.jsx";

export default function Home() {
    return (
        <div>
            <section style={styles.home}>
                <div style={styles.content}>
                    <div style={styles.text}>
                        <h1 style={styles.title}>Hi, I am John, <br />Creative Technologist</h1>
                        <p style={styles.paragraph}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="gomb">
                            Download Resume
                        </button>
                    </div>
                    <img style={styles.johnkep} src="/john.png" alt="John" />
                </div>
            </section>

            <section style={styles.kek}>
                <div style={styles.postsHeader}>
                    <p style={styles.recent}>Recent posts</p>
                    <p style={styles.viewAll}>View all</p>
                </div>
                <div style={styles.nagyszar}>

                    <Blog_post className="balesjob"
                        title='Making a design system from scratch'
                        date='12 Feb 2020'
                        tags='Design, Pattern'
                        content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />


                     <Blog_post className="balesjob"
                        title='Creating pixel perfect icons in Figma'
                        date='12 Feb 2020'
                        tags='Figma, Icon Design'
                        content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />


                </div>

            </section>

            <section style={styles.featuredworks} className="featuredworks" >
                <h3 style={styles.sectionTitle}>Featured works</h3>

                  <Work_post className="balesjob"
                                      kepek='/index-blog-post-images/designing-dashboards.png'
                                      title='Designing Dashboards'
                                      date='2020'
                                      tags='Dashboard'
                                      content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                                  />
               
                                  <Work_post
                                      kepek='/index-blog-post-images/vibrant-portraits.png'
                                      title='Vibrant Portraits of 2020'
                                      date='2018'
                                      tags='Illustration'
                                      content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                                  />
                                  <Work_post
                                      kepek='/index-blog-post-images/malayalam-type.png'
                                      title='36 Days of Malayalam type'
                                      date='2018'
                                      tags='Typography'
                                      content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                                  />
          
               
            </section>




        </div>
    );
}

const styles = {
    balesjob:{
        backgroundColor:'red',
    },
    featuredworks: {
      
    },
  
    sectionTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    workContainer: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    kepek: {
        width: "246px",
        height: "180px",
        borderRadius: "6px",
    },
    workText: {
        flex: 1,
    },
    workTitle: {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "5px",
    },

    yearAndCategory: {
        display: "flex",
        gap: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#555",
        alignItems: "center",
        marginTop: "0px",
    },
    year: {
        backgroundColor: "#142850",
        padding: "5px 10px",
        borderRadius: "16px",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    },
    category: {
        backgroundColor: "#F3F4F6",
        padding: "5px 10px",
        borderRadius: "16px",
        color: "#8695A4",
        fontSize: "20px",
        fontWeight: "bold",
    },

    workDescription: {
        fontSize: "16px",
        color: "#666",
        lineHeight: "1.6",
        marginTop: "10px",
    },


    kekh1: {
        fontSize: '26px',
    },
    kekdatum: {
        fontSize: '18px',
    },
    kekszoveg: {
        fontSize: '16px',
    },
    csik: {
        width: '100%',
    },
    home: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "80px",
        maxWidth: "900px",
    },
    text: {
        flex: 1,
        textAlign: "left",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#232323",
    },
    paragraph: {
        fontSize: "16px",
        color: "#666",
        lineHeight: "1.6",
    },
    gomb: {
        
    },

    johnkep: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    nagyszar: {
        gap: '20px',
        display: 'flex',
        padding: "20px",
        marginTop: "-40px",
        justifyContent: 'space-between',
        maxWidth: '900px',
        margin: '0 auto',
    },

    kek: {
        backgroundColor: "#EAF7FB",
        width: "100%",
        margin: '0 auto',
    },

    postsHeader: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px 0",
    },

    recent: {
        fontSize: "18px",
        color: "#232323",

    },

    viewAll: {
        fontSize: "16px",
        color: "#00A8CC",
        cursor: "pointer",
    },
};
