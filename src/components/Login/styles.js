import styled from "styled-components";

export const Container = styled.form`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  background: rgb(12, 6, 29);
  background: linear-gradient(135deg, rgba(12, 6, 29, 1) 14%, rgba(35, 8, 113, 1)52%, rgba(68, 7, 83, 1) 100%);
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;

  margin: 5 auto;
  padding: 40px 20px;
  font-size: 16px;
`;

export const Title = styled.div`
  margin-left: 10px;
`;