import { createUsuarios, getUsuariosById } from "../controllers/products.controllers";

export const queries = {
    getAllUsuarios:"select * from Usuarios",
    createUsuarios: "INSERT INTO Usuarios (usuario,contraseña) VALUES (@usuario,@contraseña)",
    getUsuariosById:"SELECT * FROM Usuarios Where idUsuario = @idUsuario",
    deleteUsuario:"DELETE FROM Usuarios Where idUsuario = @idUsuario",
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    getAllRecetas:"select * from Receta",
    createRecetas:"INSERT INTO Receta (NombreReceta,upvotes,downvotes,visitas,descripcios) VALUES (@NombreReceta,@upvotes,@downvotes,@visitas,@descripcios)",
    getRecetasById:"SELECT * FROM Receta Where idReceta = @idReceta",
    deleteReceta:"DELETE FROM Receta Where idReceta = @idReceta",   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    getAllRutinas:"select * from Rutina",
    createRutinas:"INSERT INTO Rutina (IdUsuario,Nombre,Descripcion,MusculosEjercitados,Upvotes,Downvotes,Visitas) VALUES (@IdUsuario,@Nombre,@Descripcion,@MusculosEjercitados,@Upvotes,@Downvotes,@Visitas)",
    getRutinasById:"SELECT * FROM Rutina Where idRutina = @idRutina",
    deleteRutinas:"DELETE FROM Rutina Where idRutina = @idRutina",
}