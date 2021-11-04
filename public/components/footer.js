import { h } from 'preact';

import styles from './footer.module.css';

export function Footer() {
  return (
    <footer class="container">
      <hr />
      <ul class={styles.links}>
        <li>About</li>
        <li>Privacy</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
}
