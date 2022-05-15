import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import CartContext from '../../context/cart';
import { Container, List, Unit } from './styles';
import api from '../../services/api';

function Home() {
  const [travelList, setTravelList] = useState([]);
  const { state, setState } = useContext(CartContext);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
    }
    getTravelList();
  }, []);

  function alertLimit() {
    // eslint-disable-next-line no-alert
    alert('¡Se alcanzó el límite de compra!');
  }

  function handleAddToCart(travel) {
    console.log(travel.id);
    console.log(travel);
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el) => el.id === travel.id);
    const cantidad = copyCart.includes('quantity');
    console.log(cantidad);
    if (travelIndex >= 0) {
      const temp = parseInt(copyCart[travelIndex].quantity, 10);
      if (temp >= 10) {
        alertLimit();
      } else {
        copyCart[travelIndex].quantity = temp + 1;
        console.log('suma 1 a cantidad');
        console.log(typeof copyCart);
        console.log(copyCart);
        console.log(copyCart[travelIndex].quantity);
      }
    } else {
      copyCart.push({ ...travel, quantity: 1 });
      console.log(travel);
      console.log('push a cantidad');
    }

    setState({
      cart: copyCart,
    });
  }

  return (
    <Container>
      <List>
        {travelList.map((el) => (
          <Unit>
            <img src={el.photo} alt="Travel" />
            <p>{el.title}</p>
            <strong>{el.price}</strong>
            <Link to="/cart">
              <button type="button" onClick={() => handleAddToCart(el)}>
                <div>
                  <MdAddShoppingCart size={16} color="#fff" />
                </div>
                <span>Agregar al carrito</span>
              </button>
            </Link>
          </Unit>
        ))}
      </List>
    </Container>
  );
}

export default Home;
