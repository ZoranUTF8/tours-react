import React from "react";
import "./featuredTours.css";
import { Loading, TourCard } from "../../Components";
import useGetFeaturedTours from "./useGetFeaturedTours";

const FeaturedTours = () => {
  const { isLoading, topTours, error } = useGetFeaturedTours();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="section-tittle text-center">
      <span >FEATURED TOURS</span>
      <h2 className="text-muted">Top 6 Favourite Places</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {/* FEATURED TOURS */}
        {topTours.map((tour) => {
          return <TourCard {...tour} key={tour.id} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedTours;
