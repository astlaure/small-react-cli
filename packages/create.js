const depPackages = [
    'install',
    'react',
    'react-dom',
    'react-router-dom',
    'axios'
];

const devDepPackages = [
    'install',
    '-D',
    'webpack',
    'webpack-cli',
    'webpack-dev-server',
    '@babel/core',
    '@babel/preset-env',
    '@babel/preset-react',
    'babel-loader',
    'css-loader',
    "eslint",
    "eslint-config-airbnb",
    "eslint-import-resolver-webpack",
    "eslint-plugin-import",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "file-loader",
    "html-webpack-plugin",
    "mini-css-extract-plugin",
    "sass",
    "sass-loader",
    'jest',
    '@testing-library/react'
];

module.exports = {
    depPackages,
    devDepPackages
};
