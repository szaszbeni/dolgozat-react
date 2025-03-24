import Blog_post from "../components/Blog_post.jsx";

export default function Blog() {
    return (
        <>
            <div className="blog-container">
                <h1 className="title-color bloggec">Blog</h1>
                {/* elso */}
                <Blog_post
                    title='UI Interactions of the week'
                    date='12 Feb 2019'
                    tags='Express, Handlebars'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                
                />
        <hr className="bloggec" />

                {/* masodik */}
                <Blog_post
                    title='UI Interactions of the week'
                    date='12 Feb 2019'
                    tags='Express, Handlebars'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />
        <hr className="bloggec" />

                {/* harmadik */}
                <Blog_post
                    title='UI Interactions of the week'
                    date='12 Feb 2019'
                    tags='Express, Handlebars'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />
        <hr className="bloggec" />

                {/* negyedik */}
                <Blog_post
                    title='UI Interactions of the week'
                    date='12 Feb 2019'
                    tags='Express, Handlebars'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />
        <hr className="bloggec" />

            </div>
        </>
    );
}