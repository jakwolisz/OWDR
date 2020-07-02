import React from 'react';
import { NavLink } from 'react-router-dom';

import imageDecoration from '../assets/Decoration.svg';
import imageShirt from '../assets/Icon-1.svg';
import imageBag from '../assets/Icon-2.svg';
import imageGlass from '../assets/Icon-3.svg';
import imageRecycle from '../assets/Icon-4.svg';

const HomeSimpleSteps = () => {

  return (
    <>
     <p>Wystarczą 4 proste kroki</p>
     <img alt="decoration" src={imageDecoration} />
      <div className="steps">
          <ul>
              <li>
                 <img alt="shirt" src={imageShirt} />
                 <span>Wybierz rzeczy</span>
                 <hr></hr>
                 <span>ubrania, zabawki</span>
                 <span>sprzęt i inne</span>
              </li>

              <li>
                 <img alt="bag" src={imageBag} />
                 <span>Spakuj je</span>
                 <hr></hr>
                 <span>skorzystaj z</span>
                 <span>worków na śmieci</span>
              </li>

              <li>
                 <img alt="magnifing_glass" src={imageGlass} />
                 <span>Zdecyduj komu</span>
                 <span>chcesz pomóc</span>
                 <hr></hr>
                 <span>wybierz zaufane</span>
                 <span>miejsce</span>
              </li>

              <li>
                 <img alt="recycle" src={imageRecycle} />
                 <span>Zamów kuriera</span>
                 <hr></hr>
                 <span>kurier przyjedze</span>
                 <span>w dogodnym terminie</span>
              </li>
          </ul>
      </div>
      <div className="buttons_container">
            <button><NavLink to="/logowanie">ODDAJ RZECZY</NavLink></button>
      </div>

    </>
  );
}

export default HomeSimpleSteps;
