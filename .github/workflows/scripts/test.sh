#!/bin/bash
set -e
echo "Running API tests"

curl -fsS http://localhost:3000/healthy
echo ""
echo "API tests passed"
