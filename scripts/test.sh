#!bin/bash
set -e
echo "Test script for product-api"

curl -fsS http://localhost:3000/health

echo ""
echo "CI/CD passe"