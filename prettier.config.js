module.exports = {
    "printWidth": 80,
    "tabWidth": 4,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "semi": false,
    "useTabs": true,
    "importOrder": [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@local/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/components/(.*)$",
        "^@/styles/(.*)$",
        "^[./]"
    ],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
}
