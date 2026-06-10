# HOW TO INSTALL

### 1. Install packages

```bash
npm install
```

### 2. Sesuaikan db/pool.js

```js
const pool = new Pool({
  user: "postgres",
  password: "postgres", // change this!
  host: "localhost",
  port: 5432,
  database: "tokoku", // change this!
  idleTimeoutMillis: 100,
});
```

### 3. Jalankan migration

```bash
node db/migration.js
```

### 4. Jalankan seeder

```bash
node db/seeds/01-categories.js
node db/seeds/02-products.js
```
