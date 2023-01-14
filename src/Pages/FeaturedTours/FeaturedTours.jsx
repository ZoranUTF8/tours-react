import React from "react";
import "./featuredTours.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import TourCard from "../../Components/TourCard/TourCard";
import useGetFeaturedTours from "./useGetFeaturedTours";

const FeaturedTours = () => {
  const { isLoading, topTours, error } = useGetFeaturedTours();

  //! Crete is loading componet
  const {
    data: {
      data: { docs: tours },
    },
  } = topTours;
  console.log(tours);

  return (
    <Container>
      <Row>
        <Col md="12">
          <div className=" section-tittle text-center">
            <span>FEATURED TOURS</span>
            <h2>Favourite Places</h2>
            {/* FEATURED TOURS */}
            {tours.map((tour) => {
              return <h1>{tour.name}</h1>;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedTours;
