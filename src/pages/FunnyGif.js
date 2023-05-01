import React from "react";
import Container from "react-bootstrap/Container";

import "../styles/secondaryPages.scss";

const FunnyGif = () => {
  return (
    <Container className="mainCont">
      <h1>FUNNY GIF</h1>
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmM1Nzg2NTFkNGZiZTNkZmFjYzdiNGQwOGUzODkxZjU3ODM4MmQyMyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/JIX9t2j0ZTN9S/giphy.gif"
        alt="What a shame, you're missing a great gif"
      />
    </Container>
  );
};

export default FunnyGif;
