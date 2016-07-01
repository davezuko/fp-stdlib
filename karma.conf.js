const IS_CI = process.env.NODE_ENV === 'CI'
const WATCH_MODE = false

const config = {
  files : [
    'dist/redash.js',
    'tests/**/*.spec.js'
  ],
  preprocessors : {
    'dist/redash.js' : ['coverage']
  },
  singleRun  : !WATCH_MODE,
  frameworks : ['mocha', 'dirty-chai', 'better-sinon-chai'],
  reporters  : ['spec', 'coverage'],
  browsers   : ['PhantomJS'],
  coverageReporter : {
    reporters : [
      { type : 'text-summary' },
      { type: 'lcov', dir: 'coverage' }
    ]
  }
}

if (!WATCH_MODE) {
  config.coverageReporter.reporters.push(
    { type : IS_CI ? 'lcov' : 'html', dir : 'coverage' }
  )
  if (IS_CI) {
    config.reporters.push('coveralls')
  }
}

module.exports = function (karma) {
  karma.set(config)
}
