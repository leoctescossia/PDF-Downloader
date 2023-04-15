//const { jsPDF } = require("jspdf");
//jspdf = import('https://unpkg.com/jspdf@2.3.1/dist/jspdf.es.min.js?module')
jspdf = import('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js?module')



const botao = document.getElementById('click');
botao.addEventListener('click', enviar)

const imagem_carregada = document.getElementById('imagem_pdf');
const res = document.getElementById('res')


imagem_carregada.addEventListener('change', function(){
    res.textContent = this.value;
})




function enviar(){

    const file = document.getElementById('imagem_pdf').files;
    console.log(file.length)

    
    if(file.length != 0){
        const arquivo_enviado = file[0]

        // FileReader = le o conteúdo do arquivo enviado
        const arquivo_lido = new FileReader()
        // readAsDataURL le o tipo do arquivo enviado
        arquivo_lido.readAsDataURL(arquivo_enviado)
        
        
        arquivo_lido.onload = function(arquivo_enviadoEvento){
            var image = arquivo_enviadoEvento.target.result //transformar pra base64
            console.log(image)
        

        const doc = new jspdf.jsPDF()
        doc.addImage(image, 'JPEG', 15, 40)
        //doc.text('Testando pdf', 10, 10)
        doc.save('imagem.pdf')
        }
    }
    
    else if(file.length == 0){
        window.alert('Não adicionou nenhum arquivo')
    }


   /*
   //const doc = new jspdf.jsPDF()
   const doc = new jspdf.jsPDF()
   //doc.addImage(image_base64, 'JPEG')
   doc.text('Testando pdf', 10, 10)
   doc.save('image.pdf')
   */

}

