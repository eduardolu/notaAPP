
export const fileUpload = async( file )=>{
    if (!file) throw new Error ('no tienes ningun archivo para subir')
    const cloudUrl='https://api.cloudinary.com/v1_1/ddprcgs6t/upload';
    const formData = new FormData();
    formData.append( 'upload_preset', 'react-notas')
    formData.append( 'file', file)

    try {
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        });
        if ( !resp .ok) throw new Error('no hay imagen');

        const cloudResp = await resp.json();
        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.messaje)
    }

}