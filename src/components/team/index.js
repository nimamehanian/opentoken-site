import React from 'react';
import roster from '../../content/roster';
import panteraLogo from '../../images/pantera_logo.svg';

const Team = () => (
  <div className="team">
    <div className="title">The OpenToken Team</div>
    <div className="avatars">
      {
        roster.map(({
          name,
          role,
          image,
          socialProfiles,
        }, idx) => (
          <div className="teammate" key={`teammate_${idx + 1}`}>
            <div className="picture">
              <img src={image} alt="avatar" />
            </div>
            <span className="name">{name}</span>
            <span className="role">{role}</span>
            {
              socialProfiles ?
              socialProfiles.map(({ icon, url }, i) => (
                <span key={`social_profile_${i + 1}`}>
                  <a href={url} target="_blank">
                    <i className={icon} />
                  </a>
                </span>
              )) : null
            }
          </div>
        ))
      }
    </div>
    <div className="investors">
      <div className="title">Our Investors</div>
      <img src={panteraLogo} alt="pantera" />
    </div>
  </div>
);

export default Team;
