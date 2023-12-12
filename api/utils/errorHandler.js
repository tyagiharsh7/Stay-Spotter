const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Handle 400 Bad Request errors
    if (err.status === 400) {
        res.status(400).json({ error: "Bad Request", message: err.message });
    }

    // Handle 401 Unauthorized errors
    else if (err.status === 401) {
        res.status(401).json({ error: "Unauthorized", message: err.message });
    }

    // Handle 403 Forbidden errors
    else if (err.status === 403) {
        res.status(403).json({ error: "Forbidden", message: err.message });
    }

    // Handle 404 Not Found errors
    else if (err.status === 404) {
        res.status(404).json({ error: "Not Found", message: err.message });
    }

    // Handle other types of errors with a generic message
    else {
        res.status(500).json({
            error: "Internal Server Error",
            message: "Something went wrong.",
        });
    }
};

export default errorHandler;