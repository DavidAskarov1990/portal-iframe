/**
 * Created by david on 20.05.17.
 */

const CONFIG = {
    PATH: 'http://localhost:8000/',
    URL_YOUTUBE:'https://www.youtube.com/embed/',
    DEFAULT_LINK: 'https://www.youtube.com/embed/sKfk9iAZcF0'
};

module.exports = (app) => {
    app.constant('CONFIG', CONFIG)
};

