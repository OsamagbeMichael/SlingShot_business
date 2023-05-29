import React, { useState } from 'react';
import "./BlogPost.css";
import  {Blogs} from "./data.js";


const BlogPost = () =>{
    const [selectedBlog,setSelectedBlog] = useState(null);

 

   


const handleBlogClick=(blog)=>{
    setSelectedBlog(blog);
};

const closeModal=()=>{
    setSelectedBlog(null);
};






  return (
  <div className='blog-container'>
<div className='omo'>
    <div className="speed-labelo">Speeds  <span> |  BLOG</span></div>
   
      <div className= 'blog-preview'>
        
        {Blogs.map((blog)=>(
            <div key={blog.id} 
            //  className='blog-preview-item'
            className= {`${selectedBlog && selectedBlog.id === blog.id ? 'blog-preview-item-alte' : 'blog-preview-item'}`}
            onClick={()=>handleBlogClick(blog)}>
                <h3>{blog.title}</h3><br></br>
                <h6>{blog.date}</h6>

            
             </div>
        ))}
        
      </div>
    


      </div>
    
{selectedBlog && (
    
    <div className='modal'> 
        <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <h3 className='selected-title'>{selectedBlog.title}</h3>
            <h4 className='selected-title-one'>{selectedBlog.content}</h4>
        
        </div> 
    </div>

)}

     
    </div>
  );
};

export default BlogPost;
