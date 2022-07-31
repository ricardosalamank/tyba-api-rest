module.exports = {
  port: process.env.PORT || 3004,
  db: process.env.MONGODB_URI || 'mongodb+srv://userApp:KhOKBeyY6mFTIkyS@cluster0.v5rdt.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}
