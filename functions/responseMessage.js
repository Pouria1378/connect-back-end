const responseMessage = (statusCode) => {
    const messages = {
        200: {
            statusCode: 200,
            success: true,
            msg: "ورود موفقیت آمیز بود خوش آمدید",
        },
        201: {
            statusCode: 200,
            success: true,
            msg: "حساب شما با موفقیت ایجاد شد لطفا وارد شوید",
        },
        400: {
            statusCode: 200,
            success: false,
            msg: "کاربر یافت نشد",
        },
        401: {
            statusCode: 200,
            success: true,
            msg: "invalid Token!",
        },
        403: {
            statusCode: 200,
            success: true,
            msg: "A token is required for authentication",
        },
        404: {
            statusCode: 200,
            success: false,
            msg: "Page not found",
        },
        409: {
            statusCode: 200,
            success: true,
            msg: "شما حساب کاربری دارید لطفا وارد شوید",
        },
        413: {
            statusCode: 200,
            success: false,
            msg: "رمز اشتباه است",
        },
        414: {
            statusCode: 200,
            success: false,
            msg: "تمام ورودی ها مورد نیاز است",
        },
    }

    return messages[statusCode] ||
    {
        statusCode: 500,
        success: false,
        message: "Internal server error",
    }
}

module.exports = responseMessage;