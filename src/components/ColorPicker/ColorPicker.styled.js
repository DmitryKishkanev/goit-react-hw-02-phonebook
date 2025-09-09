import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-bottom: 50px;
  padding: 15px;

  background-color: #cde2eb;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  .ColorPicker__title {
    margin-top: 0;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: black;
  }

  p {
    margin-top: 0;
    margin-right: auto;
    margin-left: 55px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: grey;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  .ColorPicker__option {
    width: 50px;
    height: 50px;
    margin-right: 12px;

    border: none;
    outline: none;
    cursor: pointer;

    transition: transform 250ms linear;

    :last-of-type {
      margin-right: 0;
    }

    &.active {
      transform: scale(1.2);
    }
  }
`;
