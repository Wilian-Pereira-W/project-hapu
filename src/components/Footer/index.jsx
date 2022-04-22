import React from 'react';
import styles from './styles.module.scss';
import Button from '../../assets/Button.svg';
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';

function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.sectionContents}>
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <img src={Button} alt="Compartilhamento de babá" />
        <a href="/">Or browse local nanny-shares</a>
      </section>
      <section className={styles.sectionNav}>
        <h2>Hapu</h2>
        <nav>
          <a href="/">Share Your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">Terms & Privacy</a>
        </nav>
        <nav>
          <a href="/"><img src={Facebook} alt="Facebook" /></a>
          <a href="/"><img src={Twitter} alt="Twitter" /></a>
          <a href="/"><img src={Instagram} alt="Instagram" /></a>
        </nav>
      </section>
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </footer>
  );
}

export default Footer;
