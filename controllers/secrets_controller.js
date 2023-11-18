import { Secret } from "../database/secret_model.js";

const saveSecret = async (req, res) => {
  try {
    const secret = new Secret(req.body);
    await secret.save();
    return res.redirect("/secrets");
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
};

const getAllSecrets = async (req, res) => {
  const secrets = await Secret.find();
  if (req.isAuthenticated()) {
    res.render("secrets",{secrets});
  } else {
    return res.redirect("/");
  }
};

export { saveSecret, getAllSecrets };
