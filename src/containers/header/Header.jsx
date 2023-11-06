import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import VanillaTilt from 'vanilla-tilt';

VanillaTilt.init(document.querySelector("#move_img"), {
  max: 10,
  speed: 100,
  perspective: 1000,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  transition: true,
  "mouse-event-element":  ".gpt3__header"
});

const Header = () => {
  return (
    <div id='home' className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" id='move_img'/>
      </div>
    </div>
  )
}

export default Header