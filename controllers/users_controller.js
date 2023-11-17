


const userSignup = async (req, res) => {
    try {
      const user = req.user;
      return res.render('secrets.ejs',{user});
    } catch (error) {
      return res.json({
        status: "error",
        message: error.message,
      });
    }
  };

const userLogin = async (req,res) => {
    const user = req.user;
    return res.render('secrets.ejs',{user});
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