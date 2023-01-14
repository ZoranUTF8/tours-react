import { Image } from "react-bootstrap";
import servicesData from "../../assets/data/services/servicesData";
import "./OurServices.css";
const OurServices = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap pt-5 mt-5">
      {servicesData.map((item) => {
        return (
          <div className="mb-5 single_service_card" key={item.id}>
            <div className="single_service_icon_container">
              <Image src={item.icon} className="single_service_icon" />
            </div>
            <div>
              <h5 className="single_service_text">{item.title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurServices;
