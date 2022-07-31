'use strict'

const { object } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactSchema = new Schema({
  email: { type: String, lowercase: true },
  transactName: String,
  requetsTransact: { type: Object, select: false },
  responseTransact: { type: Object, select: false },
  lastLogin: Date
})

module.exports = mongoose.model('Transact', TransactSchema)
