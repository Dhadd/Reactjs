import React from "react";

const Dropdown = ({ dropdowndata }) => {
  console.log(dropdowndata);
  return (
    <>
      <select
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.822)",
          color: "white",
          fontSize: "15px",
          fontWeight: "200",
          marginTop: "30px",
        }}
      >
        {dropdowndata.map((data) => (
          <option>{data.product_name}</option>
        ))}
      </select>
      <br />

      <select
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.822)",
          color: "white",
          fontSize: "15px",
          fontWeight: "200",
          marginTop: "30px",
        }}
      >
        {dropdowndata.map((data) => (
          <option>{data.address.state}</option>
        ))}
      </select>
      <br />

      <select
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.822)",
          color: "white",
          fontSize: "15px",
          fontWeight: "200",
          marginTop: "30px",
        }}
      >
        {dropdowndata.map((data) => (
          <option>{data.address.city}</option>
        ))}
      </select>
      <br />

    
    </>
  );
};

export default Dropdown;
