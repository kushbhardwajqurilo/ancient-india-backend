
export const ApiError = class extends Error {
    constructor(message, statusCode) {
        super(message)
        this.status = statusCode === 200 || statusCode === 201
        this.statusCode = statusCode
        this.isOperational = true
        // Error.captureStackTrace(this, this.constructor)
    }
}

export const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}

export const catchAsync = (fn) => async (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
}

export const sendSuccess = (
    res,
    message = "success",
    data = {},
    statusCode = 200,
    status = true,
) => {
    return res.status(statusCode).json({
        status,
        message,
        data,
    });
};
