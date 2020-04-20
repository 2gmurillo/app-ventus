require('ignore-styles');

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'woff'],
  name: '/assets/[hash].[ext]',
  mimetype: 'application/font-woff',
  limit: 10000,
});

require('./server');
