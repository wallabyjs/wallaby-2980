module.exports = ({
  setup: async () => {
    const client = require('./client');
    await client.connect();
    console.log(`client.instance(): ${client.instance()}`);
  }
});