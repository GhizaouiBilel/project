import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userActions";
import "./Profile.css";

const Profile = () => {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {users && (
            <p className="body">
              <h1 className="icon">
                {users.name[0]}
                {users.name[1]}
              </h1>{" "}
              <br /> <br />
              <br />
              {users.name}
              <br /> <br />
              <br />
              {users.email} <br /> <br />
              <br />
              {users.phone} <br /> <br />
              <br />
              {users.address}
              <br /> <br />
              <br />
              {users.userRole}
              <br /> <br />
              <br />
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
