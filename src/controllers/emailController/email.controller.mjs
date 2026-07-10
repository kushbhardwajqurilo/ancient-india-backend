import { EmailSubscribers } from "../../models/notifyEmailUsers.mjs";
import { ApiError, catchAsync, sendSuccess } from "../../utilities/hanlder.mjs";

export const notifyEmailRequest = catchAsync(async (req, res, next) => {
    const { email } = req?.body;
    try {
        await EmailSubscribers.create({ email });
        return sendSuccess(res, "Subscribed Successfully", {}, 200, true);
    } catch (error) {
        if (error.code === 11000) {
            return next(new ApiError("You are already subscribed", 400));
        }
        return next(new ApiError("Failed to subscribe try again later", 500));
    }
});