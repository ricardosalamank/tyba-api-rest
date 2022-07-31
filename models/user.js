'use strict'

const { boolean } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  avatar: String,
  password: { type: String, select: false },
  signupDate: { type: Date, default: Date.now() },
  statusLogin: Boolean,
  lastLogin: Date
})

module.exports = mongoose.model('User', UserSchema)
