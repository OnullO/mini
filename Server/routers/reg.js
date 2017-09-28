const express = require('express')
const router = express.Router()
const User = require('../db/').User
router.post('/reg', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({
    username
  }, (err, doc) => {
    if (doc) {
      res.json({
        status: '0'
      })
    } else {
      let user = new User({
        username,
        password
      })
      user.save();
      res.json({
        status: '1'
      })
    }
  })
})

module.exports = router
