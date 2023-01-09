module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "excludeFiles": [
        "node_modules/**/*",
        "build/**/*",
        "public/**/*",
        "./tailwind.config.cjs",
        "./postcss.config.cjs"
        
    ],
}
