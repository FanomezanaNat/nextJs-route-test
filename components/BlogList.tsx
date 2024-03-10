import Link from 'next/link';
import React from 'react'
 const blogs = [
        { id: 1, title: 'Blog 1' },
        { id: 2, title: 'Blog 2' },
        { id: 3, title: 'Blog 3' },
    ];
export default function BlogList(props:{className?:string}) {
    const {className}=props
   
    return (
        <div className={className}>
            <p>Blog List</p>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
