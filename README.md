## Getting Started

### Install dependencies:
```bash
npm i
```
### Prisma Setup (Run either of these commands depending on your situation)
Generate a prisma client (If you don't have a prisma migration folder already):
```bash
npx prisma migrate dev --name init
```
Generate a prisma client (If you have a prisma migration folder already):
```bash
npx prisma generate
```
### Check out the database using Prisma Studio
```bash
npx prisma studio
```
### Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


