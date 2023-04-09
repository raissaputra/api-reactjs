import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";
import React, { Component } from "react";
import { API_URL } from "./utils/constants";
import axios from "axios";
import Menus from "./components/Menus";

export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     menus: [],
  }
}

componentDidMount() {
  axios.get(API_URL+"products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
}

  render() {
    const {menus} = this.state
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus && menus.map((menu => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                    />
                  )))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
