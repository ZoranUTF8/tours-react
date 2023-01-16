import "./testimonials.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Image } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <RiDoubleQuotesR size="5rem" />
      <div className="testimonials-container_text p-3">
        <h3>
          Experience the world with us and create memories that will last a
          lifetime.
        </h3>
      </div>
      <div>
        <Image
          className="testimonials-container_ceoImage"
          fluid
          roundedCircle={true}
          thumbnail={true}
          src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
      </div>
    </div>
  );
};

export default Testimonials;
