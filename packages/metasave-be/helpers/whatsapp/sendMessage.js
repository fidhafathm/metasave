// import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()

// const GRAPH_API_TOKEN = process.env.GRAPH_API_TOKEN

// const sendMessage = (img, name, contact, time, date) => {
//   var options = {
//     method: 'POST',
//     url: 'https://graph.facebook.com/v17.0/180851955102577/messages',
//     headers: {
//       Authorization: `Bearer ${GRAPH_API_TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//     data: {
//       messaging_product: 'whatsapp',
//       to: `${contact}`,
//       type: 'template',
//       template: {
//         name: 'alert',
//         language: { code: 'en' },
//         components: [
//           {
//             type: 'header',
//             parameters: [
//               {
//                 type: 'image',
//                 image: {
//                   link: `${img}`,
//                 },
//               },
//             ],
//           },
//           {
//             type: 'body',
//             parameters: [
//               {
//                 type: 'text',
//                 text: `${name}`,
//               },
//               {
//                 type: 'text',
//                 text: `${time}`,
//               },
//               {
//                 type: 'text',
//                 text: `${date}`,
//               },
//             ],
//           },
//         ],
//       },
//     },
//   }

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data)
//       return true
//     })
//     .catch(function (error) {
//       console.error(error)
//       return false
//     })
// }

// export default sendMessage

import axios from 'axios'
import dotenv from 'dotenv'
import FormData from 'form-data'

dotenv.config()

const GRAPH_API_TOKEN = process.env.GRAPH_API_TOKEN

const sendMessage = async (imgData, name, contact, time, date) => {
  try {
    // get a media_id.
    const mediaFormData = new FormData()
    mediaFormData.append('messaging_product', 'whatsapp')
    mediaFormData.append('file', imgData, {
      filename: 'userfall.jpg',
      contentType: 'image/jpeg',
    })

    const mediaUploadOptions = {
      method: 'POST',
      url: 'https://graph.facebook.com/v17.0/180851955102577/media',
      headers: {
        ...mediaFormData.getHeaders(),
        Authorization: `Bearer ${GRAPH_API_TOKEN}`,
      },
      data: mediaFormData,
    }

    const mediaResponse = await axios.request(mediaUploadOptions)
    const mediaId = mediaResponse.data.id
    console.log('Media uploaded with ID:', mediaId)

    const messageOptions = {
      method: 'POST',
      url: 'https://graph.facebook.com/v17.0/180851955102577/messages',
      headers: {
        Authorization: `Bearer ${GRAPH_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: {
        messaging_product: 'whatsapp',
        to: `${contact}`,
        type: 'template',
        template: {
          name: 'alert',
          language: { code: 'en' },
          components: [
            {
              type: 'header',
              parameters: [
                {
                  type: 'image',
                  image: {
                    id: mediaId, 
                  },
                },
              ],
            },
            {
              type: 'body',
              parameters: [
                {
                  type: 'text',
                  text: `${name}`,
                },
                {
                  type: 'text',
                  text: `${time}`,
                },
                {
                  type: 'text',
                  text: `${date}`,
                },
              ],
            },
          ],
        },
      },
    }

    const messageResponse = await axios.request(messageOptions)
    console.log('Message sent successfully:', messageResponse.data)
    return true
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message)
    return false
  }
}

export default sendMessage