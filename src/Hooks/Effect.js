import React, { useEffect, useState } from "react";

function Effect() {
  const [posts, setPosts] = useState([]);
  const [postValue, setPostValue] = useState([]);

  const handleChange = (event) => {
    const filter = posts.filter((post) =>
      post.email.includes(event.target.value)
    );
    setPostValue(filter);
  };

  useEffect(() => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/comments");
    request.send();
    request.onload = () => {
      const responseJSON = JSON.parse(request.responseText);
      setPostValue(responseJSON);
    };
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);

        setPostValue(data);
      });
  }, []);

  return (
    <div className=" bg-dark text-light pt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="d-flex align-items-center justify-content-center">
            Fetch API using <span className="text-primary ms-3">useEffect</span>
          </h2>
          <input
            type="search"
            className="form-control mb-3"
            placeholder="Search by email..."
            onInput={handleChange}
          />
          {postValue.map((e, index) => (
            <div className="card bg-secondary text-white mb-2" key={index}>
              <div className="card-body">
                <p className="card-text" style={{ fontSize: "1.2rem" }}>
                  {e.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Effect;
