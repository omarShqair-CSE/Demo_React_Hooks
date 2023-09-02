import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const [sec, setSec] = useState([]);

  const end = useRef();
  const top = useRef();

  const scrollToBottom = () => {
    end.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToUp = () => {
    top.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((data) => setSec(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={scrollToBottom}>
          Go Down
        </button>
      </div>
      <div ref={top}></div>
      <div className="row">
        {sec.slice(0, 20).map((e, index) => (
          <div key={index} className="col-md-12 mb-4">
            <div className="card">
              <img
                src={e.thumbnailUrl}
                className="card-img-top"
                alt={e.title}
                width={150}
                height={150}
              />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div ref={end}></div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={scrollToUp}>
          Go Up
        </button>
      </div>
    </div>
  );
}

export default Ref;
