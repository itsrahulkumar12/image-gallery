import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("mountains");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=33083899-1dcf775f0e9ace6580c8b41e1&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto p-5">
      <ImageSearch searchText={text => setTerm(text)} />

      {!isLoading && images.length == 0 && <h1 className="text-5xl text-center font-semibold text-red-600 mx-auto mt-32">No Images Found !! </h1>}
      
      {isLoading ? <h1 className="text-6xl text-center text-teal-500 mx-auto mt-32">Loading...</h1> : <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>}
    </div>
  );
}

export default App;
