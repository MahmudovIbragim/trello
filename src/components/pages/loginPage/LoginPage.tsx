import { useEffect, useState } from "react";
import { useAppDispach, useAppSelector } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import trello_svg from "../../../assets/tello.svg";
import atlassian from "../../../assets/atlassia.svg";
import google from "../../../assets/google-logo.5867462c.svg";
import microsoft from "../../../assets/microsoft.svg";
import apple from "../../../assets/apple.svg";
import slack from "../../../assets/slack.svg";
import { getUsers } from "../../../redux/tools/userSlice";
import CustomButton from "../../ui/customButton/CustomButton";

const LoginPageStyle = styled.div`
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
  margin: 0px auto;
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

const LoginForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const TestingInput = styled.input`
  padding: 8px 5px;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  border: 2px solid #dfe1e6;
  box-sizing: border-box;
  outline: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #eef1f5ea;
    border-color: #0052cc;
  }
`;
const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
`;
const ButtonUi = styled.button`
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
`;

const LogoAtlass = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginPage = () => {
  const userData = useAppSelector((state) => state.userDataReducer.data);
  const dispach = useAppDispach();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleGetUser = () => {
    const findData = userData.find((item) => {
      return item.name === userName && item.password === password;
    });

    if (findData) {
      localStorage.setItem("isUser", findData._id);
      navigate("/home");
    } else {
      alert("не правильно");
    }
  };
  useEffect(() => {
    dispach(getUsers());
  }, []);

  const navigatorRegistr = () => {
    navigate("/registr");
  };

  console.log(userData);

  return (
    <LoginPageStyle>
      <div className="container">
        <Content>
          <ContentBox>
            <LoginContent>
              <img src={trello_svg} alt="" />
              <p>Вступление для продолжения</p>
            </LoginContent>
            <p>Авторизация</p>
            <LoginForm>
              <TestingInput
                type="text"
                placeholder="Email"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <TestingInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CustomButton actionClick={handleGetUser}>Войти</CustomButton>
              <CustomButton actionClick={navigatorRegistr}>
                Регистрация
              </CustomButton>
            </LoginForm>
            <LoginButtons>
              <ButtonUi>
                <img src={google} alt="" />
                Google
              </ButtonUi>
              <ButtonUi>
                <img src={microsoft} alt="" />
                Microsoft
              </ButtonUi>
              <ButtonUi>
                <img src={apple} alt="" />
                Apple
              </ButtonUi>
              <ButtonUi>
                <img src={slack} alt="" />
                Slack
              </ButtonUi>
            </LoginButtons>
            <hr />
            <LogoAtlass>
              <img src={atlassian} alt="" />
            </LogoAtlass>
          </ContentBox>
        </Content>
      </div>
    </LoginPageStyle>
  );
};
export default LoginPage;
