import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { login, register } from "../data/apiCalls";

const API_URL = "http://sefdb02.qut.edu.au:3001";

const LogControl = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  let registerError = false;
  let logInError = false;

  useEffect(() => {
    //rerender
  }, [message]);

  return (
    <div className="log-box" style={{ marginTop: "180px" }}>
      <div style={{ marginTop: "2rem" }}>
        <div className="front-page-box box-border">
          <div className="button-area">
            <div className="button-area-text">
              <h3>{props.title}</h3>
              <p>{props.text}</p>
              <div className="log-text-box">
                <p>Email:</p>
                <input
                  type={"text"}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="log-text-box">
                <p>Password:</p>
                <input
                  type={"password"}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage();
                  }}
                />
              </div>

              {props.type === "login" && (
                <div style={{ padding: "0px", margin: "auto" }}>
                  <Button
                    color="info"
                    size="sm"
                    className="mx-3 mt-3"
                    onClick={() => {
                      navigate("/search");
                    }}
                  >
                    Guest
                  </Button>
                  <Button
                    color="info"
                    size="sm"
                    className="mx-3 mt-3"
                    onClick={() => {
                      login(email, password).then((res) => {
                        if (res.error) {
                          logInError = true;
                          setMessage(res.errorMessage);
                        } else {
                          logInError = false;
                          setMessage("");
                          navigate("/search");
                        }
                      });
                    }}
                  >
                    Log In
                  </Button>
                </div>
              )}

              {props.type === "register" && (
                <div style={{ marringBlock: "auto", paddingBottom: "0" }}>
                  <Button
                    color="info"
                    size="sm"
                    className="mt-3"
                    onClick={() => {
                      register(email, password).then((res) => {
                        if (res.error) {
                          registerError = true;
                          setMessage(res.errorMessage);
                        } else {
                          registerError = false;
                          setMessage("");
                          navigate("/search");
                        }
                      });
                    }}
                  >
                    Register
                  </Button>
                </div>
              )}

              <div className="Button">
                {!!message && <div> {message + "."} </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogControl;
