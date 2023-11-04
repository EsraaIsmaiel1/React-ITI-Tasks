import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
export default function Student() {
  let [data, setData] = useState([]);
  let [name, setName] = useState("");
  let [age, setAge] = useState("");

  let handleNameChange = (e) => {
    setName(e.target.value);
  };

  let handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  let addStudent = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let student = {
        name: name,
        age: age,
      };
      setData([...data, student]);
      setName("");
      setAge("");
    }
  };

  let [formErrors, setFormErrors] = useState({});
  let validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    } else if (name.length < 4) {
      errors.name = "Name must be at least 4 characters";
      isValid = false;
    }

    if (!age) {
      errors.age = "Age is required";
      isValid = false;
    } else if (isNaN(age)) {
      errors.age = "Age must be a number";
      isValid = false;
    } else if (parseInt(age) <= 18) {
      errors.age = "Age must be above 18";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };
  let removeStudent = (index) => {
    setData((data) => data.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="col-12">
        <div className="container text-bg-primary text-center p-4 ">
          <h1 className="p-4"> Student list</h1>
          <form className="row g-5" onSubmit={addStudent}>
            <div className="col-md-4">
              <label htmlFor="validationServer01" className="form-label">
                Student name
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                id="validationServer01"
                name="name"
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="validationServer02" className="form-label">
                Age
              </label>
              <input
                value={age}
                onChange={handleAgeChange}
                type="text"
                className={`form-control ${formErrors.age ? "is-invalid" : ""}`}
                id="validationServer02"
                name="age"
              />
              {formErrors.age && <div className="invalid-feedback">{formErrors.age}</div>}
            </div>
            <div className="col-12">
              <button className="btn btn-light mb-3" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-12">
          <Table responsive className="table text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <th>
                    <button className="btn btn-danger" onClick={() => removeStudent(index)}>
                      Remove
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
