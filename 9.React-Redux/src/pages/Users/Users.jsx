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

  let content;
  if (users.loading) {
    content = (
      <div className="relative flex justify-content items-center">
        <img
          src={spinner}
          alt="Loading..."
          className="w-10 h-10 absolute inset-0 m-auto"
        />
      </div>
    );
  } else if (users.error) {
    content = (
      <p className="bg-red-500 text-slate-50 p-1 inline-block font-bold text-sm">
        Oups! Something went wrong ...
      </p>
    );
  } else if (users.data) {
    content = (
      <ul>
        {users.data.map((user) => (
          <li className="text-slate-50 text-lg" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="bg-emerald-900 p-4 min-h-[250px]">
      <p className="text-2xl mb-5 text-slate-100">Users list :</p>
      {content}
    </div>
  );
}
