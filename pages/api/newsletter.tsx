import type { NextApiRequest, NextApiResponse } from 'next';

import { getRequestParams } from '../../lib/newsletter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = JSON.parse(req.body);
  console.log(req.body);

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Nie zapisano do newslettera. Wprowadź email.',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    await fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers,
    });

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(500).json({
      error: `Nie zapisano do newslettera. Spróbuj ponownie.`,
    });
  }
}
