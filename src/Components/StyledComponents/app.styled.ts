import styled from "styled-components";

export const Title = styled.h1`
color:red;
`
export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskAdder = styled.div`
  display:flex;
  flex-direction:row;
  padding:10px;
  height:30px;
  justify-content:space-evenly;
`
export const Application = styled.div`
  display:flex;
  flex-direction:column;
  width:300px;
  height:83vh;
  background-color:lightblue;
  border-radius:5px;
`
export const InputBar=styled.input`
  width:80%;
  outline:0;
  border-radius:5px;
  border:2px solid grey;
  &:focus{
  border:2px solid black;
  }
`
export const AddButton=styled.button`
width:20%;
border-radius:5px;
border:2px solid grey;
 transition: background-color 0.2s;
&:hover{
background-color:grey;
color:white;
}
`