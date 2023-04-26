const express = require("express");

const router = express.Router();
const axios = require("axios");

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=aea0adb151ba4341b9ef51baf604a0f8&page_size=100",
      {
        headers: {
          // Authorization: "Bearer aea0adb151ba4341b9ef51baf604a0f8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    // dataApi = {"test" : "test"};
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
