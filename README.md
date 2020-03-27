# MongoDBContainer
Creation of Latest mongo db image with script that initialize database ,collections and users

This dockerfile buld authenticated mongo db image with predefoned user, databases , collections nad data in that collections.

run container:

docker run --restart=always --name mongodbNAME -d -p 27017:27017 mongo:latest –auth

Can be used with shared folders to share database in local directory.

docker run --restart=always --name mongodb -d -p 27017:27017 -v ~/folder/folder/data:/data/db mongo:latest –auth
