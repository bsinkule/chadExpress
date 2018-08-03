```
npm init -y
npm install --save-dev nodemon
npm install --save express
touch app.js
echo node_modules > .gitignore
git add .
git commit -m "initial commit"
(SETUP APP.JS)
npm run dev
```

### Added to Scripts:
 ```
    "start": "node app.js",
    "dev": "nodemon app.js",
```

### Changed main to app.js:
```
"main": "app.js",
```

### Installing CORS:
```
npm install --save cors
const cors = require('cors')
app.use(cors())
```
