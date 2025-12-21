import db from "../config/db.js";

export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json(results);
    });
};

export const insertUsers = (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users (name, email) VALUES(?, ?)", [name, email], (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json({ message: "Data berhasil disimpan" });
    });
};

export const showById = (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM users WHERE id=?", [id], (err, results) => {
        if (err) return res.status(500).json({ message: err });

        if (results.length === 0)
            return res.status(400).json({ message: "data tidak ditemukan" })

        res.json(results[0]);
    });
};

export const updateUsers = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id], (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json({ message: "data berhasil diupdate"});
    });
};

export const deleteUsers = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json({ message: "data berhasil dihapus"});
    });
};