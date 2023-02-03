import "./carouselCustom.css";

import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

const CarouselCustom = () => {
  const { tour } = useSelector((store) => store.singleTour);

  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        className="img"
        showThumbs={false}
      >
        {tour.images.map((img, indx) => {
          return (
            <div key={indx}>
              <img src={img} style={{ height: 500 }} />
              <p className="legend">{tour.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
