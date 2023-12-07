import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';  

const Cards = () => {
  const allVideoGames = useSelector(state => state.allVideoGames);

  return (
    <div className={styles.cardsContantai}>
      {allVideoGames.map(game => <Card key={game.id} info={game} />)}
    </div>
  );
}

export default Cards;