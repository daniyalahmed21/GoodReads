import React, { useEffect } from 'react';
import Layout from "Layouts/Layout";
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from "react-router"; 
import { addBookToShelf, getAllBookShelves } from 'Redux/Slices/ShelfSlice';

import image from "Assets/600x400.svg";
import { formatShelfName } from 'Helpers/Shelf';




export default function BookDescription() {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const shelfState = useSelector((state) => state.shelf);

    useEffect(() => {
        // Fetch shelves only once
        if (shelfState.status === 'idle') {
            dispatch(getAllBookShelves());
        }
    }, [dispatch, shelfState.status]);

    if (!state) {
        return (
            <Layout>
                <div className="text-center p-8">
                    <h1 className="text-2xl text-gray-800 font-semibold mb-4">Book data not found.</h1>
                    <p className="text-gray-600">Please navigate from the books page to view details.</p>
                </div>
            </Layout>
        );
    }
    
    return (
        <Layout>
            <div className="p-6 md:p-10 max-w-6xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/dashboard"
                    className="inline-block mb-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black transition-colors duration-200"
                >
                    ← Back to Books
                </Link>

                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-10 rounded-lg shadow-lg">
                    {/* Book Image */}
                    <div className="md:w-1/3">
                        <img
                            className="w-full rounded-md shadow-md"
                            src={image} 
                            alt={`${state.title} cover`}
                        />
                    </div>
                    {/* Book Details */}
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gray-900">{state.title}</h1>
                        <p className="text-lg text-gray-600 font-medium">
                            <span className="font-semibold text-gray-800">Author:</span> {state.author?.name || "Unknown Author"}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-gray-800">Published:</span> {state.publishDate || "N/A"}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-gray-800">Pages:</span> {state.pages || "N/A"}
                        </p>
                        
                        {/* Genres */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {state.genres && state.genres.length > 0 && state.genres.map((genre) => (
                                <span
                                    key={genre._id}
                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                            <p className="text-gray-700 leading-relaxed">{state.description || "No description available."}</p>
                        </div>

                        {/* Add to Shelf Dropdown */}
                        <div className="relative mt-auto">
                            <details className="dropdown relative">
                                <summary className="m-1 btn bg-gray-800 text-white hover:bg-black p-2 rounded-md">Add to Shelf</summary>
                                <ul className="absolute p-2 shadow menu dropdown-content z-[1] bg-white text-gray-800 rounded-box w-52 border border-gray-200">
                                    {shelfState.shelfList && shelfState.shelfList.length > 0 ? (
                                        shelfState.shelfList.map((shelf) => (
                                            <li
                                                onClick={async () => {
                                                    await dispatch(addBookToShelf({ shelfName: shelf.name, bookId: state._id }));
                                                    await dispatch(getAllBookShelves());
                                                }}
                                                key={shelf._id}
                                                className="hover:bg-gray-100 cursor-pointer"
                                            >
                                                <a className="block py-2 px-4">{formatShelfName(shelf.name)}</a>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2 text-sm text-gray-500">No shelves found.</li>
                                    )}
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}