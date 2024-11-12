import JSZip from "jszip";
export function zipAllFiles(files){
    const zip = new JSZip();
        zip.file(i, "Hello World\n");

        const img = zip.folder("images");
        img.file("smile.gif", imgData, {base64: true});

    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });

}