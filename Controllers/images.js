const { createCanvas, loadImage } = require("canvas");

exports.getImageByName = async (req, res) => {
  const { text } = req.body;
  const width = 400;
  const height = 200;
  const fontSize = 50;

  try {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    const imageUrl = `https://source.unsplash.com/400x200/?${text}`;
    const image = await loadImage(imageUrl);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "black";
    context.font = `${fontSize}px Arial`;
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText(text, 0, 0);

    const buffer = canvas.toBuffer("image/png");

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": buffer.length,
    });
    res.end(buffer);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Something went wrong", ok: false });
  }
};
