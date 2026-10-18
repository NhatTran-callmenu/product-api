
#!/bin/bash
set -e

URL="http://localhost:3000/api/products"
ID="CI${RANDOM}${RANDOM}"

echo "1. CREATE"
curl -fsS -X POST "$URL" -H "Content-Type: application/json" \
-d "{\"pid\":\"$ID\",\"pname\":\"Test\",\"price\":100,\"quantity\":5}"

echo "2. READ"
curl -fsS "$URL"

echo "3. UPDATE"
curl -fsS -X PUT "$URL/$ID" -H "Content-Type: application/json" \
-d '{"pname":"Updated","price":200,"quantity":10}'

echo "4. DELETE"
curl -fsS -X DELETE "$URL/$ID"

echo "CRUD TEST PASSED!"
