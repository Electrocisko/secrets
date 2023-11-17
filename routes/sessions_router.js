import { Router } from "express";
import passport from "passport";
import users_controller from "../controllers/users_controller.js";

const router = Router();

router.post("/register",
    passport.authenticate("register", {failureRedirect: "/error",failureMessage: true,}),users_controller.userSignup);

router.post("/login",
    passport.authenticate("login", {failureRedirect: "/error", failureMessage: true}), users_controller.userLogin);


router.get("/logout",users_controller.userLogout )


router.get("/error", (req,res) => {
    res.json({
        message: "trono"
    })
})









// router.post("/register", passport.authenticate("register"), (req,res) => {
//     try {
//         res.json({
//             status:"succes"
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })



export default router;
