
const puppeteer = require('puppeteer')

// const tirarScreenshot = async() => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://yarnpkg.com')
     // await page.screenshot({ path: 'fotoDoYan.png'})
//     await page.pdf({
//         path: 'devpleno.pdf',
//         format: 'A4'
//     })
//     await browser.close()

// }

// tirarScreenshot() 

const minerando = async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

  try {
    await page.goto("https://www.kabum.com.br/hardware", { waitUntil: 'load', timeout: 0 })
  } catch (erro) {
    console.log('NET LENTA OTARIO KKKJKKK');
    await browser.close()
  }


    const result = await page.evaluate(() => {
      const promocoes = [];
    //   document.querySelectorAll("#listagem-produtos>div div.eITELq>div div.dIEkef a.sc-fzoLsD.gnrNhT.item-nome");
      try {
        document
          .querySelectorAll("#listagem-produtos>div div.eITELq>div ")
          .forEach((legenda) =>
            promocoes.push(

              "PROMOÇÃO:" + legenda.getElementsByClassName("item-nome")[0].innerText,
              legenda.getElementsByClassName("qatGF")[0].innerText + " no Boleto"

            )
          );
      } catch (erro) {
        console.log("Deu erro na consulta ;--------;");
        return promocoes;
      }
      
      console.log("teste",promocoes)  
      return promocoes;
      
    });

    
    
    await browser.close()
    return result
}

minerando().then((value) => {
  console.log(value);
});