
export default function Blog_post({title,date,tags,content, className }) {
    return (
        <div className={`blog-post ${className || ''}`}>

        <h2>{title}</h2>
        <span>
            {date} &nbsp; | &nbsp; <span className="text-color">{tags}</span>
        </span>
        <p>
            {content}
        </p>
    </div>
    );
}