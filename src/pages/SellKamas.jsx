import React from "react";
import { DofusKamas, DofusRetro, DofusTouch } from "../components";

import { Helmet } from "react-helmet";

import { carousel } from "../constants/data";

const SellKamas = () => {
  return (
    <div className="sellkamas">
      <Helmet>
        <title>Vendez vos kamas aux meilleurs taux du marché</title>
      </Helmet>
      <DofusKamas id="kamas" />
      <DofusRetro id="retro" />
      <DofusTouch id="touch" />
      <div className="kamas-sell-security">
        {carousel?.map((carous, i) => (
          <div className="carousel-container" key={i}>
            <span className="carousel-icon">{carous.icon}</span>
            <h3 className="carousel-title">{carous.title}</h3>
            <p className="carousel-desc">{carous.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellKamas;
