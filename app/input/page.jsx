


'use client'
import React, { useState } from 'react';

const Input = () => {
    const [bookName, setBookName] = useState('');
    const [bookTopic, setBookTopic] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(bookName);
        console.log(bookTopic);
    };

    return (
        <div>
            <h1>This is input form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="bookName">Book Name</label>
                <input
                    onChange={(e) => setBookName(e.target.value)}
                    className='border-2 border-blue-400 rounded-md mt-5'
                    type="text"
                    required
                />
                <label htmlFor="bookTopic">Book Topic</label>
                <input
                    onChange={(e) => setBookTopic(e.target.value)}
                    className='border-2 border-blue-400 rounded-md mt-5'
                    type="text"
                    required
                />
                <button type="submit" className='cursor-pointer'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Input;
