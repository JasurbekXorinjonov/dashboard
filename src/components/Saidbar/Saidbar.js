import "./Saidbar.css";
import Logo from "../images/icons/logo.svg";
import BtnSaidbar from "./BtnSaidbar/BtnSaidbar";
import {
  Agents,
  Articles,
  Chart,
  Contacts,
  Ideas,
  Settings,
  Subscription,
  Tickets,
} from "../images/icons/img";

function Saidbar() {
  return (
    <div className="saidbar-conatiner">
      <div className="saidbar-header">
        <img src={Logo} alt="Dashboar Logo" />
        <h2>Dashboard Kit</h2>
      </div>
      <div>
        <BtnSaidbar icon={<Chart />} title="Overview" />
        <BtnSaidbar icon={<Tickets />} title="Tickets" />
        <BtnSaidbar icon={<Ideas />} title="Ideas" />
        <BtnSaidbar icon={<Contacts />} title="Contacts" />
        <BtnSaidbar icon={<Agents />} title="Agents" />
        <BtnSaidbar icon={<Articles />} title="Articles" />
        <BtnSaidbar icon={<Settings />} title="Settings" />
        <BtnSaidbar icon={<Subscription />} title="Subscription" />
      </div>
    </div>
  );
}

export default Saidbar;
