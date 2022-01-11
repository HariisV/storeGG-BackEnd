module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        title: "NGETEs expREss",
      });
    } catch (error) {}
  },
};
