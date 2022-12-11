module.exports = {
  apps: [
    {
      name: 'calculator-app',
      script: 'server.js',
      node_args: '-r dotenv/config',
    },
  ],
};
