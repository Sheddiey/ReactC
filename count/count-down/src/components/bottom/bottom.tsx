import { Quotes } from 'data';
import { IQuotes } from 'types';

import styles from './bottom.module.scss';

export default function bottom() {
  
  function getRandomQuote(obj: IQuotes) {
    let keys = Object.keys(obj);
    let randomIndex = Math.floor(Math.random() * keys.length);
    return obj[keys[randomIndex]] as string;
  }

    return (
        <div className={styles.main}>
        <span>steved wisdom;</span>
        <h1>{getRandomQuote(Quotes)}</h1>
      </div>
    );
}
