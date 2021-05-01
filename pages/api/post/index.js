import prisma from "../../../lib/prisma";

// POST api/post
// Required fields in body: jobTitle, jobDesc,
// Optional fields in body:

export default async function handle(req, res) {
  const {
    values, postType
  } = req.body;
  const today = Date.now()
  const currentDate = new Date(today);
  const validDate = currentDate.setDate(currentDate.getDate() + 30);
  const result = await prisma.jobPosting.create({
    data: {
      title: values.jobTitle,
      category: values.category,
      company: values.companyName,
      location: values.location,
      description: values.jobDescription,
      featured: postType == 'best' ? true : false,
    highlight: postType == 'better' ? true : false,
    hasLogo: postType == 'best' ? true : false,
    remote: values.remote == 'true' ? true : false,
    jobType: values.jobType,
    tags: values.tags.split(','),
    createdAt: new Date(today).toISOString(),
    updatedAt: new Date(today).toISOString(),
    validThrough: new Date(validDate).toISOString(),
    salary: 40000,
    applyURL: values.howToApply,
    companyEmail: values.companyEmail,
    companyWebsite: values.companyWebsite,
    companyStatement: values.companyStatement,
    companyLogo: values.companyName,
    companyDescription: values.companyName,
    },
  });
  res.json(result);
}
