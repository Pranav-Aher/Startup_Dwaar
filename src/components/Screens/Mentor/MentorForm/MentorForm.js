import React, { useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";
import SucessfullStartup from "../../Investor/InvestorForm/SucessfullStartup.js";
import "./MentorForm.css";

const MentorForm = () => {
  const [page, setPage] = useState(1);
  const [network, setNetwork] = useState(false);

  console.log("====================================");
  console.log(network);
  console.log("====================================");

  const [hasStartup, setHasStartup] = useState(0);
  const [startups, setStartups] = useState([]);
  const [numOfStartup, setNumOfStartup] = useState([]);

  const [povDetails, setPovDetails] = useState({});

  const [mentorDetails, setMentorDetails] = useState({ network: "TIE" });

  console.log(JSON.stringify(mentorDetails));

  const onChange = () => {};
  const heading = [
    "Network Information",
    "About Mentor",
    "Contact Information",
    "Sucess Stories",
  ];

  console.log(startups);

  return (
    <div className="form w-100">
      <div className="form-container bg-white p-5">
        <div className="text-xxl align-center subhead fg-dark">
          {heading[page - 1]}
        </div>
        <div className="progress-bar text-xs fg-black">
          <span className="text-xs">Step 1</span>
          <span className="text-xs">Step 2</span>
          <span className="text-xs">Step 3</span>
          <span className="text-xs">Step 4</span>
        </div>
        <div>
          <span
            className="fill-color bg-primary"
            style={{ width: `${(page / 4) * 100}%` }}
          ></span>
        </div>
        <hr className="mb" />
        <div className="form-main mt-4">
          {page === 1 ? (
            <>
              <label class="container text-lg">
                Select your Network
                <label class="container text-lg mt-4">
                  Member of TIE
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setNetwork(false)}
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="container text-lg">
                  Other
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setNetwork(true)}
                  />
                  <span class="checkmark"></span>
                </label>
                {network ? (
                  <>
                    <div className="form-item">
                      <label htmlFor="network" className="text-md">
                        Description
                        <span className="fg-danger"> *</span>
                      </label>
                      <textarea
                        rows={5}
                        name="network"
                        id="network"
                        className="input-field"
                        placeholder="Describe..."
                        onChange={(e) =>
                          setMentorDetails({
                            ...mentorDetails,
                            network: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="form-item"></div>
                  </>
                ) : (
                  ""
                )}
              </label>
            </>
          ) : page === 2 ? (
            <>
              <div className="form-item">
                <label htmlFor="logo" className="text-md">
                  Please attach your Company Logo
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={mentorDetails.logo}
                  type="file"
                  name="log"
                  id="log"
                  className="input-field"
                  onChange={(e) => onChange("logo", e)}
                  required
                />
              </div>

              <SelectBox
                for="stage"
                label="Select the Stage of Startup "
                value={mentorDetails.stage}
                // onChange={onChange(e, )}
                default={"Select the Startup Stage"}
                options={[
                  "networktion",
                  "Validation",
                  "Scaling",
                  "Early Traction",
                ]}
                onChange={(e) =>
                  setMentorDetails({
                    ...mentorDetails,
                    stage: e.target.value,
                  })
                }
              />
              <div className="form-item">
                <InputBox
                  idValue="active-months"
                  title="No. of Months Active"
                  getData={(data) =>
                    setMentorDetails({
                      ...mentorDetails,
                      activeMonths: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="experience-year"
                  title="No. of Experience Year"
                  getData={(data) =>
                    setMentorDetails({
                      ...mentorDetails,
                      yearsOfExperience: data,
                    })
                  }
                  required
                />
              </div>
              <SelectBox
                for="industry"
                label="Industry "
                value={mentorDetails.industry}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Analytics",
                  "Advertising",
                  "Software",
                  "Marketing",
                  "Electonics",
                  "Automobile",
                ]}
                onChange={(e) =>
                  setMentorDetails({
                    ...mentorDetails,
                    industry: e.target.value,
                  })
                }
              />

              <SelectBox
                for="interest"
                label="Interest "
                value={mentorDetails.interest}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Private",
                  "Government",
                  "Local based Servicing",
                  "Manufacturing",
                  "Mobile",
                  "Marketplace",
                  "Saas",
                  "Peer to Peer",
                ]}
                onChange={(e) =>
                  setMentorDetails({
                    ...mentorDetails,
                    interest: e.target.value,
                  })
                }
              />

              <div className="form-item">
                <label htmlFor="network" className="text-md">
                  Abour ur self
                  <span className="fg-danger"> *</span>
                </label>
                <textarea
                  value={mentorDetails.description}
                  rows={5}
                  name="network"
                  id="network"
                  className="input-field"
                  placeholder="Let it flow..."
                  onChange={(e) =>
                    setMentorDetails({
                      ...mentorDetails,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item"></div>
            </>
          ) : page === 3 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="country"
                  title="Country"
                  getData={(data) =>
                    setMentorDetails({
                      ...mentorDetails,
                      country: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="state"
                  title="State"
                  getData={(data) =>
                    setMentorDetails({ ...mentorDetails, state: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="city"
                  title="City"
                  getData={(data) =>
                    setMentorDetails({ ...mentorDetails, city: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile Number"
                  getData={(data) =>
                    setMentorDetails({
                      ...mentorDetails,
                      investorContact: data,
                    })
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-item">
                <span>
                  <label htmlFor="sucess-story" className="text-md">
                    Sucess Stories?
                    {/* <span className="fg-danger"> *</span> */}
                  </label>
                  <input
                    value={hasStartup}
                    type="range"
                    name="sucess-story"
                    id="sucess-story"
                    // className="input-field"
                    className="slider-btn fg-primary"
                    min={0}
                    max={1}
                    onChange={(e) => {
                      setHasStartup(e.target.value);
                      setNumOfStartup([...numOfStartup, e.target.value]);
                    }}
                    required
                  />
                </span>
              </div>
              <div className="form-item align-center"></div>

              {numOfStartup.map((num) => (
                <SucessfullStartup
                  setStartups={setStartups}
                  startups={startups}
                  setNumOfStartup={setNumOfStartup}
                />
              ))}
              <mb />
              <label className="container text-md">
                Terms and conditions The information posted on this website
                could include hypertext links or pointers to information created
                and maintained by non-Government/private organisations. DPIIT is
                providing these links and pointers solely for your information
                and convenience. When you select a link to an outside website,
                you are leaving the 'Guidelines for Indian Government Websites'
                site and are subject to the privacy and security policies of the
                owners/sponsors of the outside website. These terms and
                conditions shall be governed by and construed in accordance with
                the Indian Laws. Any dispute arising under these terms and
                conditions shall be subject to the jurisdiction of the courts of
                India.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </>
          )}

          <div className="form-item">
            <input
              type={"button"}
              name="go-back"
              id="go-back"
              className="input-field
              btn-bg-secondary fg-primary"
              value={"Go Back"}
              onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
              required
            />
          </div>
          <div className="form-item">
            <input
              disabled={false}
              type={"button"}
              name="submit-btn"
              id="submit-btns"
              className={`input-field ${
                // checkAllFields()
                true ? "btn-bg-primary" : "btn-primary"
              } fg-white`}
              value={page === 4 ? "Submit" : "Next"}
              onClick={() => setPage((prev) => (prev === 4 ? prev : prev + 1))}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorForm;
