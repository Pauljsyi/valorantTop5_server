const express = require("express");
const PORT = process.env.PORT || 5000;
const axios = require("axios");
require("dotenv").config();

const URL = `https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${process.env.RIOT_API}?size=5&startIndex=0&api_key=${process.env.ACT_ID_ONE}`;

const app = express();

/**
 * Queries the valerant server
 * @return player information
 */
app.get("/", async function (req, res) {
  await res.send("Valorant API Working!");

  // ====== AXIOS ===== //

  try {
    let response = await axios.get(URL);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log("error: ", error);
    //error handler
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
