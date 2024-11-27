const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'google-drive-clone',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

