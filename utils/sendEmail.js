const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ values }) => {
  
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {email: 'bray.drew@gmail.com'}
          ],
          subject: `New Job Posting from ${values.companyName}`
        }
      ],
      from: {
        email: 'contact@heyjunior.co',
        name: 'Drew @ HeyJunior'
      },
      content: [
        {
          type: 'text/html',
          value: `${values.jobTitle}<br>${values.jobDescription}`
        }
      ]
    })
  })
}

export { sendEmail }