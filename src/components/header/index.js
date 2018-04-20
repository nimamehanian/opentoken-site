import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <div className="title"><Link to="/">OpenToken</Link></div>
      <div className="navlinks">
        {
          [
            { label: 'Team', route: '/team' },
            { label: 'FAQ', route: '/faq' },
          ].map(({ label, route }, idx) => (
            <span className="navlink" key={`navlink_${idx + 1}`}>
              <NavLink to={route} activeClassName="active">{label}</NavLink>
            </span>
          ))
        }
      </div>
    </div>
  </div>
);

export default Header;
