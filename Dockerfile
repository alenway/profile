
# 1. Use Node 18 base image
FROM node:25-alpine

# 2. Install pnpm globally
RUN npm install -g pnpm

# 3. Set app folder inside container
WORKDIR /app

# 4. Copy only package files first (for caching)
COPY package.json pnpm-lock.yaml ./

# 5. Install dependencies
RUN pnpm install --frozen-lockfile

# 6. Copy the rest of the project
COPY . .

# 7. Build Next.js
RUN pnpm run build

# 8. Expose app port
EXPOSE 3000

# 9. Start Next.js PRODUCTION
CMD ["pnpm", "run", "start"]
