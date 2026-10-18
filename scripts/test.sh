#!/bin/bash
set -e
echo "Running tests..."

curl -fsS http://localhost:3000/health
echo ""
echo "All tests passed!"