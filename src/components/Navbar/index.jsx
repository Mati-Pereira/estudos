import "./styles.css";
import { BsGlobe } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <h1>NETFLIX</h1>
      <ul>
        <li>
          <div className="select">
            <BsGlobe />
            <select>
              <option>Português</option>
              <option>Inglês</option>
            </select>
          </div>
          <button>Entrar</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
