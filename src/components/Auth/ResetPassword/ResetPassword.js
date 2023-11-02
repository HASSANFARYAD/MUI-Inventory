import React from "react";
import "../Login/Login.css";
import { Form, Button } from "react-bootstrap";

const ResetPassword = () => {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="ResetPassword  form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="text-center">
                              <i
                                className="fas fa-cubes fa-2x me-3"
                                style={{ color: "#ff6219" }}
                              ></i>
                              <span className="h1 fw-bold mb-0 text-center">
                                Logo
                              </span>
                            </div>

                            <h5
                              className="fw-normal mb-3 pb-3 text-center"
                              style={{ letterSpacing: "1px" }}
                            >
                              Reset Your Password
                            </h5>
                            <p className="text-center">
                              Please create a new password for your account to
                              regain access. Ensure it's strong and unique to
                              keep your account secure.
                            </p>

                            <div className="form-outline mb-2">
                              <label className="form-label">Password</label>
                              <input
                                type="password"
                                className="form-control form-control"
                                placeholder="****"
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                className="form-control form-control"
                                placeholder="****"
                              />
                            </div>

                            <div>
                              <button
                                className="btn btn-dark btn-block w-100"
                                type="submit"
                              >
                                Reset Password
                              </button>
                            </div>

                            <div>
                              <p
                                className="mb-5 pb-lg-2"
                                style={{ color: "#393f81" }}
                              >
                                Don't have an account?{" "}
                                <a type="button" style={{ color: "#0d6efd" }}>
                                  Back to Login
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
