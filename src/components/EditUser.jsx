import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  onEditUserChange,
  onEditUserUpdate,
  userEdit,
} from "./redux/userSlice";

function EditUser() {
  const dispatch = useDispatch();
  const { editUser: user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(userEdit(params?.id));
  }, []);

  const handleChange = (e) => {
    dispatch(onEditUserChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onEditUserUpdate());
    navigate("/");
  };

  return (
    <div className="mt-5" style={{ maxWidth: 600, margin: "auto" }}>
      <h2 className="text-center">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="border p-3 rounded mb-2">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={handleChange}
              required
              name="email"
              value={user?.email}
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
              onChange={handleChange}
              required
              name="password"
              value={user?.password}
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
              value={user?.role}
              onChange={handleChange}
            >
              <option value="">select role</option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
