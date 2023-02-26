module.exports = (resquest, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
};