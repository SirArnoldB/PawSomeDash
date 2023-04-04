import React from "react";
import { useParams } from "react-router-dom";
import { getPet } from "./PetsData";
import { Card, Button } from "react-bootstrap";
import PetPhotosCarousel from "../components/PetPhotosCarousel";
import PetBadgesRow from "../components/PetBadgesRow";
import PetAttributesRow from "../components/PetAttributesRow";
import ContactDetailsRow from "../components/ContactDetailsRow";

const PetDetails = () => {
  const params = useParams();
  const pet = getPet(parseInt(params.petId, 10));

  return (
    <div className="pet-details">
      {pet && (
        <Card
          style={{
            width: "80%",
            margin: "1rem",
            padding: "1rem",
            border: "1px solid #000",
            borderRadius: "5px",
            boxShadow: "0 0 10px #000",
            backgroundColor: "#fff",
            color: "#000",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Add the Pet Carousel with the pet photos */}
          {pet.photos.length > 0 && <PetPhotosCarousel photos={pet.photos} />}
          {/* Add pet Badges */}
          <PetBadgesRow pet={pet} />

          {/* Create a card body with the pet details */}
          <Card.Body>
            {/* Pet Name */}
            <Card.Title>{pet.name}</Card.Title>
            {/* Pet Description */}
            <Card.Text>{pet.description}</Card.Text>

            <Button
              style={{
                backgroundColor: pet.status === "adoptable" ? "green" : "red",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
              variant="primary"
            >{`Adoption Status: ${pet.status}`}</Button>

            {/* Add the Pet Attributes */}
            <PetAttributesRow pet={pet} />

            {/* Add the Contact Details */}
            <ContactDetailsRow pet={pet} />

            {/* Adopt Me Button */}
            {pet.status === "adoptable" && (
              <Button
                onClick={() => {
                  window.open(pet.url, "_blank");
                }}
                style={{
                  backgroundColor: "green",
                  marginTop: "3rem",
                }}
                variant="primary"
              >
                Adopt Me!
              </Button>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PetDetails;
