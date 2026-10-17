#!/bin/bash
set -e

echo "Testing Product API..."

curl -fsS http://localhost:3000/health

echo ""
echo "CI/CD TEST PASSED!"