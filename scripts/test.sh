#!/bin/bash
set -e
echo "Running API tests..."

curl -fsS http://localhost:3000/health
echo "Health check passed."