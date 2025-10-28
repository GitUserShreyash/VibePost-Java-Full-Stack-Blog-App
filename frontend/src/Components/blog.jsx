import { useState } from "react"
import { ReactBtn } from "./reactbtn";

export const BlogCard =({ title, category, description, image, author, date })=>{
    const [expanded, setExpanded]= useState(false);
    const previewLength=350;
    const needsTruncate = description.length>previewLength;
    const previewText = needsTruncate && !expanded ? description.slice(0, previewLength) + "..." : description;
        return(
        <>
        <div className="blog-card max-w-xl w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col p-6 lg:max-w-3xl lg:max-h-2xl">
            <div>
                <h3 className="text-xl font-semibold mt-1">{title}</h3>
                <div>
                    <p>By {author}</p>
                    <p>on {date}</p>
                    <button className="text-sm text-gray-500 uppercase">{category}</button>
                </div>
            </div>
            <div>
                <p className="text-gray-600 text-sm mt-2 ">
                     {expanded ? description : previewText}{!expanded && needsTruncate ? "..." : ""}
                </p>
                <button className="mt-4 text-blue-600 hover:underline"
                type="button"
                onClick={() => setExpanded((s) => !s)}
                aria-expanded={expanded}
                >{expanded ? "read less" : "read more"}</button>
            </div>
            <ReactBtn />
        </div>
        </>
    )
}