import {  Col } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 mb-5" fluid>
      <div className="jumbotron full-height-element d-flex align-items-center justify-content-center flex-column">
        <div className="spinner-border mb-3"></div>
        <h1>Loading</h1>
      </div>
    </div>
  );
};

export default Loading;
