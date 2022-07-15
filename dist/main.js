(()=>{"use strict";let e=()=>{let t=document.querySelectorAll(".delete-product"),o=document.querySelector(".delete-all-products"),r=document.querySelector(".list-group"),n=document.querySelector(".totals");document.addEventListener("renderTicket",(t=>{e()}),{once:!0}),t.forEach((e=>{e.addEventListener("click",(t=>{(async()=>{let t={route:"deleteProduct"};t.ticket_id=e.dataset.ticketid,t.table_id=e.dataset.table,await fetch("web.php",{headers:{Accept:"application/json"},method:"DELETE",body:JSON.stringify(t)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((t=>{e.parentElement.remove(),0==t.total?(r.querySelector(".no-products").classList.remove("d-none"),n.querySelector(".iva-percent").innerHTML="",n.querySelector(".base").innerHTML=0,n.querySelector(".iva").innerHTML=0,n.querySelector(".total").innerHTML=0):(n.querySelector(".iva-percent").innerHTML=t.total.valor_iva,n.querySelector(".base").innerHTML=t.total.total_base,n.querySelector(".iva").innerHTML=t.total.iva_total,n.querySelector(".total").innerHTML=t.total.total)})).catch((e=>{console.log(e)}))})()}))})),o&&o.addEventListener("click",(e=>{(async()=>{let e={route:"deleteAllProducts"};e.table_id=o.dataset.table,await fetch("web.php",{headers:{Accept:"application/json"},method:"DELETE",body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((e=>{let t=r.querySelectorAll("li:not(.add-product-layout)");r.querySelector(".no-products").classList.remove("d-none"),n.querySelector(".iva-percent").innerHTML="",n.querySelector(".base").innerHTML=0,n.querySelector(".iva").innerHTML=0,n.querySelector(".total").innerHTML=0,t.forEach((e=>{e.remove()}))})).catch((e=>{console.log(e)}))})()}))},t=()=>{let e=document.querySelectorAll(".delete-table-button"),o=document.querySelector(".delete-table-modal"),r=document.querySelectorAll(".edit-table-button");document.addEventListener("renderAdminTable",(e=>{t()}),{once:!0}),e.forEach((e=>{e.addEventListener("click",(t=>{o.dataset.id=e.dataset.id}))})),o&&o.addEventListener("click",(e=>{(async()=>{let e={};e.route=o.dataset.route,e.id=o.dataset.id,await fetch("web.php",{headers:{Accept:"application/json"},method:"DELETE",body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((e=>{document.querySelector("[data-element='"+e.id+"']").remove()})).catch((e=>{console.log(e)}))})()})),r.forEach((e=>{e.addEventListener("click",(t=>{(async()=>{let t={};t.route=e.dataset.route,t.id=e.dataset.id,await fetch("web.php",{headers:{Accept:"application/json"},method:"POST",body:JSON.stringify(t)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((e=>{Object.entries(e.element).forEach((([e,t])=>{document.getElementsByName(e).length>0&&(document.getElementsByName(e)[0].value=t)}))})).catch((e=>{console.log(e)}))})()}))}))};(()=>{let e=document.querySelectorAll(".add-product"),t=document.querySelector(".add-product-layout"),o=document.querySelector(".list-group"),r=document.querySelector(".totals");e.forEach((e=>{e.addEventListener("click",(n=>{(async()=>{let n={route:"addProduct"};n.price_id=e.dataset.price,n.table_id=e.dataset.table,await fetch("web.php",{headers:{Accept:"application/json"},method:"POST",body:JSON.stringify(n)}).then((e=>{if(!e.ok)throw e;return console.log(e.json()),e.json()})).then((e=>{let n=t.cloneNode(!0);n.querySelector(".delete-product").dataset.ticketid=e.newProduct.id,n.querySelector(".img-ticket").src=e.newProduct.imagen_url,n.querySelector(".categoria-prod").innerHTML=e.newProduct.categoria,n.querySelector(".nombre-prod").innerHTML=e.newProduct.nombre,n.querySelector(".precio-prod").innerHTML=e.newProduct.precio_base,n.classList.remove("d-none","add-product-layout"),r.querySelector(".iva-percent").innerHTML=e.total.valor_iva,r.querySelector(".base").innerHTML=e.total.total_base,r.querySelector(".iva").innerHTML=e.total.iva_total,r.querySelector(".total").innerHTML=e.total.total,o.querySelector(".no-products")?(o.querySelector(".no-products").classList.add("d-none"),o.appendChild(n)):o.appendChild(n),document.dispatchEvent(new CustomEvent("renderTicket"))})).catch((e=>{console.log(e)}))})()}))}))})(),e(),(()=>{let e=document.querySelectorAll(".pago-venta"),t=document.querySelector(".list-group"),o=document.querySelector(".totals");e.forEach((e=>{e.addEventListener("click",(r=>{console.log(e),(async()=>{let r={route:"pagoVenta"};r.metodo_pago=e.dataset.metodopago,r.table_id=e.dataset.table,await fetch("web.php",{headers:{Accept:"application/json"},method:"POST",body:JSON.stringify(r)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((e=>{let r=t.querySelectorAll("li:not(.add-product-layout)");t.querySelector(".no-products").classList.remove("d-none"),o.querySelector(".iva-percent").innerHTML="",o.querySelector(".base").innerHTML=0,o.querySelector(".iva").innerHTML=0,o.querySelector(".total").innerHTML=0,r.forEach((e=>{e.remove()}))})).catch((e=>{console.log(JSON.stringify(e))}))})()}))}))})(),(()=>{let e=document.querySelector(".admin-form"),t=document.querySelector(".create-form-button"),o=document.querySelector(".send-form-button"),r=document.querySelector(".create-layout"),n=document.querySelector("tbody");t&&t.addEventListener("click",(t=>{e.reset()})),o&&o.addEventListener("click",(t=>{t.preventDefault(),(async()=>{let t={},o=new FormData(e);o.append("route",e.dataset.route),o.forEach((function(e,o){t[o]=e})),await fetch("web.php",{headers:{Accept:"application/json"},method:"POST",body:JSON.stringify(t)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((e=>{if(""==e.id){let t=r.cloneNode(!0);t.classList.remove("d-none","create-layout"),t.dataset.element=e.newElement.id,t.querySelector(".delete-table-button").dataset.id=e.newElement.id,Object.entries(e.newElement).forEach((([e,o])=>{t.querySelector("."+e)&&(t.querySelector("."+e).innerHTML=o)})),n.appendChild(t),document.dispatchEvent(new CustomEvent("renderAdminTable"))}else{let t=document.querySelector("[data-element='"+e.id+"']");Object.entries(e.newElement).forEach((([e,o])=>{t.querySelector("."+e)&&(t.querySelector("."+e).innerHTML=o)})),document.dispatchEvent(new CustomEvent("renderAdminTable"))}})).catch((e=>{console.log(e)}))})()}))})(),t()})();