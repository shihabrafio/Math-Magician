// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import classes from '../styles/Header.modules.css';

export default function Header() {
  return (
    <div className="navbar">
      <h1>Math Magician</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Calculator"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Quote"
            className={(navInfo) => (navInfo.isActive ? classes.active : '')}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
