
import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';


const Blog = ({ blog , handleAddBookMark ,handleaddSpendTime }) => {
    const {id, title , cover_img,reading_time,author,author_img,posted_date,hashtags} = blog ;
    return (
        <div className='mb-20' >
            <img className='w-full mb-8' src={cover_img} alt={`cover picture of ${title}`} />
            <div className='flex justify-between mb-5'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div >
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Minute Reading</span>
                    <button
                    onClick={()=>handleAddBookMark(blog)}
                     className='ml-2'> <FaRegBookmark></FaRegBookmark> </button>
                </div>
            </div>
            <h2 className='text-4xl mb-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hastag , idx) => <span key={idx}><a className='mr-3' href="">#{hastag}</a></span>)
                }
            </p>
            <button  
            onClick={() =>handleaddSpendTime(id, reading_time)}
            className='mr-3 underline text-blue-900'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.array,
    handleAddBookMark : PropTypes.func,
    handleaddSpendTime : PropTypes.func
}


export default Blog;