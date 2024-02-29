import { useState } from "react";
import styled from "styled-components";
import trello_svg from "../../../assets/tello.svg";
import atlassian from "../../../assets/atlassia.svg";
import google from "../../../assets/google-logo.5867462c.svg";
import microsoft from "../../../assets/microsoft.svg";
import apple from "../../../assets/apple.svg";
import slack from "../../../assets/slack.svg";
import { useAppDispach, useAppSelector } from "../../../redux/store";
import { loginPostUser } from "../../../redux/tools/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = styled.div`
  background-color: #fafbfc;
  height: 100vh;
  background: url("https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.549/trello-left.4f52d13c.svg"),
    url("https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.549/trello-right.3ee60d6f.svg");
  background-attachment: fixed, fixed;
  background-repeat: no-repeat, no-repeat;
  background-size: 23%, 23%;
  background-position: left bottom, right bottom;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentBox = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 32px 40px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  p {
    font-family: sans-serif;
    font-size: 16px;
    text-align: center;
  }
  hr {
    margin-bottom: 40px;
  }
`;
const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 55%;
  }
`;
const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  input {
    padding: 8px 5px;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    border: 2px solid #dfe1e6;
    box-sizing: border-box;
    outline: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    line-height: 1px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: #eef1f5ea;
      border-color: #0052cc;
    }
  }
  button {
    width: 100%;
    font-size: 16px;
    padding: 9px 10px;
    border: none;
    border-radius: 4px;
    font-family: sans-serif;
    color: white;
    cursor: pointer;

    background-color: #0052cc;
    &:hover {
      background-color: #0065ff;
    }
  }
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Times New Roman", Times, serif;
    background-color: transparent;
    border: 1px solid silver;
    padding: 6px 10px;
    border-radius: 3px;
    outline: none;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    img {
      width: 24px;
      margin-right: 10px;
    }
  }
`;

const LogoAtlass = styled.div`
  display: flex;
  justify-content: center;
`;

const RegistrPage = () => {
  const userData = useAppSelector((state) => state.userDataReducer.data);
  const dispach = useAppDispach();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pasword, setPasword] = useState("");
  const [profile, setProifle] = useState("");

  const handlePostAdd = () => {
    if (name === "" || pasword === "") {
      alert("Заполните Пустые поли");
    } else {
      const dataUser = {
        name: name,
        password: pasword,
        image: profile,
      };
      dispach(loginPostUser(dataUser));
      navigate("/");
    }
  };
  console.log(userData);

  const navigateFunc = () => {
    navigate("/");
  };

  return (
    <LoginPage>
      <div className="container">
        <Content>
          <ContentBox>
            <LoginContent>
              <img src={trello_svg} alt="" />
              <p>Вступление для продолжения</p>
            </LoginContent>
            <p>Регистрация</p>
            <Form>
              <input
                type="text"
                placeholder="Email or Surname"
                autoComplete="new - password"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={pasword}
                onChange={(e) => setPasword(e.target.value)}
              />
              <input
                type="text"
                value={profile}
                placeholder="Profile Image"
                onChange={(e) => setProifle(e.target.value)}
              />
              <button onClick={handlePostAdd}>Зарегистрироваться</button>
              <button onClick={navigateFunc}>Войти</button>
            </Form>
            <LoginButtons>
              <button>
                <img src={google} alt="" />
                Google
              </button>
              <button>
                <img src={microsoft} alt="" />
                Microsoft
              </button>
              <button>
                <img src={apple} alt="" />
                Apple
              </button>
              <button>
                <img src={slack} alt="" />
                Slack
              </button>
            </LoginButtons>
            <hr />
            <LogoAtlass>
              <img src={atlassian} alt="" />
            </LogoAtlass>
          </ContentBox>
        </Content>
      </div>
    </LoginPage>
  );
};

export default RegistrPage;
