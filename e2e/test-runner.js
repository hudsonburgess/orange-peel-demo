(function() {

    let Jasmine = require('jasmine')
    let ConsoleReporter = require('jasmine-console-reporter')
    let HtmlReporter = require('protractor-jasmine2-html-reporter')
    let glob = require('glob')
    let path = require('path')
    let jasmine = new Jasmine()
    let globPath = './dist/e2e/**/*.e2e-spec.js'
    let _ = require('lodash');

    supressAllLoggingOutputExceptForErrors()
    configureJasmineReporters()
    identifyFilesToBeTested()
    executeTests()

    function supressAllLoggingOutputExceptForErrors() {
        if (process.argv[2] && process.argv[2] === 'add-logs' || process.argv[3] && process.argv[3] === 'add-logs') {
            console.log('\n*** adding optional logging ***')
            return
        }
    }

    function configureJasmineReporters() {
        jasmine.env.clearReporters()

        jasmine.addReporter({
            colors: true,
            cleanStack: true,
            verbosity: true,
            listStyle: 'indent',
            activity: true,
            specDone: function(result) {
                console.log('Spec: ' + result.description + ' was ' + result.status);
                for (var i = 0; i < result.failedExpectations.length; i++) {
                          console.log('Failure: ' + result.failedExpectations[i].message);
                          console.log(result.failedExpectations[i].stack);
                        }
            }
        })
    }

    function identifyFilesToBeTested() {
        if (process.argv[2] && process.argv[2] != 'add-logs') {
            globPath = './dist/e2e/**/' + process.argv[2] + '.e2e-spec.js'
        }
        console.log('\n*** testing all files that match: ' + globPath + ' ***\n\n')
    }

    function executeTests() {
        glob(globPath, function(err, files) {
            if (err) {
                console.error("glob", err)
                return
            }
            jasmine.execute(files)
        })
    }

})()