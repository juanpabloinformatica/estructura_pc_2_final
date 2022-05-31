const Usuario = require('../models/esquemaUsuario');
const csvtojson = require("csvtojson"); 
const crearUsuario = async (req,res)=>{
    // console.log("entro");
    // console.log(req.body);
    const {nombreDeUsuario,clave,idEvento} = req.body;    
    try {
        const usuario =new Usuario({nombreDeUsuario,clave,idEvento});
        const existe = await Usuario.findOne({nombreDeUsuario:nombreDeUsuario,clave:clave,idEvento:idEvento});
        if(existe){
            res.send("NOK");
            return console.log("NOK");
        } 
        await usuario.save();
        console.log("OK");
        res.send("ok");
    } catch (error) {
        console.log(`error: ${error}`);
    }

}
const revisarUsuario = async (req,res) =>{
    const {nombreDeUsuario,clave,idEvento} = req.params; 
    try {
        const usuario = await Usuario.findOne({nombreDeUsuario,clave,idEvento});
        if (usuario){
            res.send("ok");
            return console.log("id:\t"+usuario._id);
        }
        console.log('NOK');
        res.send('NOK')
    } catch (error) {
        
    }
}
const borrarUsuarios = async (req,res)=>{
    console.log("entra");
    try {
        let coleccion = await Usuario.find();
        console.log("coleccion:\n"+coleccion+"\n\n");
        await Usuario.remove();
        coleccion = await Usuario.find();
        console.log("Coleccion:\n"+coleccion+"\n\n");
    } catch (error) {
        
    }
}
const crearUsuariosDeCsv = async (req,res)=>{
    const {listaUsuarios} = req.files;
    // console.log(listaUsuarios);
    const jsonArray=await csvtojson().fromFile(listaUsuarios.tempFilePath);
    let sw = 0;
    jsonArray.forEach(async(e) =>{
        try {
            let usuario =new Usuario({nombreDeUsuario:e.nombreDeUsuario,clave:e.clave,idEvento:e.idEvento});
            const existe = await Usuario.findOne({nombreDeUsuario:e.nombreDeUsuario,clave:e.clave,idEvento:e.idEvento});
            if(existe){
            }else{
                await usuario.save();
            }
        } catch (error) {
            console.log(`error: ${error}`);
            sw=1;
        }

    })
    if(sw==1){
        res.send('Finalizo de agregar correctamente');
    }else{
        res.send('No termino de agregar correctamente');
    }
    
}
module.exports = {
    crearUsuario,
    revisarUsuario,
    borrarUsuarios,
    crearUsuariosDeCsv
}
