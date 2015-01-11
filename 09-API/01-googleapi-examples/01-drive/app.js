/**
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var google = require('googleapis');
var drive = google.drive('v2');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = '303921745655-j15t0dk5f4rnnffvlo1hmc1mcsq3rqtn.apps.googleusercontent.com';
var CLIENT_SECRET = 'nPHtDJvneebCpN2a9CZvHKi1';
var REDIRECT_URL = 'https://developers.google.com/oauthplayground';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

oauth2Client.setCredentials({
  access_token: 'ya29.-ADtYiWbxSUJLsLMQPqd8PP1bCt7aLHG3_LV2eojR7Rm-m27ptUdeeklU4hgHzEIZqM4t2X2P0hOta',
  refresh_token: '1/BOJJLlc19CyoSel3c5dVIKtU8yABgiptc2qEP5HK7zE',
  expiry_date: (new Date()).getTime() // this create a new access token
});

var scopes = [
  'https://www.googleapis.com/auth/drive'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scopes: scopes // If you only need one scope you can pass it as string
});
/*
// Retrieve tokens via token exchange explained above or set them:
oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
});
*/


//oauth2Client.refreshAccessToken(function(err, tokens) {
  // your access_token is now refreshed and stored in oauth2Client
  // store these new tokens in a safe place (e.g. database)

  // insertion example
  drive.files.insert({
    resource: {
      title: 'Test',
      mimeType: 'text/plain'
    },
    media: {
      mimeType: 'text/plain',
      body: 'Hello World'
    },
    auth: oauth2Client
  }, function(err, response) {
    console.log('error:', err, 'inserted:', response);
  });


//});

