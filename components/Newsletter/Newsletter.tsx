import React from 'react';
import { useState } from 'react';

import styles from './newsletter.module.scss';

export default function Newsletter() {
  const [state, setState] = useState({
    email: '',
    isLoading: false,
    subscribed: false,
    error: '',
  });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setState({ ...state, isLoading: true });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: state.email }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then(({ error }) => {
          throw new Error(error);
        });
      })
      .then(() => {
        setState({ isLoading: false, subscribed: true, error: '', email: '' });
      })
      .catch((err: Error) => {
        setState({ ...state, isLoading: false, error: err.message });
      });
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    setState({ ...state, email: input.value, error: '' });
  };

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.newsletter__title}>Newsletter</h2>

      <p className={styles.newsletter__description}>
        Zapisz się do newslettera aby otrzymywać informację o najnowszych
        postach.
      </p>

      {!!state.subscribed ? (
        <>
          <h2 className={styles.newsletter__success}>Zapisano pomyślnie 🎉</h2>{' '}
        </>
      ) : (
        <form className={styles.newsletter__form} onSubmit={handleSubmit}>
          <label className={styles.newsletter__label} htmlFor="email">
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              className={styles.newsletter__input}
            />
            {!!state.error && (
              <span className={styles.newsletter__error}>{state.error}</span>
            )}
          </label>

          <button
            className={`${styles.newsletter__button} ${
              state.isLoading ? styles.newsletter__button_disabled : ''
            }`}
            type="submit"
          >
            {state.isLoading ? 'Ładowanie...' : 'Subskrybuj'}
          </button>
        </form>
      )}
    </div>
  );
}
