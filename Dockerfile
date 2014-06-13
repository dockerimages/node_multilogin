FROM dockerimages/nave
MAINTAINER Direkt SPEED
ADD easy_node_authentication /app
#process.env[v]
# Setting up some vars for the Application Container you can supply new vars on run
ENV FACEBOOKclientID 
ENV FACEBOOKclientSecret
ENV FACEBOOKcallbackURL
ENV TWITTERconsumerKey
ENV TWITTERconsumerSecret
ENV TWITTERcallbackURL
ENV GOOGLEclientID
ENV GOOGLEclientSecret
ENV GOOGLEcallbackURL
#CMD ./nave use stable /app/server.js
