import React, { useState, useEffect, useContext } from 'react';
import HomeWhoWeHelpNav from "./HomeWhoWeHelpNav";

import imageDecoration from '../assets/Decoration.svg';

import { FirebaseContext } from './Firebase';

const HomeWhoWeHelp = () => {
const firebase = useContext(FirebaseContext);
const [fundations, setFundations] = useState(null);

useEffect(() => {
  firebase.fundations().on('value', snapshot => {
    setFundations(snapshot.val())
  })
}, [])


////////////////////////////////////////////////////////////////////
/////////////PAGINATION NUMBERS LOGIC AND RENDERING/////////////////
////////////////////////////////////////////////////////////////////

const [currentPage, setCurrentPage] = useState(1);
const [currentFundation, setCurrentFundation] = useState(1);

const fundation = fundations && fundations.find(fund => fund.id === currentFundation);

const handleClick = e => {
  setCurrentPage(e.target.id);
}

const itemsPerPage = 3;
const pageNumbers = [];

for (let i = 1; i <= fundation?.items.length / itemsPerPage; i++) {
  pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map(number => { 
  if (pageNumbers.length === 1) {
    return null;
  }
  else {
    return (
      <li key={number} id={number} onClick={handleClick}>{number}</li>
    )
  }
});

/////////////////////////////////////////////////////////
/////////FUNDATION ITEMS LOGIC AND RENDERING/////////////
/////////////////////////////////////////////////////////


const onChoose = e => {
  setCurrentFundation(e.target.id)
  setCurrentPage(1)
}

  const CurrentFundationItems = fundation?.items.slice((currentPage - 1) * 3, currentPage * 3)

  const renderCurrentFundationItemsElements = CurrentFundationItems?.map( (item, index) => (
    <div className="element_wrapper_row" key={index}>
      <div className="left">
        <span>{item.name}</span>
        <br /><br />
        <span>{item.goal}</span>
      </div>
      <div className="right">
        <span>{item.tools}</span>
      </div>
    </div>
  ));

  return (
      <>
      <section id="help">
        <div className="content_wrapper">
          <p>Komu pomagamy</p>
          <img alt="Decoration" src={imageDecoration} />
          <nav className="help_nav">
              <ul>
                {fundations?.map(fun => (<HomeWhoWeHelpNav key={fun.id} id={fun.id} onChoose={onChoose} name={fun.name} />))}
              </ul>
          </nav>
          <div className="help_description">
              {fundation?.desc}
          </div>
          <div className="help_content">
              {renderCurrentFundationItemsElements}
          </div>    
          <div className="help_pagination">
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div> 
        </div>
      </section>
    </>
  );
}

export default HomeWhoWeHelp;