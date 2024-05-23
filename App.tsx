import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import "./App.css";
import "./index.css";
import ProfilePage from "./pages/ProfilePage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/Marketplace" element={<Marketplace />} />;
          <Route path="/about" element={<About />} />;
          <Route
            path="/product/:productId"
            element={
              <ProductDetailPage
                images={[]}
                description={""}
                sellerName={""}
                sellerContact={""}
                reviews={[]}
              />
            }
          />
          <Route
            path="/ProfilePage"
            element={
              <ProfilePage
                name={"Buyer123"}
                profilePicture={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUcwcD0MBOaSv9p2o7dsNqSLQVqxvrpotgqifNJLjDw&s   "
                }
                email={"buyer123@iitk.ac.in"}
                phone={""}
                buyingActivities={0}
                sellingActivities={0}
              />
            }
          />
          ;
        </Routes>
      </Container>
    </>
  );
}

export default App;
