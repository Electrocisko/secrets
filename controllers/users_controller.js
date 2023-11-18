


const userSignup = async (req, res) => {
    try {
      return res.redirect('/secrets');
    } catch (error) {
      return res.json({
        status: "error",
        message: error.message,
      });
    }
  };

const userLogin = async (req,res) => {
    const user = req.user;
    return res.redirect('/secrets');
}

const userLogout = async (req,res) => {
    req.session.destroy();

  res.render("home.ejs")
}


  export default {
    userSignup,
    userLogin,
    userLogout
  }