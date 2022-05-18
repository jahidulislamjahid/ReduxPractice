import React from 'react';
import { useDispatch } from 'react-redux';
import { addToReadingList } from '../Redux/Slices/BookSlice';
import '../Styles/Books.scss';

const Books = (props) => {
    const {title, author, coverImageUrl, synopsis, pageCount} = props.books;
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <img src={coverImageUrl} alt="Books images" />
                </div>
                <div className="card-body">
                        <h3>{title}</h3>
                        <h4>BY: {author}</h4>
                        <h5>Page: {pageCount}</h5>
                        <p>{synopsis.slice(0,100)}...</p>
                    <div className="cardButton">
                        <button onClick={()=> dispatch(addToReadingList(props.books))}>Add To Reading list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;