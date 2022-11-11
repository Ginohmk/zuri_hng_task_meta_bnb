import React from 'react';
import Banner from '../banner/Banner';
import { MainContainer } from './Main.style';
import OpenSea from '../../assests/images/opensea_token.svg';
import MBToken from '../../assests/images/mb_token.svg';
import MetaMask from '../../assests/images/meta_mask_token.svg';
import CardSection from './sections/card_section/CardSection';

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <section className="strip-section">
        <ul>
          <li>
            <img src={MBToken} alt="Mb Token logo" />
            <p className="mb-token">MBToken</p>
          </li>

          <li>
            <img src={MetaMask} alt="Meta Mask token logo" />{' '}
            <p className="meta-mask">METAMASK</p>
          </li>

          <li>
            <img src={OpenSea} alt="Open Sea token logo" />
            <p className="opensea">OpenSea</p>
          </li>
        </ul>
      </section>

      <CardSection />
    </MainContainer>
  );
};

export default Main;
