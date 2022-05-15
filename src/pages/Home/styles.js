import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin-top: 45px;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 45px;

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Unit = styled.li`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 46px 20px;

  img {
    max-width: 240px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    color: #000;
    margin-top: 25px;
  }

  strong {
    font-size: 20px;
    margin: 21px 0 26px;
  }

  button {
    background-color: #0676d9;
    color: #fff;
    border: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transition-duration: 0.4s;

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgb(0, 0, 0, 0.1);
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: 600;
    }
  }

  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
