import { ETypeSendMail, TContentEmail } from '@/types'
import { emailContactTemplate, emailCVTemplate } from '@/utils/constants/htmlTemplate'
import sgMail from '@sendgrid/mail'
import _ from 'lodash'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
export type TArgsSendMail = {
  from?: TEmail
  to?: TEmail[]
  content: TContentEmail
}

type TEmail = {
  email: string
  name: string
}
type MailMsg = {
  to: { email: string; name: string }[]
  from: { email: string; name: string }
  subject: string
  html: string
  attachments: {
    content: string
    filename: string
    type: string
    disposition: string
    content_id: string
  }[]
}
// Function to send email with attachment
export const sendEmail = (args: TArgsSendMail) => {
  const { from, to, content } = args
  const { attachments, type } = content
  let template
  switch (type) {
    case ETypeSendMail.contact:
      template = emailContactTemplate
      break
    default:
      template = emailCVTemplate
  }

  const compiled = _.template(template)
  const html = compiled({ content })

  const msg: MailMsg = {
    to: [
      {
        email: 'thangmaiduc00@gmail.com',
        name: 'Thang Mai'
      }
    ], // Change to your recipient
    from: {
      email: 'thang00lata@gmail.com',
      name: 'Thang Mai'
    }, // Change to your verified sender
    subject: content.subject,
    html,
    attachments: []
  }
  if (attachments !== undefined && !_.isEmpty(attachments)) {
    msg.attachments.push({
      content: attachments[0]?.content as string,
      filename: `${Date.now().toString()}.pdf`,
      type: 'application/pdf',
      disposition: 'attachment',
      content_id: 'mytext'
    })
  }
  // try {
  //   sgMail
  //     .send(msg)
  //     .then((res) => {
  //       console.log('Send Mail Successfully')

  //       console.log(JSON.stringify(res))
  //     })
  //     .catch((error) => {
  //       throw error
  //     })
  // } catch (error) {
  //   throw error
  // }
  sgMail
    .send(msg)
    .then((res) => {
      console.log('Send Mail Successfully')
    })
    .catch((error) => {
      console.log('\n\n\nSendMail service error:::::::::>>>>>>>>>>>' + JSON.stringify(error))
    })
}
