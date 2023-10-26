import React from "react";

const CustomerName = ({ name }) => {
  return (
    <div>
      <h1
        style={{ paddingRight: "3rem", fontSize: "1.6rem", color: "#FD8C04" }}
      >
        {name}
      </h1>
    </div>
  );
};

export default CustomerName;
