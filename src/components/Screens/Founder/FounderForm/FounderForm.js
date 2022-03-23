import React, { useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";
import "./FounderForm.css";

const FounderForm = () => {
  const [page, setPage] = useState(1);

  const [startupDetails, setStartupDetails] = useState({
    interests: [],
  });

  console.log(JSON.stringify(startupDetails));

  const onCheck = (e) => {
    const val = e.target.value;

    let vals;
    if (startupDetails.interests.includes(val)) {
      vals = startupDetails.interests.filter((interest) => interest !== val);
      setStartupDetails({
        ...startupDetails,
        interests: vals,
      });
      return;
    }
    setStartupDetails({
      ...startupDetails,
      interests: [...startupDetails.interests, val],
    });
  };

  console.log(startupDetails);
  const heading = [
    "About Startup",
    "Contact Information",
    "Category",
    "Your Interest",
  ];

  console.log(startupDetails);

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
                  idValue="startup-email"
                  title="Startup Email ID"
                  getData={(data) =>
                    setStartupDetails({
                      ...startupDetails,
                      startupEmailID: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="logo" className="text-md">
                  Please attach your Entity/Company Logo
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={startupDetails.logo}
                  type="file"
                  name="log"
                  id="log"
                  className="input-field"
                  onChange={(e) =>
                    setStartupDetails({
                      ...startupDetails,
                      logo: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <SelectBox
                value={startupDetails.fund}
                for={"fund"}
                label={"Funded or Bootstrapped"}
                default={"Select"}
                options={["Funded", "Bootstrapped"]}
                onChange={(e) =>
                  setStartupDetails({
                    ...startupDetails,
                    fund: e.target.value,
                  })
                }
              />

              <SelectBox
                for="stage"
                label="Select the Stage of Startup "
                value={startupDetails.stage}
                // onChange={onChange(e, )}
                default={"Select the Startup Stage"}
                options={[
                  "Ideation",
                  "Validation",
                  "Scaling",
                  "Early Traction",
                ]}
                onChange={(e) =>
                  setStartupDetails({
                    ...startupDetails,
                    stage: e.target.value,
                  })
                }
              />
              <></>
              <div className="form-item"></div>
              <div className="form-item">
                <label htmlFor="idea" className="text-md">
                  Brief Your Startup
                  <span className="fg-danger"> *</span>
                </label>
                <textarea
                  value={startupDetails.brief}
                  rows={5}
                  name="idea"
                  id="idea"
                  className="input-field"
                  placeholder="Let it flow..."
                  onChange={(e) =>
                    setStartupDetails({
                      ...startupDetails,
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
                    setStartupDetails({
                      ...startupDetails,
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
                    setStartupDetails({ ...startupDetails, state: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="city"
                  title="City"
                  getData={(data) =>
                    setStartupDetails({ ...startupDetails, city: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile Number"
                  getData={(data) =>
                    setStartupDetails({
                      ...startupDetails,
                      investorContact: data,
                    })
                  }
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="website"
                  title="Website URL"
                  getData={(data) =>
                    setStartupDetails({
                      ...startupDetails,
                      websiteURL: data,
                    })
                  }
                  required={false}
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobileAppLink"
                  title="Mobile App Link"
                  getData={(data) =>
                    setStartupDetails({
                      ...startupDetails,
                      mobileAppLink: data,
                    })
                  }
                />
              </div>
            </>
          ) : page === 3 ? (
            <>
              <SelectBox
                value={startupDetails.industry}
                for={"industry"}
                label={"Industry"}
                default={"Select"}
                options={[
                  "Analytics",
                  "Marketing",
                  "IT Services",
                  "Software development",
                  "Advertising",
                  "Automobile",
                ]}
                onChange={(e) =>
                  setStartupDetails({
                    ...startupDetails,
                    budget: e.target.value,
                  })
                }
              />

              <SelectBox
                for="sector"
                label="Sector"
                value={startupDetails.sector}
                // onChange={onChange(e, )}
                default={"Select"}
                options={["Adtech", "Online Classified", "Other"]}
                onChange={(e) =>
                  setStartupDetails({
                    ...startupDetails,
                    sector: e.target.value,
                  })
                }
              />

              <SelectBox
                for="services"
                label="Services "
                value={startupDetails.services}
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
                  setStartupDetails({
                    ...startupDetails,
                    services: e.target.value,
                  })
                }
              />

              <SelectBox
                for="nature"
                label="Nature of Entity"
                value={startupDetails.nature}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Private Limited Company",
                  "Limited Laibility Company",
                  "Registered Partnership",
                ]}
                onChange={(e) =>
                  setStartupDetails({
                    ...startupDetails,
                    nature: e.target.value,
                  })
                }
              />

              {startupDetails.nature === "Registered Partnership" ? (
                <>
                  <div className="form-item">
                    <InputBox
                      idValue="pan"
                      title="PAN"
                      getData={(data) =>
                        setStartupDetails({
                          ...startupDetails,
                          pan: data,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-item"></div>
                </>
              ) : (
                <>
                  <div className="form-item">
                    <InputBox
                      idValue="cin"
                      title="Company Incorporation Number (CIN)"
                      getData={(data) =>
                        setStartupDetails({
                          ...startupDetails,
                          cin: data,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-item">
                    <InputBox
                      idValue="legal-name"
                      title="Legal Name"
                      getData={(data) =>
                        setStartupDetails({
                          ...startupDetails,
                          legalName: data,
                        })
                      }
                      required
                    />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="form-item">You're intereted in...</div>
              <div className="form-item" />
              <div className="form-item">
                <label className="container">
                  All
                  <input
                    type="checkbox"
                    value={"All"}
                    onChange={(e) => onCheck(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Investor
                  <input
                    type="checkbox"
                    value={"investor"}
                    onChange={(e) => onCheck(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Mentor
                  <input
                    type="checkbox"
                    value={"mentor"}
                    onChange={(e) => onCheck(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-item">
                <label className="container">
                  Incubator
                  <input
                    type="checkbox"
                    value={"incubator"}
                    onChange={(e) => onCheck(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Professional Worker
                  <input
                    type="checkbox"
                    value={"professional worker"}
                    onChange={(e) => onCheck(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
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
                <input
                  type="checkbox"
                  value={"professional worker"}
                  onChange={(e) => onCheck(e)}
                />
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

export default FounderForm;
