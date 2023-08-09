import React from "react";
import UsersList from "./UsersList";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h1 className="text-center">User Management Portal</h1>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              navigate("/add-user");
            }}
          >
            Add Users
          </button>
        </div>
      </div>
      <UsersList />
    </div>
  );
}

export default App;
