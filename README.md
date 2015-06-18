node-express-examples
=====================
### Doc

http://nodejs.org/api/

http://expressjs.com/guide.html


### Install nodejs

[http://nodejs.org/](http://nodejs.org/)

```
from https://nodejs.org/download/

# apt-get install -y curl
# curl -SLO http://nodejs.org/dist/v0.12.4/node-v0.12.4-linux-x64.tar.gz
(# wget http://nodejs.org/dist/v0.12.4/node-v0.12.4-linux-x64.tar.gz)
# tar -C /usr/local --strip-components 1 -xzf node-v0.12.4-linux-x64.tar.gz
# rm node-v0.12.4-linux-x64.tar.gz
# node -v
# npm -v
```
OR
```
apt-get update
apt-get install curl
curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs
```
OR
```
$ sudo apt-get install python-software-properties
$ sudo add-apt-repository ppa:chris-lea/node.js  
$ sudo apt-get update
$ sudo apt-get install nodejs
```
OR
```bash
$ sudo apt-get update  
$ sudo apt-get install nodejs  
$ sudo apt-get install nodejs-legacy
$ sudo apt-get install npm
```
update npm for EACCES error:
```
sudo chown -R $(whoami) ~/.npm
```

update npm:
```
$ sudo npm install -g npm
```

#### nodemon

https://github.com/remy/nodemon

https://developer.chrome.com/devtools/index

```bash
$ sudo npm install -g nodemon
($ sudo chown -R $(whoami) ~/.npm)
$ nodemon app.js
``` 
#### debug:

https://github.com/node-inspector/node-inspector

```bash
$ sudo npm install -g node-inspector
$ node-debug app.js
```

#### HTTP Request:

curl:

```bash
$ sudo apt-get install curl
```

Postman (chrome extension):

https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm
