import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerList = styled.ul`
  width: 100%;
  background-color: #fff;
  margin-top: 45px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 36px 44px;
  max-width: 900px;

  @media only screen and (min-width: 540px) {
    width: 800px;
  }
`;

export const TravelItem = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #666;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  strong {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const Quantity = styled.select`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 1rem;
  border: 1px solid #0676d9;

  text-align: center;
  border-radius: 1rem;

  p {
    margin-right: 20px;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 16px;
  align-items: right;

  p {
    margin-right: 20px;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
  margin-bottom: 45px;
  border-radius: 5px;
  padding: 36px 44px;
  max-width: 900px;

  p {
    margin-right: 10px;
    font-weight: 800;
    font-size: 18px;
  }

  img {
    max-height: 45px;
  }

  @media only screen and (min-width: 540px) {
    width: 800px;
  }
`;
