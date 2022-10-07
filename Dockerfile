FROM nginx:alpine

COPY dist/ usr/share/nginx/html

COPY conf/nginx.conf /ect/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g","daemon off;" ]







