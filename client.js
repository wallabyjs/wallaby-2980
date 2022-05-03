module.exports = {
  connect: function () {
    globalThis.clientInstance = Date.now();
  },
  instance: function () {
    return globalThis.clientInstance;
  }
}