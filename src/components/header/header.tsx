import React from "react";
import { Link } from "react-router-dom";
import { useGlobalData } from "../../hooks";

const Header: React.FC = () => {
  const { state } = useGlobalData();

  console.log(state);
  return (
    <>
      <div>
        <img
          src="https://mg-show-assets.s3.us-east-1.amazonaws.com/images/topics/000.png"
          alt=""
          width="80"
        />
        <div>
          <h1>Oh CMS</h1>
          <small>
            <Link to="/home">Home</Link> | <Link to="/out">Out</Link> |{" "}
            <Link to="/episodes">Episodes</Link> |{" "}
            <Link to="/hosts">Hosts</Link> |{" "}
            <Link to="/social-networks">Social Networks</Link>
          </small>
        </div>
      </div>
    </>
  );
};

export default Header;
