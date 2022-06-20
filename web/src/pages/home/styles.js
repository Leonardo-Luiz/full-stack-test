import styled from "styled-components"

export const Container = styled.div`
h1 {
  text-align: center;
  margin: 4rem 0;
}

#txtInsert {
  background-color: #1b1b40;
  color: #b8b8b8;
  text-align: center;
  width: 90%;
  margin: 2rem 0.5rem;
  box-sizing: border-box
}

#txtEdit {
  background-color: #1b1b40;
  color: #b8b8b8;
  text-align: center;
  width: 90%;
  margin: 2rem 0.5rem;
  box-sizing: border-box
}

#btnInsert {
  width: 2.5%;
  padding-top: 2.5px;
  background-color: #8f8d8d;
  color: white;
}
`

export const TaskList = styled.ul`
  ul {
    list-style:none;
  }

`
export const Task = styled.li`
li {
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0;
}

p {
  padding-left: 1rem;
  padding-right: 1rem;
}

input {
  padding: 2rem 0;
}

button {
  margin-right: 0.5rem;
  width: 2.5%;
  padding-top: 2.5px;
  background-color: #8f8d8d;
  color: white;
}
`