import React from 'react';
import styles from './EmailSubscribe.module.css';
import { FaEnvelope } from 'react-icons/fa';

const EmailSubscribe: React.FC = () => {
  return (
    <section className={styles.subscribeSection}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <FaEnvelope className={styles.emailIcon} />
        </div>
        <h2 className={styles.heading}>Your Travel Journey Starts Here</h2>
        <p className={styles.subHeading}>Sign up and we'll send the best deals to you</p>
        <div className={styles.subscribeForm}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter your email *"
              className={styles.emailInput}
            />
            <FaEnvelope className={styles.inputIcon} />
          </div>
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribe;