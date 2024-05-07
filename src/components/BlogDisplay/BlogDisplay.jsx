import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogDisplay = ({ title, author, metaDesc, slug }) => {
    
    return (
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6 border-solid border-white border">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-1">Author: {author}</p>
            <p className="text-gray-700">{metaDesc}</p>
            <button className='inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer'>
                <Link to={`/blogs/${slug}`} className="">Read More</Link>
            </button>
        </div>
    );
}

export default BlogDisplay;
