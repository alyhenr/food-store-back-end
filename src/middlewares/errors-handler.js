import httpStatus from "http-status";

export default (err, _req, res, _next) => {
    if (err?.status) {
        res.status(err.status).send(err.message);
    } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).message(
            "Please try again in a few seconds."
        );
    }
}