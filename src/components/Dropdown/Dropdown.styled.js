import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 400px;
  margin-bottom: 100px;
  padding: 15px;

  background-color: #d4f2ff;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  h2 {
    margin-top: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: black;
  }

  .Dropdown__menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: teal;
    color: white;
  }
`;
