import { useEffect } from "react";
import "./singleTourCard.css";
import { Link } from "react-router-dom";
// REACT ICONS
import { GiDuration } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { BiWalk } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
// REACT ICONS END
import { Loading } from "../index";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleTour } from "../../features/Tour/singleTourSlice";
import { Container, Row, Col, Image } from "react-bootstrap";
import CarouselCustom from "./Carousel/CarouselCustom";
import Reviews from "./Reviews/Reviews";
import MapBox from "./MapBox/MapBox";

const SingleTourCard = () => {
  const { slug } = useParams();
  const { tour, isLoading } = useSelector((store) => store.singleTour);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleTour(slug));
  }, []);

  if (isLoading || !tour) {
    return <Loading />;
  }

  const nextToutStartDate = new Date(tour?.startDates[0]).toLocaleString(
    "en-us",
    {
      month: "long",
      year: "numeric",
    }
  );

  return (
    <Container fluid className="fullPage">
      <Row className="single-tour-page single-tour-page-header">
        <Col
          lg={5}
          className="p-3 text-center d-flex align-items-center justify-content-center"
        >
          <section className="single-tour-page_top_left">
            <h1 className="single-tour-page_title">{tour?.name}</h1>

            <p className="single-tour-page_summary">{tour?.summary}</p>
            <div className="single-tour-page_info d-flex flex-row align-items-center justify-content-between">
              <p>
                <GiDuration />
                {tour?.duration}
              </p>
              <p>
                <MdOutlineLocationOn />
                {tour?.startLocation?.description}
              </p>
            </div>
          </section>
        </Col>
        <Col
          lg={7}
          className=" d-flex align-items-center justify-content-center"
        >
          <section className="text-center">
            <Image
              fluid
              src={tour?.imageCover}
              className="single-tour-page_top_right-image"
            />
          </section>
        </Col>
      </Row>
      <Row className="single-tour-page_about_and_facts_container">
        <Col lg={6} md={12} className="p-3 single-tour-page_about_tour">
          <div className="single-tour-page_about_tour p-3">
            <p className="single-tour-page_title">Quick facts</p>
            <div className="single-tour-page_container">
              <p className="single-tour-page_about_tour_single">
                <BsCalendar3 size={30} />
                <span className="single-tour-page_single_span text-muted">
                  next date
                </span>
                <p className="text-muted single-tour-page_single_data">
                  {nextToutStartDate}
                </p>
              </p>
              <p className="single-tour-page_about_tour_single">
                <BiWalk size={30} />
                <span className="single-tour-page_single_span text-muted">
                  difficulty
                </span>
                <p className="single-tour-page_single_data text-muted">
                  {tour?.difficulty}
                </p>
              </p>
              <p className="single-tour-page_about_tour_single">
                <HiUserGroup size={30} />
                <span className="single-tour-page_single_span text-muted">
                  participants
                </span>
                <p className="single-tour-page_single_data text-muted">
                  {tour?.maxGroupSize} people
                </p>
              </p>
              <p className="single-tour-page_about_tour_single">
                <AiFillStar size={30} />
                <span className="single-tour-page_single_span text-muted">
                  rating
                </span>
                <p className="single-tour-page_single_data text-muted">
                  {tour?.ratingAverage.toFixed(2)}/5
                </p>
              </p>
            </div>
          </div>

          <div className="single-tour-page_about_tour p-3">
            <div className="single-tour-page_title">your tour guides</div>
            <div className="single-tour-page_container">
              {tour?.guides.map((guide) => {
                return (
                  <p
                    className="single-tour-page_about_tour_single"
                    key={guide._id}
                  >
                    <Image
                      fluid
                      roundedCircle
                      src={guide?.avatar}
                      alt={guide.name}
                      className="single-tour-page_about_tour_single_avatar"
                    />
                    <span className="single-tour-page_single_span text-muted">
                      tour guide
                    </span>
                    <p className="text-muted single-tour-page_single_data">
                      {guide?.name}
                    </p>
                  </p>
                );
              })}
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          md={12}
          className=" p-3 single-tour-page_quick_facts d-flex align-items-center"
        >
          <div className="single-tour-page-tour-description text-center p-3">
            <p className="single-tour-page-tour-description single-tour-page_title">
              About {tour.name}
            </p>
            <p className="single-tour-page_description_text text-muted">
              {tour.description}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="p-5">
          <CarouselCustom />
        </Col>
      </Row>
      <Row className="single-tour-page-reviews">
        <Col className="p-3 d-flex align-items-center justify-content-center flex-wrap">
          <Reviews />
        </Col>
      </Row>
      <Row>
        <Col lg={6} xs={12} className="p-3 single-tour-page-left-section">
          <h1>Left side</h1>
        </Col>
        <Col
          lg={6}
          xs={12}
          className="p-5 single-tour-page_about_and_facts_container"
        >
          <MapBox
            startLocation={tour.startLocation}
            tourLocations={tour.locations}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTourCard;
