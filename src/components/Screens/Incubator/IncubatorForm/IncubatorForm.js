import React, { useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";
import SucessfullStartup from "./SucessfullStartup";

const IncubatorForm = () => {
  const [page, setPage] = useState(1);

  const [hasStartup, setHasStartup] = useState(0);
  const [startups, setStartups] = useState([]);
  const [numOfStartup, setNumOfStartup] = useState([]);

  const [povDetails, setPovDetails] = useState({});

  const [incubatorDetails, setIncubatorDetails] = useState({
    pov: povDetails,
    sucessfullStartups: startups,
  });

  const heading = [
    "Basic Information",
    "Contact Information",
    "Point of Contact",
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
              <div className="form-item">
                <InputBox
                  idValue="incubator-name"
                  title="Incubator Name"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      name: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="dipp"
                  title="DIIP Empanelment Number"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      dipp: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="logo" className="text-md">
                  Please attach your Company Logo
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={incubatorDetails.logo}
                  type="file"
                  name="log"
                  id="log"
                  className="input-field"
                  onChange={(e) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      logo: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-item">
                <label htmlFor="doe" className="text-md">
                  Date of Establisment
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={incubatorDetails.dateOfEst}
                  type="date"
                  name="doe"
                  id="doe"
                  className="input-field"
                  onChange={(e) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      dateOfEst: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="current-incubatees"
                  title="Number of Current Incubatees"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      currentIncubatees: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="graduated-incubatees"
                  title="Number of Graduated Incubatees"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      graduatedIncubatees: data,
                    })
                  }
                  required
                />
              </div>
              <SelectBox
                value={incubatorDetails.programDuration}
                for={"program-duration"}
                label={"Program Duration"}
                default={"Select"}
                options={[
                  "Upto 6 Months",
                  "6 to 12 Months",
                  "12 Months and above",
                ]}
                onChange={(e) =>
                  setIncubatorDetails({
                    ...incubatorDetails,
                    budget: e.target.value,
                  })
                }
              />
              <SelectBox
                for="stage"
                label="Select the Stage of Startup Interested"
                value={incubatorDetails.stage}
                // onChange={onChange(e, )}
                default={"Select the Startup Stage"}
                options={[
                  "Ideation",
                  "Validation",
                  "Scaling",
                  "Early Traction",
                ]}
                onChange={(e) =>
                  setIncubatorDetails({
                    ...incubatorDetails,
                    stage: e.target.value,
                  })
                }
              />
              <SelectBox
                for="industry"
                label="Industry "
                value={incubatorDetails.industry}
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
                  setIncubatorDetails({
                    ...incubatorDetails,
                    industry: e.target.value,
                  })
                }
              />
              <SelectBox
                for="interests"
                label="Interests"
                value={incubatorDetails.interest}
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
                  setIncubatorDetails({
                    ...incubatorDetails,
                    interest: e.target.value,
                  })
                }
              />
              <div className="form-item">
                <label htmlFor="idea" className="text-md">
                  Brief
                  <span className="fg-danger"> *</span>
                </label>
                <textarea
                  value={incubatorDetails.brief}
                  rows={5}
                  name="brief"
                  id="brief"
                  className="input-field"
                  placeholder="Let it flow..."
                  onChange={(e) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      brief: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item"></div>
            </>
          ) : page === 2 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="country"
                  title="Country"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
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
                    setIncubatorDetails({ ...incubatorDetails, state: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="city"
                  title="City"
                  getData={(data) =>
                    setIncubatorDetails({ ...incubatorDetails, city: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile Number"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      investorContact: data,
                    })
                  }
                />
              </div>
            </>
          ) : page === 3 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="first-name"
                  title="First Name"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      firsName: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="last-name"
                  title="Last Name"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      lastName: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="email-id"
                  title="Email ID"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      emailId: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile number"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      mobileNum: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="role"
                  title="Role"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      role: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="landlineNum"
                  title="Landline Number"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      landlineNum: data,
                    })
                  }
                  required={false}
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="website"
                  title="Website"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      website: data,
                    })
                  }
                  required={false}
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="social-media"
                  title="Social Media URL"
                  getData={(data) =>
                    setPovDetails({
                      ...povDetails,
                      socialMediaURL: data,
                    })
                  }
                  required={false}
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

export default IncubatorForm;
