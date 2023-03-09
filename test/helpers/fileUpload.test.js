import { fileUpload } from "../../src/helpers/fileUpload"

describe('fileUpload', () => { 
    test('should carga de imagen', async() => { 
        const imageUrl = 'https://res.cloudinary.com/ddprcgs6t/image/upload/v1674243348/diario-app/notas/p1yjuhsi9apqplulvi6c.png'
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob],'foto.jpg')
        
        const url = await fileUpload(file)
        expect (typeof url).toBe ('string')
     })

 })