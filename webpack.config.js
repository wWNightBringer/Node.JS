'use strict'
module.exports={
    entry: "index.html",
    output: {
        filename: "Page.js",
    },
    watch: true,
    watchOptions: {
        aggregateTimeout:100
    }
};
