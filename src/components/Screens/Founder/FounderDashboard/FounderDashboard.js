import React from "react";
import "./FounderDashboard.css";

import YoutubeEmbed from "../../../../assets/vids/YoutubeEmbed.js";

const FounderDashboard = () => {
  return (
    <div>
      <div className="page-section">
        <div className="container dashboard bg-primary">
          <div className="text-center">
            <h1 className="dash-title">
              Services we provide for Entrepreneurs
            </h1>
            <h2>See what can we do for your Business</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center img-border">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/investors.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Investors</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/incubators.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Incubators</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/mentors.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Mentorship</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
              <div className="text-center">
                <div className="img-fluid mb-4">
                  <img
                    src={require("../../../../assets/img/jobs.jpg")}
                    alt=""
                    height="160px"
                    width="220px"
                  />
                </div>
                <h5>Job Careers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq_main">
        <h2 className="faq_header">Frequently Asked Questions(FAQs)</h2>
        <details open>
          <summary>How to register your new Business?</summary>
          <div className="faq__content">
            <p>
              <ol>
                <li>
                  <h3>
                    Get Digital Signature Certificates from the authorities:
                  </h3>
                  <p>
                    As the registration process of the company is completely
                    online, Digital signatures are required to file the forms on
                    the MCA portal. DSC is mandatory for all the proposed
                    directors and the subscribers of the Memorandum of
                    Association (MoA) and Articles of Association (AoA).
                  </p>
                </li>
                <li>
                  {" "}
                  <h3>Direct Identification Number</h3>
                  <p>
                    The Director Identification Number (DIN) is an
                    identification number for a director and it has to be
                    obtained by anyone who wants to be a director in a company.
                    The DIN of all the proposed directors of the company along
                    with the name and the address proof are to be provided in
                    the company registration form. DIN can be obtained while
                    filing the SPICe+ form, i.e. company registration form.{" "}
                  </p>
                </li>
                <li>
                  <h3>Registration on the MCA Portal </h3>
                  <p>
                    To apply for company registration, the SPICe+ form is to be
                    filled out and submitted on the MCA portal. To fill out the
                    SPICe+ form and submit documents, the director of the
                    company has to register on the MCA portal. After
                    registration, the director can log in and will obtain access
                    to the MCA portal services which include filing e-forms and
                    viewing public documents.
                  </p>
                </li>
                <li>
                  <h3>Certificate of Incorporation</h3>
                  <p>
                    Once, the registration application is filled and submitted
                    along with the required documents, the Registrar of
                    Companies will examine the application. Upon verification of
                    the application, he will issue the Certificate of
                    Incorporation of the Company.
                  </p>
                  <p>
                    The Certificate of Incorporation is issued with PAN and TAN
                    as allotted by the Income Tax Department. An electronic mail
                    with Certificate of Incorporation as an attachment along
                    with PAN and TAN will also be sent to the applicant.
                  </p>
                </li>
              </ol>
            </p>
          </div>
        </details>
        <details>
          <summary>How does Startup Dwaar help you grow your business?</summary>
          <div className="faq__content">
            <p>
              Startup Dwaar is a not for profit platform for engaging and
              innovative entrepreneurs providing a suitable environment for
              startups to bloom. We also have a network of diverse investors
              looking forward to invest capital and scale the new business,
              according to the market requirements.
            </p>
          </div>
        </details>
        <details>
          <summary>How to find an angel investor for my startup?</summary>
          <div className="faq__content">
            <p>
              The best way to find investors is to find customers. If can you
              cant find customers, you will not be able to find investors. Once
              you see some traction, revenue and feel that you have a MSP (
              minimum sellable product ), then you can start looking at
              investors. Note that early stage capital is very expensive and
              angel funds will take a significant chunk of your company.{" "}
            </p>
          </div>
        </details>
      </div>

      <div>
        <h2 className="Videos">Entrepreneurship Videos</h2>
        <div className="App">
          <ol>
            <li>
              <h4>How to Start a Business, the Guide for Entrepreneurs</h4>
            </li>
            <YoutubeEmbed embedId="PkplQjXRWsk" />

            <li>
              <h4>Top 5 Entrepreneurship Lessons</h4>
            </li>
            <YoutubeEmbed embedId="e1rEHiuDtuc" />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FounderDashboard;
