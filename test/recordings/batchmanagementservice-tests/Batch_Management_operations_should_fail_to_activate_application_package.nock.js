// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0/activate?api-version=2017-09-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ApplicationPackageBlobNotFound\",\"message\":\"No blob could be found for the specified application package.\\nRequestId:e802678a-e039-4a27-b52e-2afd1d3d288e\\nTime:2017-11-08T22:01:34.8457399Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '232',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'e802678a-e039-4a27-b52e-2afd1d3d288e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4f73af2c-6739-4fcc-b291-e14e407f8f46',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220134Z:4f73af2c-6739-4fcc-b291-e14e407f8f46',
  date: 'Wed, 08 Nov 2017 22:01:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0/activate?api-version=2017-09-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ApplicationPackageBlobNotFound\",\"message\":\"No blob could be found for the specified application package.\\nRequestId:e802678a-e039-4a27-b52e-2afd1d3d288e\\nTime:2017-11-08T22:01:34.8457399Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '232',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'e802678a-e039-4a27-b52e-2afd1d3d288e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4f73af2c-6739-4fcc-b291-e14e407f8f46',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220134Z:4f73af2c-6739-4fcc-b291-e14e407f8f46',
  date: 'Wed, 08 Nov 2017 22:01:33 GMT',
  connection: 'close' });
 return result; }]];