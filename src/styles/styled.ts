import styled, { createGlobalStyle } from "styled-components";

// theme is now fully typed
export const Water = styled.div`
  background-color: var(--bg-color);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
`;
export const Cup = styled.div`
  background-color: #fff;
  border: 4px solid var(--border-color);
  height: 260px;
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--border-color);
  border-radius: 0 0 40px 40px;
  text-align: center;
  transition: 0.3s ease;
  overflow: hidden;
`;
export const Remained = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const Span = styled.div`
  font: 14px bold;
`;
export const Small = styled.div`
  font-size: 12px;
`;
export const Percentage = styled.div`
  background-color: var(--fill-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  height: 0;
  transition: 0.3s ease;
`;
export const Cups = styled.div`
  display: flex;
  width: 190px;
  gap: 10px;
  flex-wrap: wrap;
`;
interface ItemProps {
  isFull: boolean;
}

export const CupSmall = styled.div<ItemProps>`
  height: 80px;
  width: 40px;
  font-size: 12px;
  cursor: pointer;
  background-color: #fff;
  border: 4px solid var(--border-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--border-color);
  border-radius: 0 0 40px 40px;
  text-align: center;
  transition: 0.3s ease;
  overflow: hidden;
  background-color: ${(props) => {
    return props.isFull ? "var(--fill-color)" : " #fff";
  }};
  color: ${(props) => {
    return props.isFull ? " #fff" : "var(--border-color)";
  }};
`;
export const Reset = styled.button`
  background-color: var(--border-color);
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 12px;
  border: 4px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
`;

// theme is also fully typed
export const MyGlobalStyle = createGlobalStyle`
:root {
  --border-color: #144fc6;
  --fill-color: #6ab3f8;
  --bg-color: #3494e4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  h1 {
    margin-top: 10px;
  }
  
  h3 {
    font-weight: normal;
  }
}
`;
