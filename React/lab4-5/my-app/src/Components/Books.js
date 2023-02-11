import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function Books() {
    let [books, setBooks] = useState([]);
    useEffect(() => {
        axios("https://www.googleapis.com/books/v1/volumes?q=bookName").then((res) => {
            setBooks(res.data.items);
        });
    });
    return (
        <div>
            <h3>Books</h3>
            <div className="container-fluid">
                <div className="row">
                    {books.map((book, index) => (
                        <BookCard key={index} data={book} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Books;
