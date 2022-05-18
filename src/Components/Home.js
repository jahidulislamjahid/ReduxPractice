import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../Redux/Slices/BookSlice';
import '../Styles/home.scss';
import Books from './Books';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, []);
    const book = useSelector(state => state.books.discover);
    return (
        <div className='body'>
             {
                 book.map((book) => (<Books key={book.id} books = {book}/>))
             
            }
        </div>
    );
};

export default Home;