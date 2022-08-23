'use strict';

{

  const age = document.getElementById('age');
  const radio_war = document.getElementById('war');
  const radio_world = document.getElementById('world');
  const radio_fantasy = document.getElementById('fantasy');
  const radio_reality = document.getElementById('reality');
  const radio_love = document.getElementById('love');
  const radio_comedy = document.getElementById('comedy');
  const radio_mystery = document.getElementById('mystery');
  const textarea = document.getElementById('textarea');
  const answer_radio = document.getElementById('answer-radio');
  const answer_text = document.getElementById('answer-text');
  const answer_select = document.getElementById('answer-select');

  age.addEventListener('change', () => {
    answer_select.textContent = age.value;
  });
  radio_war.addEventListener('change', () => {
    answer_radio.textContent = radio_war.value;
  });
  radio_world.addEventListener('change', () => {
    answer_radio.textContent = radio_world.value;
  });
  radio_fantasy.addEventListener('change', () => {
    answer_radio.textContent = radio_fantasy.value;
  });
  radio_reality.addEventListener('change', () => {
    answer_radio.textContent = radio_reality.value;
  });
  radio_love.addEventListener('change', () => {
    answer_radio.textContent = radio_love.value;
  });
  radio_comedy.addEventListener('change', () => {
    answer_radio.textContent = radio_comedy.value;
  });
  radio_mystery.addEventListener('change', () => {
    answer_radio.textContent = radio_mystery.value;
  });
  textarea.addEventListener('change', () => {
    answer_text.textContent = textarea.value;
  });



  const title = document.querySelector('.top-kv__title');
  const frame = document.querySelector('.top-kv__frame');

  window.addEventListener('load', () => {
    title.classList.add('appear');
    frame.classList.add('pop');
  });


  const cards = document.querySelectorAll('.card');
  const card_one = document.querySelector('.card-one');
  const card_two = document.querySelector('.card-two');
  const card_three = document.querySelector('.card-three');


  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  function callback_sp(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear-sp');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };
  const options_two = {
    threshold: 0.5,
  };
  const options_three = {
    threshold: 0.7,
  };

  const observer_sp = new IntersectionObserver(callback_sp, options);
  const observer = new IntersectionObserver(callback, options);
  const observer_two = new IntersectionObserver(callback, options_two);
  const observer_three = new IntersectionObserver(callback, options_three);

  observer.observe(card_one);
  observer_two.observe(card_two);
  observer_three.observe(card_three);
  cards.forEach(card => {
    observer_sp.observe(card);
  });
}