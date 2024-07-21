const path = require('path');

module.exports = {
    entry: './resources/scripts/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve('./resources/scripts/rock_paper_scissors.js', 'dist'),
    }
};