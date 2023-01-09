import React from "react";
import "./UserDashboardCards.css";
import { AiFillAppstore } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { TbClick } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
const UserDashboardCards = () => {
  return (
    <div className="UserDashboard_Cards">
      <div className="User__Cards">
        <div className="card_content_Container">
          <div className="cards_logo">
            <AiFillAppstore />
          </div>
          <div className="Cards__text">
            <div className="cards__heading">APPS</div>
            <div className="Cards__counts">234</div>
          </div>
        </div>
      </div>
      <div className="User__Cards">
        <div className="card_content_Container">
          <div className="cards_logo">
            <CgWebsite />
          </div>
          <div className="Cards__text">
            <div className="cards__heading">WEBSITES</div>
            <div className="Cards__counts">234</div>
          </div>
        </div>
      </div>
      <div className="User__Cards">
        <div className="card_content_Container">
          <div className="cards_logo">
            <TbClick />
          </div>
          <div className="Cards__text">
            <div className="cards__heading">CLICKS</div>
            <div className="Cards__counts">234</div>
          </div>
        </div>
      </div>
      <div className="User__Cards">
        <div className="card_content_Container">
          <div className="cards_logo">
            <MdAttachMoney />
          </div>
          <div className="Cards__text">
            <div className="cards__heading">REVENUE</div>
            <div className="Cards__counts">$234</div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UserDashboardCards;
