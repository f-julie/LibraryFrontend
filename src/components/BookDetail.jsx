import { useParams } from "react-router-dom";
import Book from "../assets/hero.jpg"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        getBook();
    }, [])

    const getBook = async() => {
        try {
        const result = await axios.get(`https://libbackenddeploy2-ozmys7xq.b4a.run/books/${id}`);
        console.log("The Result: ", result);
        setBook(result.data);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex w-full justify-center text-2xl">   
            <a href="http://www.google.com" target="BLANK">
                <div className="flex flex-col gap-2 text-center border-2 rounded-md shadow-lg p-6">
                    <h1>{book?.title}</h1>
                    <p>Author: {book?.author}</p>
                    <p>Published Date: {book?.publishedAt}</p>
                    <p>Description: {book?.description}</p>
                    <img className="w-[200px] h-[200px] self-center m-4 rounded-lg shadow-lg" src={Book} alt="" />
                </div>
            </a>
        </div>
    );
}