### node database

#### sequelize

http://sequelizejs.com/

```bash
$ npm install --save sequelize
$ npm install --save mysql
```

#### MySql
```bash
$ sudo apt-get install mysql-server
```

https://launchpad.net/~olivier-berten/+archive/ubuntu/misc

http://www.mysql.com/products/workbench/

#####MySql command line tutorial:

http://dev.mysql.com/doc/refman/5.5/en/database-use.html

```bash
$ mysql --help
$ mysql -h host -u user -p
$ mysql -u user -p
mysql> QUIT

mysql> select version(), current_date, user();
mysql> show databases;
mysql> use databasename;
mysql> create database test;
//http://dev.mysql.com/doc/refman/5.7/en/grant.html
mysql> CREATE USER 'peru'@'localhost' IDENTIFIED BY 'peru';
mysql> GRANT ALL ON test.* TO 'peru'@'localhost';
mysql> create table ...
mysql> insert ...
mysql> show tables;
mysql> describe tablename;

// http://stackoverflow.com/questions/17666249/how-to-import-a-sql-file-using-the-command-line-in-mysql
$ mysql -u username -p database_name < file.sql
$ mysqldump db_name > backup-file.sql
```