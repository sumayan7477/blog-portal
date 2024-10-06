import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookMark,handleaddSpendTime}) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <div className="md:w-2/3 m-4">
      {
        blogs.map(blog => <Blog 
          key={blog.id} 
          blog={blog}
          handleAddBookMark={handleAddBookMark}
          handleaddSpendTime ={handleaddSpendTime}
          ></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
 
  handleAddBookMark : PropTypes.func,
  handleaddSpendTime : PropTypes.func
}

export default Blogs;
