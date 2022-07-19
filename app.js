// tomar los elementos del html
const inputArchive = document.getElementById("archive");
const audio = document.getElementById("audio");

// evento para detectar cambios en el input
inputArchive.addEventListener("change", () => {
    // obtener el archivo o la informacion
    readArchive(inputArchive.files[0]);
})

const readArchive = ar => {
    const reader = new FileReader();

    // leer el archivo que se paso
    reader.readAsDataURL(ar);
    
    // evento load: verificar que el archivo este cargado
    reader.addEventListener("load", e => {
        // pasarle la url al audio del html
        audio.src = e.currentTarget.result;
    });
}