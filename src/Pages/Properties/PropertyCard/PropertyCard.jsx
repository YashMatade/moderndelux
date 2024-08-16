import React from "react";
import "./PropertyCard.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const SkeletonLoader = () => {
  return (
    <div className="property">
      <Skeleton
        height={237.72}
        width="100%"
        className="property-image border"
        style={{ borderRadius: "21px", marginBottom: "1rem" }}
      />
      <div className="property-details">
        <div className="property_top_info">
          <Skeleton width="100%" height={24} className="property-name" />
          <Skeleton width="100%" height={20} className="property-address" />
        </div>
        <div className="property_more_info">
          {/* <div className="property-sex d-flex">
            <Skeleton circle={true} height={40} width={40} className="sex-logo" />
            <Skeleton width="30%" height={20} />
          </div> */}
          {/* <div className="property-sizes">
            <Skeleton width="20%" height={20} count={3} inline={true} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const PropertyCard = ({ Properties, isLoading }) => {
  console.log(Properties);
  if (isLoading) {
    return (
      <div className="property-card">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="property-card">
      {Properties.map((property, index) => (
        <div key={index} className="property">
          <LazyLoad height={200} offset={100}>
            {property?.pg_images &&
            Array.isArray(property?.pg_images) &&
            property?.pg_images?.length > 0 ? (
              <img
                src={property?.pg_images[0]}
                alt={`First Image`}
                className="property-image"
                style={{ width: "100%" }}
              />
            ) : (
              <p>No images available</p>
            )}
          </LazyLoad>
          <div className="property-details">
            <div className="property_top_info">
              <Link
                to={`/singleproperty/${property?.slug}` || ``}
                style={{ textDecoration: "none", color: " #000000" }}
              >
                <h1 className="property-name">{property?.pg_name}</h1>
              </Link>
              <p className="property-address">{property?.pg_address}</p>
            </div>
            <div className="text-start mt-3 mb-3">
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "#616161",
                }}
              >
                {property?.sex?.map((gender) => {
                  return (
                    <>
                      {" "}
                      <img
                        src={gender?.sex_icon}
                        className="img-fluid"
                        alt=""
                      />{" "}
                      {gender.sex_name}
                    </>
                  );
                })}
              </span>
              {property?.size?.map((size) => {
                return (
                  <span className="ms-3"> |&nbsp;&nbsp; {size.size_name} </span>
                );
              })}
            </div>
            {/* <div className="property_more_info">
              <div className="property-sex">
                <LazyLoad height={40} offset={100}>
                  <img src={property?.sex_icon} alt={property?.sex_name} className="sex-logo" />
                </LazyLoad>
                <p>{property?.sex_name}</p>
              </div>
              <div className="property-sizes">
                {property?.size?.map((size, idx) => (
                  <p key={idx}>{size?.sizename}</p>
                ))}
              </div>
            </div> */}
            {/* <div className="property-amenities">
              <p>Amenities:</p>
              <div className="all_amenities">
                {property?.room_amenities?.map((amenity, idx) => (
                  <div key={idx} className="single_amenity">
                    <LazyLoad height={40} offset={100}>
                      <img src={amenity?.amenity_logo} alt={amenity?.amenity_name} className="amenity-logo" />
                    </LazyLoad>
                    <span>{amenity?.amenity_name}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="interaction_btns">
              <button>Schedule Visit</button>
              <button className="inter_enquire">Enquire Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
