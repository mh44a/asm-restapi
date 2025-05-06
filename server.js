const express = require("express");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 3000;
const SECRET = "secretkey";
app.use(express.json());

const loadData = () => JSON.parse(fs.readFileSync("data.json", "utf-8"));
const saveData = (data) => fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

// Middleware: Token kontrolü
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token eksik" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token geçersiz" });
  }
};

// ------------------ AUTH ------------------

app.post("/register", (req, res) => {
  const data = loadData();
  const { name, surname, email, password, role } = req.body;

  if (data.users.find(u => u.email === email))
    return res.status(400).json({ message: "Email zaten kayıtlı" });

  const hashed = bcrypt.hashSync(password, 10);
  data.users.push({ id: uuid(), name, surname, email, password: hashed, role });
  saveData(data);
  res.json({ message: "Kayıt başarılı" });
});

app.post("/login", (req, res) => {
  const data = loadData();
  const { email, password } = req.body;
  const user = data.users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ message: "Geçersiz giriş" });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET);
  res.json({ token });
});

// ------------------ KULLANICI ------------------

app.get("/users", auth, (req, res) => {
  const data = loadData();
  res.json(data.users);
});

app.post("/users", auth, (req, res) => {
  const data = loadData();
  const { name, surname, email, password, role } = req.body;
  data.users.push({ id: uuid(), name, surname, email, password: bcrypt.hashSync(password, 10), role });
  saveData(data);
  res.json({ message: "Eklendi" });
});

app.put("/users/:id", auth, (req, res) => {
  const data = loadData();
  const user = data.users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: "Bulunamadı" });
  Object.assign(user, req.body);
  if (req.body.password)
    user.password = bcrypt.hashSync(req.body.password, 10);
  saveData(data);
  res.json({ message: "Güncellendi" });
});

app.delete("/users/:id", auth, (req, res) => {
  const data = loadData();
  data.users = data.users.filter(u => u.id !== req.params.id);
  saveData(data);
  res.json({ message: "Silindi" });
});

// ------------------ ASM ------------------

app.get("/asm", auth, (req, res) => {
  const data = loadData();
  res.json(data.centers);
});

app.post("/asm", auth, (req, res) => {
  const data = loadData();
  const { name, code, address, phone } = req.body;
  data.centers.push({ id: uuid(), name, code, address, phone });
  saveData(data);
  res.json({ message: "ASM eklendi" });
});

app.put("/asm/:id", auth, (req, res) => {
  const data = loadData();
  const item = data.centers.find(c => c.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Bulunamadı" });
  Object.assign(item, req.body);
  saveData(data);
  res.json({ message: "ASM güncellendi" });
});

app.delete("/asm/:id", auth, (req, res) => {
  const data = loadData();
  data.centers = data.centers.filter(c => c.id !== req.params.id);
  saveData(data);
  res.json({ message: "ASM silindi" });
});

// ------------------ ÇANTA ------------------

app.get("/bags", auth, (req, res) => {
  const data = loadData();
  res.json(data.bags);
});

app.post("/bags", auth, (req, res) => {
  const data = loadData();
  const { name, code, serial, status } = req.body;
  data.bags.push({ id: uuid(), name, code, serial, status });
  saveData(data);
  res.json({ message: "Çanta eklendi" });
});

app.put("/bags/:id", auth, (req, res) => {
  const data = loadData();
  const bag = data.bags.find(b => b.id === req.params.id);
  if (!bag) return res.status(404).json({ message: "Bulunamadı" });
  Object.assign(bag, req.body);
  saveData(data);
  res.json({ message: "Çanta güncellendi" });
});

app.delete("/bags/:id", auth, (req, res) => {
  const data = loadData();
  data.bags = data.bags.filter(b => b.id !== req.params.id);
  saveData(data);
  res.json({ message: "Çanta silindi" });
});

// ------------------

app.listen(PORT, () => {
  console.log("API hazır: http://localhost:" + PORT);
});
