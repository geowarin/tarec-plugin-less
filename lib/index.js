module.exports = function sassPlugin (context, operations) {

  operations.commands.modify('build')
    .before((context, args) => {

      var ExtractTextPlugin = operations.dependencies.resolve('extract-text-webpack-plugin');
      context.webpackConfig.module.loaders.push({
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      });
    });

  operations.commands.modify('start')
    .before((context, args) => {

      context.webpackConfig.module.loaders.push({
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      });
    });
};
