import React, { useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";

const SucessfullStartup = ({ setStartups, startups, setNumOfStartup }) => {
  const [startupDetails, setStartupDetails] = useState({});
  const [showBtn, setShowBtn] = useState(false);
  return (
    // <div>
    <div className="sucess-story-form">
      <div className="form-item">
        <InputBox
          idValue="startup-name"
          title="Startup Name"
          getData={(data) =>
            setStartupDetails({
              ...startupDetails,
              startupName: data,
            })
          }
          required
        />
      </div>
      <div className="form-item">
        <InputBox
          idValue="link"
          title="Website/App Link"
          getData={(data) =>
            setStartupDetails({
              ...startupDetails,
              link: data,
            })
          }
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="brief" className="text-md">
          Brief/Tagline
          <span className="fg-danger"> *</span>
        </label>
        <textarea
          // value={investorDetails.description}
          rows={5}
          name="idea"
          id="idea"
          className="input-field"
          placeholder="Tell us more..."
          onChange={(e) =>
            setStartupDetails({
              ...startupDetails,
              brief: e.target.value,
            })
          }
          required
        />
      </div>
      {!showBtn ? (
        <div className="form-item">
          <input
            // disabled={false}
            type={"button"}
            name="add"
            id="add"
            className={"input-field btn-bg-primary fg-white"}
            value={"Add"}
            onClick={() => {
              setStartups([...startups, startupDetails]);
              setShowBtn(true);
            }}
            required
          />
        </div>
      ) : (
        <></>
      )}
      {showBtn ? (
        <div className="form-btn-container">
          <input
            // disabled={false}
            type={"button"}
            name="add"
            id="add"
            className={"input-field btn bg-success fg-white"}
            value={"Add more"}
            onClick={() => setNumOfStartup((prev) => [...prev, 1])}
            required
          />
          <input
            // disabled={false}
            type={"button"}
            name="add"
            id="add"
            className={"input-field btn bg-danger fg-white"}
            value={"Remove"}
            // onClick={() => setStartups([...startups, startupDetails])}
            required
          />
        </div>
      ) : (
        <></>
      )}
    </div>
    // </div>
  );
};

export default SucessfullStartup;
