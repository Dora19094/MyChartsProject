@echo off

echo * Starting Redis Docker Container...
docker run -d -p 6379:6379 redis
echo * Redis Docker container started successfully.

echo * Starting Auth server...
cd /d C:\Users\konto\Documents\GitHub\SaaS23-60\microservices\auth"
npm run dev
echo *Auth server started successfully.

