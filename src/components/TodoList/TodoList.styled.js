import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  background-color: #cde2eb;
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

  p {
    margin-top: 0;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;

    color: grey;
  }
`;

const TodoListBox = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  width: 900px;
  margin: 0;
  padding: 15px;
`;

const TodoItem = styled.li`
  display: flex;

  p {
    padding: 8px;
    margin: 0 15px 0 0;

    background-color: #a4c3d1;
    border-radius: 5px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    font-weight: 400;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: black;
  }
`;

export { Container, TodoListBox, TodoItem };
