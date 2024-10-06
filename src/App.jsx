import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  // add to book mark
  const [bookmarks, setBookmaks] = useState([]);
  const handleAddBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmaks(newBookMarks);
  };
  //add time to read
  const [readingtime , setReadingTime]= useState(0);
  const handleaddSpendTime = (id ,time) =>{
    const newReadingTime = readingtime + time;
    setReadingTime(newReadingTime);
    // remove thr blog from book mark
    // console.log('remove', id)
    const remainingBookMarks =  bookmarks.filter(Bookmark => Bookmark.id !== id);
    setBookmaks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleaddSpendTime={handleaddSpendTime} handleAddBookMark={handleAddBookMark}></Blogs>
        <Bookmarks readingtime={readingtime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
