import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ToDo() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Buy 1kg Tomato",
    },
    {
      id: 2,
      title: "Buy 2kg Tomato",
    },
    {
      id: 3,
      title: "visit Friend",
    },
    {
      id: 4,
      title: "Clean House",
    },
  ]);
  const [completed, setCompleted] = useState([
    {
      id: 5,
      title: "Washing Clothes",
    },
    {
      id: 6,
      title: "Play Cricket",
    },
    {
      id: 7,
      title: "1 Km Walking",
    },
    {
      id: 8,
      title: "Do Homework",
    },
  ]);
  const [newtask, setNewTask] = useState("");
  const [itemcount, setItemCount] = useState(0);
  useEffect(() => {
    setItemCount(completed.length + task.length);
  }, []);
  const renderTask = () => {
    return task.map((task) => (
      <ListItems>
        <LeftContainer>
          <CheckContainer></CheckContainer>
          <ItemText>
            {task.id}, {task.title}
          </ItemText>
        </LeftContainer>
        <RightContainer>
          <DeleteButton>
            <ButtonImage
              src={require("./assets/images/delete.svg").default}
              alt="delete"
            />
          </DeleteButton>
        </RightContainer>
      </ListItems>
    ));
  };

  const RenderCompleted = () => {
    return completed.map((task) => (
      <ToDoList>
        <ListItems>
          <LeftContainer>
            <CheckContainerCompleted>
              <TickImage
                src={require("./assets/images/tick-green.svg").default}
                alt="tick"
              />
            </CheckContainerCompleted>
            <ItemTextCompleted>
              {task.id}, {task.title}
            </ItemTextCompleted>
          </LeftContainer>
          <RightContainer>
            <DeleteButton>
              <ButtonImage
                src={require("./assets/images/revert.svg").default}
                alt="revert"
              />
            </DeleteButton>
            <DeleteButton>
              <ButtonImage
                src={require("./assets/images/delete.svg").default}
                alt="delete"
              />
            </DeleteButton>
          </RightContainer>
        </ListItems>
      </ToDoList>
    ));
  };
  const addNewTask = (event) => {
    event.preventDefault();
    let new_task = {
      id: itemcount + 1,
      title: newtask,
    };
    setTask([...task, new_task]);
    setNewTask("");
    setItemCount((prev) => prev + 1);
  };
  return (
    <Container>
      <Heading>ToDo List</Heading>
      <ToDoContainer>
        <SubHeading>Things to be done</SubHeading>
        <ToDoList>{renderTask()}</ToDoList>
      </ToDoContainer>

      <ToDoForm>
        <FormInput
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Type New Task.."
        />
        <FormSubmitButton onClick={(e) => addNewTask(e)}>
          Add New
        </FormSubmitButton>
      </ToDoForm>

      <ToDoContainer>
        <SubHeading>Completed</SubHeading>
        {RenderCompleted()}
      </ToDoContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 90%auto;
  max-width: 1000px;
  padding: 50px 10%;
  border-left: 2px solid #f5f5f5;
  border-right: 2px solid #f5f5f5;
  margin: 0 auto;
  min-height: 100vh;
`;
const Heading = styled.h1`
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;
const ToDoContainer = styled.div``;
const SubHeading = styled.h3`
  font-size: 36px;
  color: #050241;
`;
const ToDoList = styled.ul``;
const ListItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CheckContainer = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #050241;
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
`;
const ItemText = styled.span`
  font-size: 28px;
  cursor: pointer;
`;
const RightContainer = styled.div``;
const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
  &:last-child {
    margin-right: 0;
  }
`;
const ButtonImage = styled.img``;
const ToDoForm = styled.form`
  display: flex;
  margin-left: 40px;
  margin-top: 30px;
  position: relative;
  &::before {
    content: "";
    background-image: url(${require("./assets/images/plus.svg").default});
    width: 16px;
    height: 16px;
    display: block;
    position: absolute;
    left: 10px;
    top: 27px;
    border: 0;
    margin: auto 0;
    z-index: 2;
  }
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #c6c6c6;
  border-right: none;
  padding: 0 10px 0 35px;
  font-size: 22px;
`;
const FormSubmitButton = styled.button`
  padding: 15px 25px;
  white-space: nowrap;
  border: none;
  background: #050241;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 24px;
`;
const CheckContainerCompleted = styled(CheckContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #06c692;
`;
const ItemTextCompleted = styled(ItemText)`
  color: #06c692;
`;
const TickImage = styled.img``;
