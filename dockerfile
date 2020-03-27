#From latest mongo version
FROM mongo:latest

#copy init.jsfile to /docker-entrypoint-initdb.d/ in the container  will initialize mongo db on container start
COPY init.js /docker-entrypoint-initdb.d/

#expose internla port
EXPOSE 27017

#run mongo  with authorization
CMD ["--auth"]