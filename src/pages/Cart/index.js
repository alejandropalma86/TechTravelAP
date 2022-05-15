import React, { useContext, useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import name from '../../assets/name.png';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  Total,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) ?? [];
    setCart(cartLS);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const totalCount = state.cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0,
  );

  const deleteProduct = (id) => {
    console.log(id);
    const updateCart = state.cart.filter((article) => article.id !== id);
    setState({
      cart: updateCart,
    });
  };

  function updateQuantity(travel) {
    console.log(travel.id);
    console.log(travel.quantity);
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el) => el.id === travel.id);
    copyCart[travelIndex].quantity = travel.quantity;
    setState({
      cart: copyCart,
    });
  }

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity
              value={el.quantity}
              onChange={(e) =>
                updateQuantity({
                  quantity: e.target.value,
                  id: el.id,
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Quantity>
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button" onClick={() => deleteProduct(el.id)}>
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
      </ContainerList>
      <Total>
        <img src={name} alt="Name" />
        <p>TOTAL: ${totalCount}</p>
      </Total>
    </Container>
  );
}

export default Cart;
