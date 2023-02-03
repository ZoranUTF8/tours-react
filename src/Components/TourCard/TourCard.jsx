import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { AiFillFlag } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { GiPriceTag } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";
import { VscSymbolNumeric } from "react-icons/vsc";
import "./tourCard.css";

const TourCard = ({
  name,
  summary,
  price,
  ratingAverage,
  ratingQuantity,
  duration,
  slug,
  guides,
  imageCover,
  difficulty,
  locations,
  maxGroupSize,
  startDates,
  startLocation,
  _id,
}) => {
  const tourStartDate = new Date(startDates[0]);

  return (
    <Card style={{ width: "18rem" }} className="m-3 tour-card">
      <Card.Img variant="top" src={imageCover} className="card-image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
      <Card.Body className="tour-card_option bg-secondary text-light d-flex justify-content-between">
        <BsQuestionLg />
        <p className="tour-card_option_text">
          {difficulty} {duration} - days tour
        </p>
      </Card.Body>
      <Card.Body className=" tour-card_option d-flex justify-content-between">
        <ImLocation />
        <p>{startLocation.description}</p>
      </Card.Body>
      <Card.Body className="tour-card_option bg-secondary text-light d-flex justify-content-between">
        <AiFillFlag />
        <p>{locations.length} stops</p>
      </Card.Body>
      <Card.Body className=" tour-card_option d-flex justify-content-between">
        <BiTimeFive />
        <p>
          {tourStartDate.toLocaleString("en-us", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </Card.Body>
      <Card.Body className="tour-card_option bg-secondary text-light d-flex justify-content-between">
        <HiUserGroup />
        <p>{maxGroupSize} persons</p>
      </Card.Body>
      <Card.Body className="tour-card_option d-flex justify-content-between">
        <p>
          <VscSymbolNumeric /> {ratingQuantity}
        </p>
        <p>
          <MdRateReview /> {ratingAverage.toFixed(2)}
        </p>
      </Card.Body>
      <Card.Footer className="text-muted  d-flex justify-content-between">
        <p className="tour-card_price">
          <GiPriceTag /> <span>{price}</span> $ per person
        </p>

        <Link to={`/tour/${slug}`} className="card_details_button">
          Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TourCard;
