import "./review.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Card from "react-bootstrap/Card";
const Review = ({
  ReviewData: {
    rating,
    reviewText,
    user: { avatar, name },
  },
}) => {
  return (
    <Card className="single-tour-review-card-container">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <Card.Img
          className="single-tour-review-card_image"
          variant="top"
          src={avatar}
        />
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">
          {reviewText.length > 80
            ? reviewText.slice(0, 80) + " ..."
            : reviewText}
        </Card.Text>
        <Card.Text className="text-muted">
          {[0, 1, 2, 3, 4].map((star, indx) => {
            return rating > star ? (
              <AiFillStar key={indx} />
            ) : (
              <AiOutlineStar key={indx} />
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Review;
