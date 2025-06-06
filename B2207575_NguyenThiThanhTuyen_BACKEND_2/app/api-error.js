class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCCode = statusCode;
        this.message = message;
    }
}
    
module.exports = ApiError;
    