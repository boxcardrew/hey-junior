const SENDGRID_API = 'https://api.sendgrid.com/v3/marketing/contacts';

const emailSignup = async ({ email }) => {
  console.log(email)
  await fetch(SENDGRID_API, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      list_ids: ['2196954f-106e-4329-8cee-53c85caa1d5f'],
      contacts: [ {email: email} ] 
    })
  })
}

export { emailSignup }