import express from "express"
import { 
    getUsers,
    insertUsers,
    showById,
    updateUsers,
    deleteUsers 
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", insertUsers);
router.get("/users/:id", showById);
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

export default router