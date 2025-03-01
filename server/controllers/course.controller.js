export const addCourse = async (req, res) => {
    const { title, description, thumbnail, quizAvailable, pdfLink } = req.body;
    if (!title || !description || !thumbnail || !quizAvailable || !pdfLink) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    try {
      const newCourse = new Course({
        title,
        description,
        thumbnail,
        quizAvailable,
        pdfLink,
      });
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      console.error("Error saving course:", error);
      res.status(500).json({ error: "Server error." });
    }
  };