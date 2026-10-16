@echo off
cd /d D:\nhattran\LTHDV\Project_1\product-api

docker compose -f docker-compose-prod.yaml pull product-api
docker compose -f docker-compose-prod.yaml up -d