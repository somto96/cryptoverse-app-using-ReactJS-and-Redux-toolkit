import React, { Suspense } from "react";
import "./App.css";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Layout,
  Typography,
  Space
} from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails
} from "components";
import Loader from "components/Loader";

const { Title } = Typography;

const App = () => (
  <div className="app">
    <Suspense fallback={<Loader />}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Title level={5} style={{ color: "white" }}>
            Cryptoverse
            <br />
            All rights reserved.
          </Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </Suspense>

  </div>
);

export default App;
