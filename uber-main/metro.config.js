
const path = require('path');
module.exports = {
  resolver: {
    extraNodeModules: {
      'react-native/Libraries/Utilities/LoadingView': path.resolve(__dirname, 'metro-shims/LoadingView.js'),
    },
  },
  watchFolders: [path.resolve(__dirname, 'metro-shims')],
};
