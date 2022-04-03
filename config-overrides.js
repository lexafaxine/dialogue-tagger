const {
  override,
  addBundleVisualizer,
  addWebpackAlias,
  addWebpackExternals,
  addWebpackResolve,
} = require("customize-cra");

const nodeExternals = require('webpack-node-externals');

const path = require('path');

const toImportPathAlias = (r) => path.dirname(require.resolve(r))


module.exports = override(
  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  addWebpackResolve({
    fallback: {
      '@material-ui/core': false, 
      '@material-ui/icons': false,
    },
  }),

  addWebpackAlias({
    "@material-ui/core": toImportPathAlias('@mui/material'),
    "@material-ui/icons": toImportPathAlias('@mui/icons-material'),
  }),

);
