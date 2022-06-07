import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cartList } from "../store/cart";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "d1",
  },
  {
    id: "d2",
    title: "d2",
  },
  {
    id: "d3",
    title: "d3",
  },
  {
    id: "d4",
    title: "d4",
  },
];

const List = () => {
  const [cart, setCart] = useRecoilState(cartList);

  const plusHandler = (data) => {
    const targetIndex = cart.findIndex((element) => element.id === data.id);
    const target = cart[targetIndex];

    if (targetIndex === -1) {
      setCart((prev) => [
        ...prev,
        { id: data.id, title: data.title, quantity: 1 },
      ]);
    } else {
      const updatedCart = [...cart];
      updatedCart[targetIndex] = {
        id: target.id,
        title: target.title,
        quantity: target.quantity + 1,
      };
      setCart((prev) => [...updatedCart]);
    }
  };

  const minusHandler = (data) => {
    const targetIndex = cart.findIndex((element) => element.id === data.id);
    const target = cart[targetIndex];

    if (target.quantity === 1) {
      const updatedCart = cart.filter((element) => element.id !== data.id);
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart];
      updatedCart[targetIndex] = {
        id: target.id,
        title: target.title,
        quantity: target.quantity - 1,
      };
      setCart(updatedCart);
    }
  };

  return (
    <Outlet>
      <span>List</span>
      {DUMMY_DATA.map((data) => (
        <Box key={data.id}>
          <p>{data.title}</p>
          <div>
            <button onClick={plusHandler.bind(null, data)}>+</button>
            <button onClick={minusHandler.bind(null, data)}>-</button>
          </div>
        </Box>
      ))}
    </Outlet>
  );
};

export default List;

const Outlet = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & span {
    font-size: 40px;
  }
`;

const Box = styled.div`
  width: 500px;
  height: 50px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    width: 60px;
    height: 40px;
    margin-left: 20px;
  }
  :last-child {
    margin-bottom: 20px;
  }
`;
