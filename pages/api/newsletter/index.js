import { emailSignup } from '../../../utils/emailSignup';


export default async (req, res) => {
  if (req.method === 'PUT') {
    const { email } = req.body;
    console.log(req.body)
    await emailSignup({ email });
    return res.status(202).end()
  }
  return res.status(400).json({
    error: {
      code: 'not_found',
      message: "The requested endpoint was not found or doesn't support this method"
    }
  })
}