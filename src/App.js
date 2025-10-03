import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import AboutUsPage from "./Containers/AboutUsPage";
import DentistsPage from "./Containers/DentistsPage";
import PriceListPage from "./Containers/PriceListPage";
import GalleryPage from "./Containers/GalleryPage";
import ContactsPage from "./Containers/ContactsPage";
import React, { useEffect } from "react";
import DentistProfile from "./Containers/DentistProfile";
import ServicesPage from "./Containers/Services";
import ServiceInfo from "./Containers/ServiceInfo";
import { useLocation } from "react-router";
import NavBarNew from "./Components/NavigationBar/NavBarNew";
import styled from "styled-components";


const ComingSoonWrapper = styled.div`
    //display: flex;
    //flex-direction: column;
    //justify-content: center;

    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 75vw;

    height: 100%;
    text-align: center;
    color: #333;

    h1 {
        margin: 5vw;
        font-size: 5vw;
        font-family: 'Poppins', sans-serif;
        line-height: 1;
        font-weight: 700;
    }

    p {
        text-align: center;
        margin: 18px;
        font-family: 'Muli', sans-serif;
        font-weight: normal;
    }
`;

const LogoWrapper = styled.div`
    img {
        height: 15vw;
        display: block;
    }
`;
const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-right: auto;
`;


const Title = styled.div`
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Dot = styled.span`
    color: #ff7f57;
`;
const InfoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: fadeIn 1000ms ease;
    -webkit-animation: fadeIn 1000ms ease;

    h1 {
        margin-bottom: 0;
    }
`;
const Icons = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
`;

const I = styled.i`
    display: block;
    text-align: center;
    color: #ffffff;
    background: #333;
    height: 15px;
    width: 15px;
    padding: 13px;
    margin: 0 10px;
    border-radius: 50px;
    border: 2px solid transparent;
    transition: all 200ms ease;
    text-decoration: none;
    position: relative;

    &:hover {
        color: #333;
        background: none;
        border-color: #333;
        cursor: pointer !important;
        transform: scale(1.2);
        text-decoration: none;
    }

    &:active {
        color: #ffffff;
        background: none;
        border-color: #333;
        cursor: pointer !important;
        transform: scale(1.2);
        text-decoration: none;
    }

    &:before {
        width: 15vw;
        height: 15vw;
    }
`;
export const ComingSoon = () => {
    return (
      <ComingSoonWrapper>
          <Title>
              <h1>Individuum Clinic</h1>
              <LogoWrapper>
                  <Logo href="/">
                      {/*<img src={require("./Assets/Images/IndividuumLogo.png")} alt="DevBabu.com" />*/}
                      {/*<img src={require("./Assets/Images/Individuum-logo-new.png")} alt="DevBabu.com" />*/}
                  </Logo>
              </LogoWrapper>
          </Title>
          <InfoWrapper>
              <h1>Coming soon<Dot>.</Dot></h1>
              <p>We are updating our website.</p>
              <Icons>
                  <a href="https://www.facebook.com/Individuumdentalclinic" target="_blank" rel="noreferrer">
                      <I className="fa fa-facebook"></I>
                  </a>
                  <a href="https://www.instagram.com/individuum_idm/" target="_blank" rel="noreferrer">
                      <I className="fa fa-instagram"></I>
                  </a>

              </Icons>
          </InfoWrapper>
      </ComingSoonWrapper>
    );
};
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
        case "/dentists":
            window.scrollTo(0, 350);
            break;
        case "/services":
            window.scrollTo(0, 350);
            break;
        default:
            window.scrollTo(0, 0);
            break;
        }


    }, [location]);

    return <>{props.children}</>;
};

function App() {
    return (
      <>
          <Router>
              <ScrollToTop>
                  {/*<NavigationBar />*/}
                  <NavBarNew />
                  <Routes>
                      {/*<Route path="/*" element={<ComingSoon />} />*/}
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/aboutUs" element={<AboutUsPage />} />
                      <Route path="/dentists" element={<DentistsPage />} />
                      <Route path="/dentists/:dentistId" element={<DentistProfile />} />
                      {/*<Route path="/priceList" element={<PriceListPage />} />*/}
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/services/:serviceId" element={<ServiceInfo />} />
                      {/*<Route path="/gallery" element={<GalleryPage />} />*/}
                      <Route path="/contacts" element={<ContactsPage />} />
                  </Routes>
              </ScrollToTop>
          </Router>
      </>
    );
}


export default App;
