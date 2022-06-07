import styled from "styled-components";

import Cart from "../component/Cart";
import List from "../component/List";

const Main = () => {
  return (
    <Outlet>
      <List />
      <Cart />
    </Outlet>
  );
};

export default Main;

const Outlet = styled.div`
  width: 500px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
`;
