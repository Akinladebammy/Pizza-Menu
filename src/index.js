import React from "react";
import ReactDom from "react-dom/client";
import styled from "styled-components";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Brad with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Global Styles
const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto Mono', sans-serif;
    color: #252525;
    font-weight: 400;
    background-color: #f7f2e9;
    border-bottom: 1.6rem solid #edc84b;
    min-height: 100vh;
    padding: 3.2rem;
    padding-bottom: 6rem;
  }
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
`;

const Header = styled.header`
  align-self: stretch;

  h1 {
    color: #edc84b;
    text-transform: uppercase;
    text-align: center;
    font-size: 5.2rem;
    font-weight: 300;
    letter-spacing: 3px;
    position: relative;
    width: 100%;
    display: block;

    &::before,
    &::after {
      display: block;
      content: '';
      height: 3px;
      width: 4rem;
      background-color: #edc84b;
      position: absolute;
      top: calc(50% - 1px);
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
`;

const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  h2 {
    display: inline-block;
    padding: 1rem 0;
    border-top: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
  }

  > p {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.6;
    width: 80%;
  }
`;

const PizzasList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem;
`;

const PizzaItem = styled.li`
  display: flex;
  gap: 3.2rem;

  img {
    width: 12rem;
    aspect-ratio: 1;
    align-self: start;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.4rem 0;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
    margin-bottom: auto;
  }

  span {
    display: block;
    font-size: 1.6rem;
  }

  &.sold-out {
    color: #888;

    img {
      filter: grayscale();
      opacity: 0.8;
    }
  }
`;

const FooterContainer = styled.footer`
  font-size: 1.4rem;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

const Button = styled.button`
  color: inherit;
  font-family: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #edc84b;
  padding: 1.4rem 3.2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e9bb24;
  }
`;

function App() {
  return (
    <GlobalStyles>
      <Container>
        <Header>
          <h1>Fast React Pizza Co.</h1>
        </Header>
        <Menu />
        <Footer />
      </Container>
    </GlobalStyles>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <MenuContainer>
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <PizzasList>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </PizzasList>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </MenuContainer>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <PizzaItem className={pizzaObj.soldOut ? "sold-out" : ""}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </PizzaItem>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <FooterContainer>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </FooterContainer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <OrderContainer>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <Button>Order</Button>
    </OrderContainer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);