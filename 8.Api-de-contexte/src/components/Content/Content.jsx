import React, { useContext } from "react";
import "./Content.css";
import { ThemeContext } from "../../context/ThemeProvider.jsx";

export default function Content() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1>You are in {darkMode ? "Dark" : "Light"} mode.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        debitis, doloribus est illo itaque placeat sequi unde voluptatem? Ab
        alias aliquam architecto asperiores assumenda distinctio dolorum eius
        enim facere impedit ipsum iure laboriosam libero magnam magni nam, neque
        nihil optio porro, praesentium quisquam repudiandae rerum tenetur unde,
        vel. Aliquam aperiam delectus, deserunt dolor dolorum, ducimus fugit
        illum, molestias nesciunt omnis vitae voluptatem voluptates. Ad alias
        amet aperiam beatae blanditiis cumque dolor doloremque ea earum eos
        impedit ipsa iste itaque iure laboriosam magni minima necessitatibus
        nisi non obcaecati, perferendis quia quos ratione similique sint sit
        suscipit ut vel voluptas voluptatem! Rerum!
      </p>
    </div>
  );
}
