import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import '../Styles/ReadingList.scss';

const Readinglist = (props) => {
    const readingList = useSelector(state => state.books.readingList);
    return (
        <div className='readingList'>
            <h1>This is your Reading List</h1>
            <h3>You are currently reading {readingList.length} books </h3>
            <div className='readingBooks'>
                {
                     readingList.map((book) => (<Books key={book.id} books = {book}/>))
                }
            </div>
        </div>
    );
};

export default Readinglist;