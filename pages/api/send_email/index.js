import { sendEmail } from '../../../utils/sendEmail';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { values } = req.body;
    await sendEmail({ values });
    return res.status(200).end()
  }
  return res.status(400).json({
    error: {
      code: 'not_found',
      message: "The requested endpoint was not found or doesn't support this method"
    }
  })
}