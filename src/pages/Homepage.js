import React, { useEffect, useState } from "react";
import axios from "axios";
import AllReviews from "../review-mocks/reviews.json";

import { Row, Button } from "react-bootstrap";

import Splash from "../components/Splash";
import Product from "../components/Product";

import "../styles/homepage.scss";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products?offset=${currentOffset}&limit=10`
      )
      .then((res) => {
        allProducts.length > 0
          ? setAllProducts(allProducts.concat(res.data))
          : setAllProducts(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(`Error fetching all products: ${e}`));
  }, [currentOffset]); // dependency which handles pagination

  const searchForProduct = () => {
    if (searchTerm !== "") {
      axios
        .get(`https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`)
        .then((res) => setAllProducts(res.data))
        .catch((e) => console.log(`Error searching for ${searchTerm}: ${e}`));
    }
  };

  const renderAllProducts = () => {
    return allProducts.length > 0 ? (
      <>
        {allProducts.map((product) => {
          // add up to 4 reviews and ratings to products
          const numReviews = Math.floor(Math.random() * 5);
          const randomReviews = AllReviews.sort(
            () => 0.5 - Math.random()
          ).slice(0, numReviews);

          return (
            <Product
              key={product.id}
              productData={product}
              reviews={randomReviews}
            />
          );
        })}
        <Button
          variant="outline-primary"
          size="sm"
          className="loadMoreBtn"
          onClick={() => setCurrentOffset(currentOffset + 10)}
        >
          Load more
        </Button>
      </>
    ) : (
      <div className="noResultsCont">
        <h2>No results found!</h2>
        <Button
          onClick={() => {
            setSearchTerm("");
            //protection to trigger API call in case that there is no found results and the offset has not been increased with pagination
            currentOffset === 1 ? setCurrentOffset(0) : setCurrentOffset(1);
          }}
        >
          Click here to reload
        </Button>
      </div>
    );
  };

  return (
    <>
      <Splash />

      <Row className="searchCont">
        <h3>Looking for something specific?</h3>
        <input
          variant="primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-primary" onClick={searchForProduct}>
          Search
        </Button>
      </Row>

      <Row lg={3} sm={2} xs={1}>
        {isLoading ? <h2>Loading...</h2> : renderAllProducts()}
      </Row>
    </>
  );
};

export default Homepage;
