class ApiReturnedError extends Error {
    constructor(message) {
        super(message || "The API returned an error"); 
        this.name = "ApiReturnedError"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 503;
    }
}

class NoConnectionFound extends Error {
    constructor(message) {
        super(message || "No connection found."); 
        this.name = "NoConnectionFound"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;
    }
}

module.exports = {
    ApiReturnedError,
    NoConnectionFound
}