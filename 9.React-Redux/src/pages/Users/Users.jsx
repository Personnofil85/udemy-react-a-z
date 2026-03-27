import React from "react";
// Appeler les données
import { useSelector, useDispatch } from "react-redux";
// Créateur d'action
import { getData } from "../../features/users.js";
import spinner from "../../assets/spinner.svg";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  console.log("USERS", users);

  if (!users.data && !users.loading && !users.error) {
    // Fonction executée avec le thunk de middleware
    dispatch(getData());
  }

  return <div>Users</div>;
}
