/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import menu_left from "../../../assets/menu_home.svg";
import info_logo from "../../../assets/info_logo.svg";
import { useAppDispach, useAppSelector } from "../../../redux/store";
import { useEffect, useState } from "react";
import { getUsers } from "../../../redux/tools/userSlice";
import bell_icon from "../../../assets/211693_bell_icon.svg";
import pictures from "../../../assets/pictures.svg";
import members from "../../../assets/members.svg";
import setting from "../../../assets/settings.svg";
import desktop from "../../../assets/desktop.svg";
import calendar from "../../../assets/calendar.svg";
import arrow_bottom from "../../../assets/arrowBottom.svg";
import star from "../../../assets/star.svg";
import ramka from "../../../assets/ramka.svg";
import colektive from "../../../assets/coletive.svg";
import roket from "../../../assets/roket.svg";
import molnia from "../../../assets/molnia.svg";
import filter from "../../../assets/filter.svg";
import plusUser from "../../../assets/plusUser.svg";
import dop_menu from "../../../assets/dop_menu.svg";
import peaksoft from "../../../assets/peaksoft.svg";
import plus_btn from "../../../assets/add-plus-btn.svg";
import modal_title from "../../../assets/modal-title.svg";
import {
  AddCard,
  Advresting,
  ArrowButton,
  BurgerBar,
  BurgerMenu,
  ButtonSelect,
  ButtonTitles,
  Card,
  CardBoxy,
  CardContents,
  Content,
  Contianer,
  HeaderContent,
  HeaderSelects,
  ImgIconNav,
  InfoUser,
  LeftContent,
  LeftIcons,
  MenuTrello,
  Nav,
  NavLeft,
  NavRight,
  PageHome,
  ProfileImage,
  RightContent,
  SideBar,
} from "./HomePageStyle";
import { useNavigate } from "react-router-dom";
import {
  TypeColumnNewTodoData,
  TypeItem,
  getTodos,
  patchTodos,
  postTodos,
  putTodoTitle,
} from "../../../redux/tools/todoSlice";

const HomePage = () => {
  const dispach = useAppDispach();
  const userData = useAppSelector((state) => state.userDataReducer.data);
  const [profileImage, setProfileImage] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useState<string | number>("");
  const [openBurger, setOpenBurger] = useState(false);
  const dataTodos = useAppSelector((state) => state.todoReducer.data);
  const [title, setTitle] = useState("");
  const [columnTitle, setColumnTitle] = useState("");
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [cardId, setCardId] = useState<null | number>(null);
  const [isComplated, setIsComplated] = useState<null | number>(null);
  const [newInput, setNewInput] = useState("");

  const isUsers = +localStorage.getItem("isUser")!;

  const getUsersProfile = () => {
    const findUser = userData.find((item) => item._id === isUsers);

    if (findUser) {
      setProfileImage(findUser.image);
      setUserName(findUser.name);
      setUserPassword(findUser.password);
    } else {
      console.log("err");
    }
  };

  const removeUserIsLocal = () => {
    localStorage.removeItem("isUser");
    navigate("/");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTodos = (event: any) => {
    if (event.key === "Enter") {
      const newData = {
        title: title,
        todos: [],
      };
      dispach(postTodos(newData));
      setIsOpenForm(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columdTodo = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number,
    title: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: TypeItem
  ) => {
    if (e.key === "Enter") {
      console.log(item);

      if (columnTitle === "") {
        alert("Нельзя путсую задачу создать");
      } else {
        const newTodoData: TypeColumnNewTodoData = {
          title,
          todos: [
            ...item.todos,
            {
              _id: Math.random(),
              todoTitle: columnTitle,
            },
          ],
        };
        dispach(patchTodos({ id, newTodoData }));
        setCardId(null);
      }
    }
  };

  console.log(dataTodos);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upDataTodoTitle = (e: any, id: number, todos: any, todoId: number) => {
    if (e.key === "Enter") {
      const updatedTodos = todos.map((i: any) => {
        if (i._id !== todoId) {
          return i;
        }
        return {
          todoTitle: newInput,
          _id: i._id,
        };
      });

      const newData = {
        todos: updatedTodos,
      };
      dispach(putTodoTitle({ id, newData }));
      setIsComplated(null);
    }
  };

  useEffect(() => {
    dispach(getUsers());
    dispach(getTodos());
  }, []);

  useEffect(() => {
    getUsersProfile();
  }, [userData]);

  return (
    <PageHome>
      <HeaderContent>
        <LeftContent>
          <LeftIcons>
            <div>
              <img src={menu_left} alt="" />
            </div>
            <MenuTrello></MenuTrello>
          </LeftIcons>
          <HeaderSelects>
            <ul>
              <li>Рабочие Прастранство</li>
              <li>Недавний</li>
              <li>Помечено</li>
              <li>Шаблоны</li>
              <button>Создавать</button>
            </ul>
          </HeaderSelects>
        </LeftContent>
        <RightContent>
          <input placeholder="Искать" type="text" />

          <ImgIconNav src={bell_icon} alt="" />
          <ImgIconNav src={info_logo} alt="" />

          {isUsers ? (
            <>
              <ProfileImage
                onClick={() => {
                  setOpenBurger(!openBurger);
                }}
                src={profileImage}
                alt=""
              />
            </>
          ) : null}
        </RightContent>
      </HeaderContent>
      <Contianer>
        <SideBar>
          <Advresting>
            <img src={peaksoft} alt="" />
            <h3>
              PeakSoft <br />
              IBRA
            </h3>
          </Advresting>
          <ul>
            <li>
              <img src={pictures} alt="" />
              Картинки
            </li>
            <li>
              <img src={members} alt="" />
              Члены
            </li>
            <li>
              <img src={setting} alt="" />
              Настройки Рабочго Стола
            </li>

            <p>Виды рабочего стола</p>

            <li>
              <img src={desktop} alt="" />
              Стол
            </li>
            <li>
              <img src={calendar} alt="" />
              Календарь
            </li>
          </ul>
        </SideBar>
        <Content>
          {openBurger ? (
            <>
              <BurgerMenu>
                <BurgerBar>
                  <p>Счет</p>
                  <InfoUser>
                    <img src={profileImage} alt="" />
                    <ul>
                      <li>{userName}</li>
                      <li>{userPassword}</li>
                    </ul>
                  </InfoUser>
                  <ul>
                    <li onClick={() => navigate("/")}>Сменить аккаунт </li>
                    <li>Упровлять счетом </li>
                  </ul>
                </BurgerBar>
                <BurgerBar>
                  <p>Trello</p>
                  <ul>
                    <li>Профиль и видимость</li>
                    <li>Активность</li>
                    <li>Карты</li>
                    <li>настройки</li>
                    <li>Тема</li>
                  </ul>
                </BurgerBar>
                <BurgerBar>
                  <ul>
                    <li>Помощь</li>
                    <li>Ярлыки</li>
                    <li
                      onClick={() => {
                        removeUserIsLocal();
                      }}
                    >
                      Выйти
                    </li>
                  </ul>
                </BurgerBar>
              </BurgerMenu>
            </>
          ) : null}
          <Nav>
            <NavLeft>
              <p>Моя доска Trello</p>
              <img src={star} alt="" />
              <img src={colektive} alt="" />
              <ButtonSelect>
                <img src={ramka} alt="" />
                Рамка
              </ButtonSelect>
              <ArrowButton>
                <img src={arrow_bottom} alt="" />
              </ArrowButton>
            </NavLeft>
            <NavRight>
              <ul>
                <li>
                  <img src={roket} alt="" />
                  Бонусы
                </li>
                <li>
                  <img src={molnia} alt="" />
                  Автоматизация
                </li>
                <li>
                  <img src={filter} alt="" />
                  Фильтры
                </li>
                <li>
                  <ProfileImage src={profileImage} alt="" />
                </li>
                <button>
                  <img src={plusUser} alt="" />
                  Делиться
                </button>
                <li>
                  <img src={dop_menu} alt="" />
                </li>
              </ul>
            </NavRight>
          </Nav>
          <CardContents>
            {dataTodos.map((item) => (
              <Card key={item._id}>
                <textarea>{item.title}</textarea>
                {item.todos.map((todo) => (
                  <CardBoxy key={todo._id}>
                    {isComplated === todo._id ? (
                      <>
                        <input
                          type="text"
                          value={newInput}
                          onChange={(e) => setNewInput(e.target.value)}
                          onKeyDown={(e) =>
                            upDataTodoTitle(e, item._id, item.todos, todo._id)
                          }
                        />
                      </>
                    ) : (
                      <>
                        <p
                          onClick={() => {
                            setIsComplated(todo._id);
                            setNewInput(todo.todoTitle);
                          }}
                        >
                          {todo.todoTitle}
                        </p>
                      </>
                    )}
                  </CardBoxy>
                ))}
                {item._id === cardId ? (
                  <>
                    <input
                      type="text"
                      placeholder="Задача"
                      value={columnTitle}
                      onChange={(e) => setColumnTitle(e.target.value)}
                      onKeyDown={(e) =>
                        columdTodo(e, item._id, item.title, item)
                      }
                    />
                  </>
                ) : null}
                <ButtonTitles>
                  <button onClick={() => setCardId(item._id)}>
                    <img src={plus_btn} alt="" />
                    Добавить Задачу
                  </button>
                  <img src={modal_title} alt="" />
                </ButtonTitles>
              </Card>
            ))}
            {isOpenForm ? (
              <>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyDown={(event) => handleTodos(event)}
                />
              </>
            ) : null}
            <AddCard>
              <button onClick={() => setIsOpenForm(!isOpenForm)}>
                <img src={plus_btn} alt="" />
                Добавить Карточку
              </button>
            </AddCard>
          </CardContents>
        </Content>
      </Contianer>
    </PageHome>
  );
};

export default HomePage;
