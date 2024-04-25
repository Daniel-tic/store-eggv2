const navSelector = document.getElementById("navbar");

const footerSelector = document.getElementById("footer");                                      

const options = [
  { title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"] },
  { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", ".Envios", "Devoluciones"] },
  { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Formas de pago", ".Envios", "Devoluciones"] },
  { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Formas de pago", ".Envios", "Devoluciones"] },
  { title: "Garantía", linkTo: "./warranty.html", opts: ["Formas de pago", ".Envios", "Devoluciones"] },
];

for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
  //   anchor.style.width= "1080 px" ;
//   anchor.style.padding = "15px 20px";
    // anchor.style.backgroundColor = "yellow";
    anchor.style.color = "white"
    anchor.style.display = "flex";
    anchor.style.justifyContent = "space-between";
    // anchor.style.lanchorListStyleType = 'none';
    anchor.style.fontSize = '14px';
  navSelector.appendChild(anchor);
}

for (let option of options) {
    // const anchor = document.createElement("a");
    // anchor.className = "nav-button";
    // anchor.textContent = option.title;
    // anchor.href = option.linkTo;
    // anchor.style.color = "white"
    // anchor.style.display = "flex";
    // anchor.style.justifyContent = "space-between"
    // footerSelector.appendChild(anchor);
    // for(let opt of options){
    //   const ancho1 = document.createElement("a");
    //   ancho1.className = "nav-button"
    //   ancho1.textContent = opt.opts
    //   ancho1.href = opt.linkTo
    //   ancho1.style.color = "yellow"
    //   footerSelector.appendChild(ancho1);
    // }

     //options.opts opciones dentro deun fotter
    const div_col = document.createElement("div");
    div_col.className = "col";
    const ul_col = document.createElement("ul");
    const li_col = document.createElement("li");
    li_col.className = "col-main-item";

    const anchor = document.createElement("a");
    anchor.className = "footer-option";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    anchor.style.color = "yellow";
    anchor.style.listStyleType = 'none';

    li_col.appendChild(anchor);
    ul_col.appendChild(li_col); //para q aparesca  la priemra opcion en la lista 

    for( let sub_option of option.opts){
      const s_li_col = document.createElement("li");
      s_li_col.className = "col-main-item1";

      const s_anchor = document.createElement("a");
      s_anchor.style.color = "white"
      s_anchor.className = "footer-option";
      s_anchor.textContent =sub_option;
      s_anchor.href = option.linkTo;
      s_li_col.appendChild(s_anchor);
      ul_col.appendChild(s_li_col);
    }
    
    // ul_col.appendChild(li_col);
    div_col.appendChild(ul_col);
    console.log (div_col);
    footerSelector.appendChild(div_col);

  }