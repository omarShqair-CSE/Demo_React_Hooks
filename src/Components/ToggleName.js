import React, { useState } from "react";

function ToggleName() {
  const [TName, setTName] = useState({
    FName: "",
    LName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTName((prevTName) => ({
      ...prevTName,
      [name]: value,
    }));
  };

  return (
    <div className="my-4">
      <h2 className="text-primary">Toggle Name Component</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="fNameInput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fNameInput"
              name="FName"
              value={TName.FName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="lNameInput" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lNameInput"
              name="LName"
              value={TName.LName}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>First Name Is {TName.FName}</h3>
        </div>
        <div className="col-md-6">
          <h3>Last Name Is {TName.LName}</h3>
        </div>
      </div>
    </div>
  );
}

export default ToggleName;
