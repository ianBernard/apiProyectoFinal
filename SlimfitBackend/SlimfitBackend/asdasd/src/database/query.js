import { createUsuarios, getUsuariosById } from "../controllers/products.controllers";

export const queries = {
    getAllUsuarios:"select * from Usuarios",
    getAllRecetas:"select * from Receta",
    createUsuarios: "INSERT INTO Usuarios (usuario,contraseña) VALUES (@usuario,@contraseña)",
    createRecetas:"INSERT INTO Receta (NombreReceta,upvotes,downvotes,visitas,descripcios) VALUES (@NombreReceta,@upvotes,@downvotes,@visitas,@descripcios)",
    getUsuariosById:"SELECT * FROM Usuarios Where idUsuario = @idUsuario",
    getRecetasById:"SELECT * FROM Receta Where idReceta = @idReceta",
    deleteUsuario:"DELETE FROM Usuarios Where idUsuario = @idUsuario",
    deleteReceta:"DELETE FROM Receta Where idReceta = @idReceta"    
}