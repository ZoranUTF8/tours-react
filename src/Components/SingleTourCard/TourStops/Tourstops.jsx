import "./tourstop.css";

const Tourstops = ({ startLocation, tourLocations }) => {
  console.log(tourLocations);

  return (
    <div className="tourstop-container text-center text-muted d-flex flex-column align-content-center justify-content-center">
      <div className="tourstop_start_location mb-5">
        <h1 className="tourstop_title">Start location:</h1>
        <h3>{startLocation.description}</h3>
        <h3>{startLocation.address}</h3>
      </div>
      <div className="tourstop_tour_stops">
        <h1 className="tourstop_title">Tour stops:</h1>
        {tourLocations.map((location) => (
          <div className="tourstop_stop" key={location._id}>
            <h3>Day: {location.day}</h3>
            <a
              href={`https://www.google.com/maps/search/${location.description}`}
              target="_blank"
              className="text-muted"
            >
              <h3>{location.description}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tourstops;
