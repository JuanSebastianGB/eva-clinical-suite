const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "hello world" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})