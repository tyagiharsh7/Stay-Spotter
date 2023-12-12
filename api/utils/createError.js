// Helper function to create error objects with status code and message
const createError = (statusCode, message) => {
    const error = new Error();
    error.status = statusCode;
    error.message = message;
    return error;
};

export default createError;