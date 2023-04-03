import axios from 'axios';

const apiKey = import.meta.env.VITE_MY_API_KEY;


const sendEmail = (data) => {
  const url = 'https://api.sendinblue.com/v3/smtp/email';

  const payload = {
    sender: {
      name: data.senderName,
      email: data.senderEmail
    },
    to: [{ email: data.recipientEmail }],
    subject: data.subject,
    htmlContent: data.content
  };

  return axios.post(url, payload, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey
    }
  });
}

export default sendEmail;
