const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'likilok@seznam.cz',
        subject: 'Thx for joining in',
        text: `Hello ${name}, welcome in the Task Manager application :)`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'likilok@seznam.cz',
        subject: 'Goodbye our friend',
        text: `Goodbye ${name}, hopefully you enjoyed our application and we are sorry you are leaving us :(`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}