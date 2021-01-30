import db from "../../../utils/db";

export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === "PUT") {
      await db
        .collection("entries")
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString(),
        });
    } else if (req.method === "GET") {
      const doc = await db.collection("entries").doc(id).get();
      res.status(200).json(doc.data());
    } else if (req.method === "DELETE") {
      await db.collection("entries").doc(id).delete();
    }
    res.status(200).end();
  } catch (error) {
    res.status(400).end();
  }
};
