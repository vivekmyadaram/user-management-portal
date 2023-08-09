import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDelete } from "./redux/userSlice";

function UsersList() {
  const { usersList } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return usersList.length > 0 ? (
    <div
      className="container p-3"
      style={{ height: 550, overflow: "scroll", overflowX: "hidden" }}
    >
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersList?.map((user, index) => {
            return (
              <tr className="my-1" key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>{user?.password}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      navigate(`/${user.id}/edit-user`);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(userDelete(user?.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="container d-flex flex flex-row justify-content-center align-items-center vh-100">
      No Data Found
    </div>
  );
}

export default UsersList;
