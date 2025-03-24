import Work_post from "../components/Work_post.jsx";

export default function Work() {
    return (
        <>
            <div className="blog-container">
                <h1 className="title-color ">Works</h1>
                
                
                {/* elso */}
                <Work_post
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
                 <Work_post
                    kepek='/index-blog-post-images/calendar.png'
                    title='Components'
                    date='2018'
                    tags='Components, Design'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />

            </div>
        </>
    )
};
