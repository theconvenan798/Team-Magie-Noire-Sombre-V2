const express = require('express')
const router = express.Router()

const baseURL = '/log'

router.get(baseURL + '/register', function(req, res) {
  res.render('../views/authentification/register')
})

router.get(baseURL + '/login', function(req, res) {
  res.render('../views/authentification/login')
})

router.get(baseURL + '/register', function(req, res) {
  res.render('../views/authentification/forgot-psw')
})