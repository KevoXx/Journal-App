/* eslint-disable no-undef */
import { fileUpload } from '../../src/helpers/fileUpload'
import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
  cloud_name: 'dcuvlur36',
  api_key: '821711635314738',
  api_secret: 'pjKpgNDR5K_sCdpUFvjuCzTI68c',
  secure: true,
})

describe('Pruebas en fileUpload', () => {
  test('debe subir el archivo correctamente a cloudinary', async () => {
    const imageUrl =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF3EG6MALjlrEgW9Zr7yT8iHwaVen8lgcFZXRoCOxFYqEqe-DI4wjAhlEHCAyGJUTOFA&usqp=CAU'

    const resp = await fetch(imageUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'foto.jpg')

    const url = await fileUpload(file)
    expect(typeof url).toBe('string')

    // console.log(url)

    const segments = url.split('/')
    const imageId = segments[segments.length - 1].replace('.jpg', '')

    const cloudResp = await cloudinary.api.delete_resources(
      ['journal-app/' + imageId],
      {
        resource_type: 'image',
      }
    )
    console.log({ cloudResp })
  })

  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg')
    const url = await fileUpload(file)

    expect(url).toBe(null)
  })
})
