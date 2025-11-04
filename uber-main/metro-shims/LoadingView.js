// Shim for react-native/Libraries/Utilities/LoadingView
// Provides a minimal compatible interface so libraries that import LoadingView don't break.
import { View } from 'react-native';
const LoadingView = {
  show: () => {},
  hide: () => {},
  default: function _LoadingViewComponent() { return null; }
};
export default LoadingView;
module.exports = LoadingView;
