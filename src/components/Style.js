import styled from "styled-components";

export const FolderWrapper = styled.li`
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 10px 30px 10px 25px;
  margin-bottom: 20px;
  min-width: 250px;

  &:last-child {
    margin-bottom: 0;
  }

  h5 {
    color: #8e8e8e;
    margin-top: 5px;
    margin-left: 20px;
    font-weight: 400;
    font-size: 18px;
  }
`;

export const ActionIcon = styled.span`
  display: inline-block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  text-align: center;
  line-height: 23px;
  margin-left: 8px;
  font-size: 10px;
  color: #fff;
  background: ${(props) => (props.danger ? "#F73859" : "#5e5e5e")};
  cursor: pointer;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.border ? "#5e5e5e" : "#fff"};
  margin: 0 5px;
  padding: 10px 35px;
  border: 2px solid #5e5e5e;
  border-radius: 8px;
  background: ${props=> props.border ? "transparent" : "#5e5e5e"};
  transition: background 0.3s;
  cursor: pointer;

  &:hover{
    color: ${props => props.border ? "#fff" : "#fff"};
    background: ${props=> props.border ? "#5e5e5e" : "#3e3e3e"};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  display: block;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #5e5e5e;
`;