import Carousel from "react-bootstrap/Carousel";

const PetPhotosCarousel = ({ photos }) => {
  return (
    <Carousel variant="dark" fade>
      {photos.map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            style={{
              height: "500px",
              objectPosition: "cover",
              objectFit: "fill",
              width: "50%",
              imageRendering: "crisp-edges",
              imageResolution: "100dppx",
              margin: "1rem",
            }}
            src={
              photo.small
                ? photo.small
                : photo.medium
                ? photo.medium
                : photo.large
                ? photo.large
                : photo.full
            }
            alt="First Image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PetPhotosCarousel;
