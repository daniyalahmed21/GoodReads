import { useEffect, useState } from 'react';
import { formatShelfName } from 'Helpers/Shelf';
import Layout from "Layouts/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createShelf, getAllBookShelves } from 'Redux/Slices/ShelfSlice';

import image from "Assets/600x400.svg";

export default function Shelf() {
    const shelfState = useSelector((state) => state.shelf);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeShelf, setActiveShelf] = useState(null);
    const [books, setBooks] = useState([]);
    const [shelfInput, setShelfInput] = useState("");

    async function loadShelfs() {
        if (shelfState.shelfList.length === 0) {
            const response = await dispatch(getAllBookShelves());
            if (response?.payload?.data?.data?.length > 0) {
                setBooks(response?.payload?.data?.data[0].books);
                setActiveShelf(response?.payload?.data?.data[0]._id);
            }
        } else if (shelfState.shelfList.length > 0) {
            setBooks(shelfState.shelfList[0].books);
            setActiveShelf(shelfState.shelfList[0]._id);
        }
    }

    function changeActiveShelf(id) {
        setActiveShelf(id);
        shelfState.shelfList.forEach(shelf => {
            if (shelf._id === id) {
                setBooks(shelf.books);
            }
        });
    }

    useEffect(() => {
        loadShelfs();
    }, []);

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 lg:p-8 max-w-7xl mx-auto min-h-screen">
                {/* Sidebar for Shelves */}
                <div className="w-full lg:w-80 bg-white rounded-lg p-4 shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bookshelves</h2>
                    <div className="space-y-2">
                        {shelfState.shelfList.length > 0 && shelfState.shelfList.map((shelf) => (
                            <button
                                key={shelf._id}
                                onClick={() => changeActiveShelf(shelf._id)}
                                className={`w-full text-left py-2 px-4 rounded-md text-lg transition-colors duration-200 ${
                                    activeShelf === shelf._id 
                                        ? 'bg-black text-white' 
                                        : 'bg-white text-gray-800 hover:bg-gray-100'
                                }`}
                            >
                                {formatShelfName(shelf.name)}
                            </button>
                        ))}
                    </div>
                    <div className="mt-6">
                        <input
                            className="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            placeholder="New shelf name"
                            onChange={(e) => setShelfInput(e.target.value)}
                            value={shelfInput}
                        />
                        <button
                            onClick={async () => {
                                await dispatch(createShelf({ shelfName: shelfInput }));
                                await dispatch(getAllBookShelves());
                                setShelfInput('');
                            }}
                            className="mt-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                            Create New Shelf
                        </button>
                    </div>
                </div>

                {/* Books Table */}
                <div className="flex-1">
                    {books.length > 0 ? (
                        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 text-gray-800">Title</th>
                                        <th className="p-4 text-gray-800">Rating</th>
                                        <th className="p-4 text-gray-800"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(book => (
                                        <tr
                                            key={book._id}
                                            className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                                            onClick={() => navigate("/book/description", { state: { ...book } })}
                                        >
                                            <td className="p-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12">
                                                        <img
                                                            src={image}
                                                            alt="Book Image"
                                                            className="w-full h-full object-cover rounded"
                                                        />
                                                    </div>
                                                    <span className="font-semibold text-gray-800 text-lg">{book.title}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-600">5</td>
                                            <td className="p-4">
                                                <button className="text-gray-800 hover:text-black font-medium">
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 p-8">
                            No books available in this shelf.
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}