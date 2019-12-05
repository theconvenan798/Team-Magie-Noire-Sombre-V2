const express = require('express')
const router = express.Router()

const baseURL = '/log'

router.get(baseURL + '/register', function(req, res) {
  res.render('../views/authentification/register.ejs')
})

router.get(baseURL + '/login', function(req, res) {
  res.render('../views/authentification/login.ejs')
})

router.get(baseURL + '/register', function(req, res) {
  res.render('../views/authentification/forgot-psw.ejs')
})

module.exports = router