import httpStatus from "http-status";

export default (err, _req, res, _next) => {
    if (err?.status) {
        res.status(err.status).send(err.message);
    } else {
        console.log(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
            "Please try again in a few seconds."
        );
    }
}