import styled from "styled-components";

type FilterButtonProps={
    bg:string
}

export const FilterButton = styled.button<FilterButtonProps>`
    flex:1;
    padding:10px;
    color:white;
    background-color:${({bg})=>bg};
    border:none;
    border-radius:10px;
    font-weight:bold;
`
export const ButtonsWrapper =styled.div`
width:100%;
    display:flex;
    padding:0px 10px;
    gap:10px;
    box-sizing:border-box;
    `
export const ListContainer=styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:10px;
    overflow:auto;
`
export const ListItem=styled.li`
border:2px solid grey;
border-radius:5px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 20px;
background-color:lightgrey;
transition:200ms all;
&:hover{
    transform:scale(1.02)
    }
`
export const DeleteButton=styled.button`
width:30px;
transition:500ms all;
&:hover{
background-color:red;
color:white;
border:1px solid grey;
transform:scale(1.1);
}`
export const Task=styled.div`
display:flex;
`
export const CheckBox=styled.input`
`
export const DeleteContainer=styled.div``
export const TaskName = styled.p`
font-weight:550;
text-align:center;
`