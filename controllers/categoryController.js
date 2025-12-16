import db from "../config/db.js";

export const getCategories = (req, res) => {
    db.query("SELECT * FROM categories", (err, result) => {
        if (err) res.status(500).json(err);
        res.json(result);
    });
};

export const getCategoriesById = (req, res) => {
    db.query(
        "SELECT * FROM categories WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result[0] || {});
        }
    );
};

export const createCategory = (req, res) => {
    const { name } = req.body;
    db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ id: result.insertId, name});
        }
    );
};

export const updateCategory = (req, res) => {
    const { name } = req.body;
    db.query(
        "UPDATE categories SET name = ? WHERE id = ?",
        [name, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "category updated" });
        }
    );
};

export const deleteCategory = (req, res) => {
    db.query(
        "DELETE FROM categories WHERE id = ?",
        [req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "category deleted" });
        }
    );
};