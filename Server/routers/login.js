const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const User = require('../db/').User
const config = require('../config')
router.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({
    username
  }).then(user => {
    if (user && user.password == password) {
      var token = jwt.sign({
        name: user.name
      }, config.secret, {
        expiresIn: 60 // token到期时间设置
      });
      user.token = token;
      user.save(function (err) {
        if (err) {
          res.send(err);
        }
      });
      res.json({
        success: true,
        message: '验证成功!',
        token: token,
        name: user.name
      })
    } else {
      res.json({
        status: '0'
      })
    }
  })
})

module.exports = router
