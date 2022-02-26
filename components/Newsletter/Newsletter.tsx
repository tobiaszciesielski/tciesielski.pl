import React from 'react';
import { useState } from 'react';

import styles from './newsletter.module.scss';

function getRequestParams(email: string) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const dataCenter = apiKey?.split('-')[1];
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const base64ApiKey = Buffer.from(`anystring:${apiKey}`).toString('base64');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const params = getRequestParams(email);
    fetch(params.url, {
      method: 'POST',
      headers: params.headers,
      body: JSON.stringify(params.data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    setEmail(input.value);
  };

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.newsletter__title}>Newsletter</h2>
      <p className={styles.newsletter__description}>
        Zapisz się do newslettera aby otrzymywać informację o najnowszych
        postach.
      </p>
      <form
        className={styles.newsletter__form}
        onSubmit={handleSubmit}
        action=""
      >
        <input
          id="email"
          name="EMAIL"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className={styles.newsletter__input}
        />
        <button className={styles.newsletter__button} type="submit">
          Subskrybuj
        </button>
      </form>
    </div>
  );
}
