/* eslint-disable no-undef */
import { fileUpload } from "../../src/helpers/fileUpload"



describe('Pruebas en fileUpload', () => { 
    test('debe subir el archivo correctamente a cloudinary', async() => { 
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF3EG6MALjlrEgW9Zr7yT8iHwaVen8lgcFZXRoCOxFYqEqe-DI4wjAhlEHCAyGJUTOFA&usqp=CAU'

        const resp = await fetch(imageUrl)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)

        expect(typeof url).toBe('string')
        
     })
 })