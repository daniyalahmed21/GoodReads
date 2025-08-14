import React, { useEffect } from "react";
import BookCard from "Components/BookCard";
import Layout from "Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllBooks } from "Redux/Slices/BookSlice";

const Dashboard = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookState = useSelector((state) => state.book);

  const downloadBooks = async () => {
    if (bookState.bookList.length === 0) {
      const response = await dispatch(getAllBooks());
      console.log(response);
    }
  };

  useEffect(() => {
    if (!authState.isLoggedIn) {
      navigate("/signin");
    } else {
      downloadBooks();
    }
  }, [authState.isLoggedIn, navigate, bookState.status, dispatch]);

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        {bookState.bookList.map((book) => (
          <BookCard key={book.id} author={book.author} title={book.title} />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
