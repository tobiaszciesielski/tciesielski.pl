export function getRequestParams(email: string) {
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
