import styled from "styled-components";

export const CarsListItemContainer = styled.li`
  width: 100%;
  /* height: 380px; */
  padding: 10px;

  .wrapper {
    border: 1px solid black;
    border-radius: 14px;
    padding: 10px;
  }

  .carsListTitle {
    font-size: 16px;
    color: red;
  }

  .carsListImage {
    max-width: 100%;
    border-radius: 14px;
  }

  .carsListColors {
    display: flex;
    list-style: none;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const ColorItem = styled.li`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: ${({ marginRight }) => marginRight};
  background-color: ${({ color }) => color};
`;
