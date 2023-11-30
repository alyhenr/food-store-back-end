import appErrors from "../errors/appErrors.js";

export function validateBody(schema) {
    return validate(schema, "body");
}

export function validateParams(
    schema
) {
    return validate(schema, "params");
}

function validate(schema, type) {
    return (req, _res, next) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });

        if (!error) {
            next();
        } else {
            let errorMessage = "";
            error.details.forEach((d) => (errorMessage += d.message + " "));
            throw appErrors(errorMessage).unprocessableEntity();
        }
    };
}
