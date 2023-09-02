import React, { useState, useEffect } from "react";

function State() {
  const [counter, setCounter] = useState(1);
  const [value, setValue] = useState([]);

  const handleUp = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const handleDown = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setValue(data));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Fetch API using <span className="text-primary">useState</span>
      </h2>

      <div
        className="d-flex align-items-center justify-content-center bg-dark text-white p-3 rounded-circle"
        style={{ fontSize: "2rem", width: "50px", height: "50px" }}
      >
        {counter}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary mx-2" onClick={handleUp}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={handleDown}>
          -
        </button>
      </div>

      {value.map((post) => {
        if (post.id === counter) {
          return (
            <div key={post.id} className="mt-4">
              <div className="post-container bg-light p-3 rounded">
                <h2 className="post-title">
                  Title {post.id}: {post.title}
                </h2>
                <p className="post-body">Body: {post.body}</p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default State;
