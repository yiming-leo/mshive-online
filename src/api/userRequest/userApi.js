import server from "@/api/basicRequest";


//----------------------------GET请求区----------------------------

//发送OTP验证码给指定邮箱
export function sendOTPEmail(emailAddress) {
    return server.get(
        `/otp/send_email/`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                email_address: emailAddress
            }
        }
    )
}

//OTP验证邮箱
export function validateOTPEmail(emailAddr, OTPCode) {
    return server.get(
        `/otp/validate_email/`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                otp_code: OTPCode,
                email_addr: emailAddr
            }
        }
    )
}
