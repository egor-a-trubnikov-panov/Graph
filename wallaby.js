module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'src/**/*.jsx', load: false}
    ],

    tests: [
      {pattern: 'src/**/*.test.js', load: false}
    ],

    compilers: {
      '**/*.jsx': wallaby.compilers.babel({
        babel: require('babel-core')
      })
    }
  };
};