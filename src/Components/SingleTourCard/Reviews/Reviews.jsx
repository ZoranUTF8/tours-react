import { useSelector, useDispatch } from "react-redux";
import Review from "./Review";

const Reviews = () => {
  const {
    tour: { reviews },
  } = useSelector((store) => store.singleTour);

  // ! make dispaly for no reviews
  // const res = [];
  // if (res.length < 1) {
  //   return <h1>Nor reviews for this tour</h1>;
  // }

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="mb-4 single-tour-page_title">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-muted single-tour-page_description_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>
      {reviews.map((review) => (
        <Review ReviewData={review} key={review.id} />
      ))}
    </>
  );
};

export default Reviews;
