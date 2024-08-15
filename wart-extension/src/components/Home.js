import React from "react";
import logo from '../navlogo.png';
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={logo} className="frontPageLogo" alt=''/>
        <h2>Hey There 👋</h2>
        <h4 className="h4">welcome to your warty-wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p>Rethinking the blockchain:<a href='https://warthog.network'> Welcome!</a></p>
      
      </div>
    </>
  );
}

export default Home;
