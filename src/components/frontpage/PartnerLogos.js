import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';

import nrwBanner from '../../assets/nrw-banner.png';
import bamfBanner from '../../assets/bamf-banner.png';
import nextBanner from '../../assets/next-banner.png';
import bbvbBanner from '../../assets/bbvb-banner.png';
import vitakoBanner from '../../assets/vitako-banner.png';
import ltcBanner from '../../assets/ltc-banner.png';

const PartnersMarqueeWrapper = styled.div`
  height: 80px;
  img {
    height: 80px;
  }
  overflow: hidden;
`

const PartnersMarquee = () => {
  const settings = {
    className: 'slider variable-width',
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <PartnersMarqueeWrapper>
      <Slider {...settings}>
        <div><img src={nrwBanner} alt="Ministerium für Wirtschaft, Innovation, Digitalisierung und Energie des Landes Nordrhein-Westfalen"/></div>
        <div><img src={bamfBanner} alt="Bundesamt für Migration und Flüchtlinge"/></div>
        <div><img src={nextBanner} alt="Next Netz"/></div>
        <div><img src={bbvbBanner} alt="Blockchain Bundesverband e.V."/></div>
        <div><img src={vitakoBanner} alt="Vitako"/></div>
        <div><img src={ltcBanner} alt="Vitako"/></div>
      </Slider>
    </PartnersMarqueeWrapper>
  )
}

const PartnersImagesWrapper = styled.div`
  & {
    padding: 10px;
    overflow: hidden;
    text-align: center;
  }
  img {
    height: 70px;
  }
`

const PartnersImages = () => (
  <PartnersImagesWrapper>
    <a href="https://www.wirtschaft.nrw/"><img src={nrwBanner} alt="Ministerium für Wirtschaft, Innovation, Digitalisierung und Energie des Landes Nordrhein-Westfalen"/></a>
    <a href="http://www.bamf.de/DE/Startseite/startseite-node.html"><img src={bamfBanner} alt="Bundesamt für Migration und Flüchtlinge"/></a>
    <a href="https://www.next-netz.de"><img src={nextBanner} alt="Next Netz"/></a>
    <br />
    <a href="https://bundesblock.de"><img src={bbvbBanner} alt="Blockchain Bundesverband e.V."/></a>
    <a href="https://www.vitako.de/"><img src={vitakoBanner} alt="Vitako"/></a>
    <a href="https://legaltech.center/"><img src={ltcBanner} alt="Vitako"/></a>
  </PartnersImagesWrapper>
)

const PartnerLogos = () => (
  <React.Fragment>
    <div className="d-block d-md-none">
      <PartnersMarquee />
    </div>
    <div className="d-none d-md-block">
      <PartnersImages />
    </div>
  </React.Fragment>
)

export default PartnerLogos;
