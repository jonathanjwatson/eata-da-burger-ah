const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// VIEWS ROUTES
app.get("/", (req, res) => {
  connection.query("SELECT * FROM burger", (err, data) => {
    console.table(data);
    res.render("index", { burgers: data });
  });
});

// API ROUTES

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.delete("/api/burger/:id", (req, res) => {
    connection.query("DELETE FROM burger WHERE id = ?", [req.params.id], (err, data) => {
        if(err){
            console.log(err);
            return res.status(500).end();
        }
        res.json({
            error: false,
            data: null,
            message: "Successfully deleted burger."
        })
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
