import React from 'react';

const HomeWhoWeHelpNav = ({id, onChoose, name}) => {
  return (
      <>
        <li id={id} onClick={onChoose}>{name}</li>
      </>
  );
}

export default HomeWhoWeHelpNav;
