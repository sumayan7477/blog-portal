
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks , readingtime}) => {
   
    return (
        <div className='md:w-1/3 bg-slate-50 p-4 m-4 rounded-lg text-center'>
            <div>
                <h3 className='text-3xl' > Reading Time: {readingtime} </h3>
            </div>
            <h2>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark , idx) => <Bookmark 
                    key={idx}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.object,
    readingtime : PropTypes.number
}

export default Bookmarks;