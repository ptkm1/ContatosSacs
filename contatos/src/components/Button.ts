import styled from 'styled-components';

export const CommonButton = styled.div`
  border: none;
  background-color: royalblue;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: all 0.1s;
  margin: 5px;
  :hover {
    background-color: white;
    color: royalblue;
  }
`;