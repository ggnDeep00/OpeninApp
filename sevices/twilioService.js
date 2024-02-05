import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config()

class TwilioService {

    createCall(){

        const client = twilio(process.env.ACCOUNTS_ID, process.env.AUTH_TOKEN);

        client.calls.create({
            url: "http://demo.twilio.com/docs/voice.xml",
            to: process.env.TO_PHONE_NUMBER,
            from: process.env.FROM_PHONE_NUMBER,
        }).then(call => console.log(call.sid));
    }
}

const twilioService = new TwilioService()

export default twilioService