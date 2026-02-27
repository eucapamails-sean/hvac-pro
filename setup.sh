#!/bin/bash
set -e

echo "Setting up test project..."

mkdir -p src/app src/components src/lib

echo '{ "name": "abos-test-project", "version": "0.1.0", "private": true, "scripts": { "build": "echo Build OK", "dev": "echo Dev OK", "lint": "echo Lint OK" } }' > package.json

echo '{ "compilerOptions": { "target": "ES2017", "module": "commonjs", "strict": true, "baseUrl": ".", "paths": { "@/*": ["src/*"] } } }' > tsconfig.json

echo "export {};" > src/lib/db.ts

echo "export default function Home() { return <h1>Test</h1>; }" > src/app/page.tsx

echo "Setup complete."
