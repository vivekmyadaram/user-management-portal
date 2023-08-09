import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAdd } from "./redux/userSlice";

const initialValue = { id: "", email: "", password: "", role: "" };

function AddUsers() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([{ ...initialValue }]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const newUsers = [...users];
    console.log(e.target.name, index);
    newUsers[index][e.target.name] = e.target.value;
    setUsers(newUsers);
  };

  const handleAddMore = () => {
    setUsers([...users, { ...initialValue }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAdd(users));
    setUsers([{ ...initialValue }]);
    navigate("/");
  };

  return (
    <div
      className="mt-5"
      style={{
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <h2 className="text-center">Add Users</h2>
      <form onSubmit={handleSubmit}>
        {users.map((user, index) => (
          <>
            <div className="border p-3 rounded mb-2" key={index}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={(e) => handleChange(e, index)}
                  required
                  name="email"
                  value={user.email}
                  type="email"
                  className="form-control"
                  placeholder="enter email here!"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={(e) => handleChange(e, index)}
                  required
                  name="password"
                  value={user.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="enter password here!"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  required
                  name="role"
                  className="form-select"
                  value={user.role}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="">select role</option>
                  <option value="admin">Admin</option>
                  <option value="client">Client</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
          </>
        ))}
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-danger btn-outline"
            onClick={handleAddMore}
          >
            + Add More
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUsers;
