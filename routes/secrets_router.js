import {Router} from 'express';
import {saveSecret, getAllSecrets} from '../controllers/secrets_controller.js'

const router = Router();

router.post("/submit", saveSecret)

router.get("/secrets", getAllSecrets);

// router.get("/secrets", (req, res) => {
//     if (req.isAuthenticated()) {
//       res.render("secrets");
//     } else {
//       res.redirect("/");
//     }
//   });

export default router;