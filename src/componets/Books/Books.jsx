import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const [book , setbook] = useState([]);
    useEffect(() =>{
        fetch('books.json')
        .then( res => res.json())
        .then ( data => setbook(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10">Books:{book.length}</h2>
            <div className="grid lg:grid-cols-3 mt-10 gap-10">
                {
                    book.map( book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
        
    );
};

export default Books;