import httpStatus from "http-status";

export default (message = "Something went wrong...") => {
    return {
        conflict, notFound, badRequest, forbidden
    };

    function conflict() {
        return {
            message, status: httpStatus.CONFLICT,
        }
    }

    function notFound() {
        return {
            message, status: httpStatus.NOT_FOUND,
        }
    }

    function badRequest() {
        return {
            message, status: httpStatus.BAD_REQUEST,
        }
    }

    function forbidden() {
        return {
            message, status: httpStatus.FORBIDDEN,
        }
    }
}

