import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

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
      
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-2 md:grid-cols-4  gap-5">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>}
    </div>
  );
}

export default App;
