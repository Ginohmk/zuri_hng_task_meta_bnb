import React from 'react';
import { PlaceToStayContainer, PlaceToStayWrapper } from './PlaceToStay.style';
import Setting from '../../assests/images/setting.svg';
import { cardItems } from './service';
import Card from '../../global_componets_style/card/Card';

const PlaceToStay = () => {
  return (
    <PlaceToStayContainer>
      <PlaceToStayWrapper>
        <section className="nav-wrapper">
          <div className="nav-links">
            <ul className="search-tab">
              <li>
                <button type="button">Resturant</button>
              </li>
              <li>
                <button type="button">Castle</button>
              </li>
              <li>
                <button type="button">fantast city</button>
              </li>
              <li>
                <button type="button">beach</button>
              </li>
              <li>
                <button type="button">Cabins</button>
              </li>
              <li>
                <button type="button">Off-grid</button>
              </li>
              <li>
                <button type="button">Farm</button>
              </li>
            </ul>
          </div>

          <div className="filter-container">
            <p>Location</p>
            <img src={Setting} alt="Filter settings" />
          </div>
        </section>

        <section className="card-section">
          {cardItems.map(({ id, image }) => (
            <Card image={image} key={id} />
          ))}
        </section>
      </PlaceToStayWrapper>
    </PlaceToStayContainer>
  );
};

export default PlaceToStay;
