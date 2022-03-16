import prisma from "../../../lib/prisma"
export default async function handler(req, res) {
  req.body.date = new Date(req.body.date)

  await prisma.nft.create({
    data: req.body
  })

  res.status(200).json({ success: true })
}