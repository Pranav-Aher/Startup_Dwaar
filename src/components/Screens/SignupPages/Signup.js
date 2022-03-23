import React from "react";
import "./Signup.css";
import { useParams, Link, useNavigate, Outlet } from "react-router-dom";

const users = [
  {
    name: "founder",
    metainfo: "Who are seeking Funding and wants to grow in all horizon",
    info: "Get access to thousands of accredited investors & bring value added capital to your cap table.",
  },
  {
    name: "investor",
    metainfo: "Who wants to Fund the upcoming Enrepreuener",
    info: "Get access to thousands of verified startups to invest in & expand your investment portfolio.",
  },
  {
    name: "incubator",
    metainfo: "Who wants to promote and assist Bold Entrepreneurs",
    info: "Get access to thousands of verified startups to invest in & expand your investment portfolio.",
  },
  {
    name: "mentor",
    metainfo: "Who wants to help young Startups with  Knowledge & Experience.",
    info: "Get access to thousands of verified startups to share the knowledeg & help them.",
  },
  {
    name: "job-seeker",
    metainfo: "Who wants to be the part of  a Future Unicorn Company",
    info: "Get access to thousands of verified startups to invest in & expand your investment portfolio.",
  },
];
const Signup = () => {
  // const { user } = useParams();
  const navigate = useNavigate();
  return (
    <div className="signup-card-container">
      <Outlet />
      {users.map((user) => (
        <div className="signup-main fg-dark bg-white">
          <div className="text-xxl fg-bold">For {user.name.toUpperCase()}</div>
          <hr />
          <div className="text-lg fg-bold">{user.metainfo}</div>
          <span>{user.info}</span>
          <Link to={`/signup/${user.name}`}>
            <div
              className="btn btn-bg-primary fg-white"
              // onClick={() => navigate(`/signup/${user.name}`)}
            >
              Join us
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Signup;
