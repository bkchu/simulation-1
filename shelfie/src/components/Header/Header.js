import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = props => {
  let display = <div className="Header__title">SHELFIE</div>;
  switch (props.match.path) {
    case "/":
      break;
    case "/bins/:id":
      display = (
        <div className="Header__title Header__second">
          Shelf {props.match.params.id[0]}
        </div>
      );
      break;
    case "/bin/:id":
      display = (
        <div className="Header__addons">
          <Link
            className="Header__link"
            to={`/bins/${props.match.params.id[0]}`}
          >
            <div className="Header__title Header__second">
              Shelf {props.match.params.id[0]}
            </div>
          </Link>
          <div className="Header__title Header__third">
            Bin {props.match.params.id[1]}
          </div>
        </div>
      );
      break;
    case "/create/:id":
      display = (
        <div className="Header__addons">
          <Link
            className="Header__link"
            to={`/bins/${props.match.params.id[0]}`}
          >
            <div className="Header__title Header__second">
              Shelf {props.match.params.id[0]}
            </div>
          </Link>
          <div className="Header__title Header__third">
            Add to Bin {props.match.params.id[1]}
          </div>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <header className="Header">
      <div className="Header__container">
        <Link to="/">
          <img className="Header__logo" src={Logo} alt="" />
        </Link>
        {display}
      </div>
    </header>
  );
};

export default Header;
