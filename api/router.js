var recipes = require('./handlers/recipes');
var recipeTypes = require('./handlers/recipeTypes');
var recipeDetails = require('./handlers/recipeDetails');
var jobs = require('./handlers/jobs');
var runningJobs = require('./handlers/runningJobs');
var jobTypes = require('./handlers/jobTypes');
var jobTypesValidate = require('./handlers/jobTypesValidate');
var jobTypesStatus = require('./handlers/jobTypesStatus');
var jobDetails = require('./handlers/jobDetails');
var jobTypeDetails = require('./handlers/jobTypeDetails');
var jobTypeUpdate = require('./handlers/jobTypeUpdate');
var recipeTypeDetails = require('./handlers/recipeTypeDetails');
var workspaces = require('./handlers/workspaces');
var workspaceDetails = require('./handlers/workspaceDetails');
var metrics = require('./handlers/metrics');
var metricsDataTypes = require('./handlers/metricsDataTypeOptions');
var metricsPlotData = require('./handlers/metricsPlotData');
var jobExecutionLogs = require('./handlers/jobExecutionLogs');
var jobExecution = require('./handlers/jobExecution');
var ingestsStatus = require('./handlers/ingestsStatus');
var status = require('./handlers/status');
var jobInputs = require('./handlers/jobInputs');
var files = require('./handlers/files');
var jobExecutions = require('./handlers/jobExecutions');
var batches = require('./handlers/batches');
var batchDetails = require('./handlers/batchDetails');
var batchValidate = require('./handlers/batchValidate');
var strikes = require('./handlers/strikes');
var strikeDetails = require('./handlers/strikeDetails');
var ingests = require('./handlers/ingests');
var ingestDetails = require('./handlers/ingestDetails');
var fileDetails = require('./handlers/fileDetails');
var nodes = require('./handlers/nodes');
var nodeDetails = require('./handlers/nodeDetails');
var nodeUpdate = require('./handlers/nodeUpdate');
var queueLoad = require('./handlers/queueLoad');
var queueStatus = require('./handlers/queueStatus');

var apiVersion = 'v6';

module.exports = {
    init: function(server) {
        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/recipes/',
            handler: recipes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/recipe-types/',
            handler: recipeTypes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/recipes/{id}/',
            handler: recipeDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/recipe-types/{name}/',
            handler: recipeTypeDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/jobs/',
            handler: jobs
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/jobs/{id}/',
            handler: jobDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/job-types/running/',
            handler: runningJobs
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/job-types/',
            handler: jobTypes
        });

        server.route({
            method: 'POST',
            path: '/mocks/' + apiVersion + '/job-types/validation/',
            handler: jobTypesValidate
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/job-types/status/',
            handler: jobTypesStatus
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/job-types/{name}/{version}/',
            handler: jobTypeDetails
        });

        server.route({
            method: 'PATCH',
            path: '/mocks/' + apiVersion + '/job-types/{id}/',
            handler: jobTypeUpdate
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/workspaces/',
            handler: workspaces
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/workspaces/{id}/',
            handler: workspaceDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/metrics/',
            handler: metrics
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/metrics/job-types/',
            handler: metricsDataTypes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/metrics/ingest/',
            handler: metricsDataTypes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/metrics/error-types/',
            handler: metricsDataTypes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/metrics/{type}/plot-data/',
            handler: metricsPlotData
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/job-executions/{id}/logs/combined/',
            handler: jobExecutionLogs
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/job-executions/{id}/',
            handler: jobExecution
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/ingests/status/',
            handler: ingestsStatus
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/status/',
            handler: status
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/jobs/{id}/input_files/',
            handler: jobInputs
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/files/',
            handler: files
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/jobs/{id}/executions/',
            handler: jobExecutions
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/batches/',
            handler: batches
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/batches/{id}/',
            handler: batchDetails
        });

        server.route({
            method: 'POST',
            path: '/mocks/' + apiVersion + '/batches/validation/',
            handler: batchValidate
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/strikes/',
            handler: strikes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/strikes/{id}/',
            handler: strikeDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/ingests/',
            handler: ingests
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/ingests/{id}/',
            handler: ingestDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/files/{id}/',
            handler: fileDetails
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/nodes/',
            handler: nodes
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/nodes/{id}/',
            handler: nodeDetails
        });

        server.route({
            method: 'PATCH',
            path: '/mocks/' + apiVersion + '/nodes/{id}/',
            handler: nodeUpdate
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/load/',
            handler: queueLoad
        });

        server.route({
            method: 'GET',
            path: '/mocks/' + apiVersion + '/queue/status/',
            handler: queueStatus
        })
    }
};
