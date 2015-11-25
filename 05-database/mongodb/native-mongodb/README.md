http://mongodb.github.io/node-mongodb-native/index.html

####Install mongodb
https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

In c9.io:

https://docs.c9.io/docs/setting-up-mongodb

```
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod

$ ./mongod
```

####Install mongodb driver
```
$ sudo apt-get install libkrb5-dev

$ npm init
$ npm install mongodb --save
```


####Others
Files >4MB:

http://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle2.html

