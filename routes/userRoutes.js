import express from "express";
import { 
    getUsers,
    insertUsers,
    showById,
    updateUsers,
    deleteUsers 
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", insertUsers);
router.get("/:id", showById);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;