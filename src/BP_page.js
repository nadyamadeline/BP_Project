import React from 'react';
import './BP_cards';
import Cards from './BP_cards'
import Jennie from './assets/pictures/jennie.jpeg'
import Jisoo from './assets/pictures/jisoo.jpg'
import Rose from './assets/pictures/rose.jpg'
import Lisa from './assets/pictures/lisa.jpg'

function Blackpink(){

    return(
        <div>
             <h1 className='title'>Which BLACKPINK Member is Your Favourite?</h1>
             <div className='members'>
      <Cards name='Jennie' photo = {Jennie} position='Main Rapper, Lead Vocalist' id='1'/>
      <Cards name='Jisoo' photo = {Jisoo} position='Lead Vocalist, Visual' id='2' />
      <Cards name='Rosé' photo = {Rose} position='Main Vocalist, Lead Dancer' id='3' />
      <Cards name='Lisa' photo = {Lisa} position='Main Dancer, Lead Rapper' id='4' />
      </div>
        </div>
    )
}

export default Blackpink;