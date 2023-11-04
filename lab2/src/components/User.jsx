import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export function User() {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="bg-warning">Loading...</div>;
  }

  if (error) {
    return <div className="bg-danger">Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="container p-5 mx-5">
        <div className="row p-5">
          <div className="col-12">
            <Table responsive className="table text-center">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
