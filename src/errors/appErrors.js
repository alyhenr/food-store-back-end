import httpStatus from "http-status";

export default (message = "Something went wrong...") => {
    return {
        conflict, notFound
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
}

