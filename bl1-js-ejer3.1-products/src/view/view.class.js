const divMessagesUI = document.getElementById('messages');

class View{
    renderNewProduct(product) {
        const tbody = document.getElementById('almacen').getElementsByTagName('tbody')[0]
        const tr = document.createElement('tr')
        tr.innerHTML = ` <td> ${product.id} </td> 
                         <td> ${product.name} </td> 
                         <td> ${product.units} </td> 
                         <td> ${product.price} </td> 
                         <td> ${product.productImport().toFixed(2)} €</td>`

        
        tbody.appendChild(tr)
    }

    renderEditProduct(product) {
        const cant = document.getElementById('almacen').getElementsByTagName('tbody')[0].childElementCount
        const div = document.getElementById('almacen').getElementsByTagName('tbody')[0]
        for (let index = 0; index < cant; index++) {
            let trPrimero = div.children[index]
            if (trPrimero .firstElementChild.textContent == product.id) {
                let trSegundo = document.createElement('tr')     
                trSegundo.innerHTML = ` <td> ${product.id} </td> 
                         <td> ${product.name} </td> 
                         <td> ${product.units} </td> 
                         <td> ${product.price} </td> 
                         <td> ${product.productImport().toFixed(2)} € </td>`    
                div.replaceChild(trSegundo,trPrimero)
            }
            
        }
                
    }

    renderDelProduct(id) {
        const cant = document.getElementById('almacen').getElementsByTagName('tbody')[0].childElementCount
        const div = document.getElementById('almacen').getElementsByTagName('tbody')[0]
        for (let index = 0; index < cant; index++) {
            let product = div.children[index]
            if (product.firstElementChild.textContent == id) {
                div.removeChild(product)
            }
            
        }
    }

    renderStoreImport(total) {
        const tfoot = document.getElementById('total')
        tfoot.textContent = total + '€'
    }

    renderErrorMessage(message) {
        const newMessageDiv = document.createElement('div')
        newMessageDiv.className = "col-sm-12 alert alert-danger alert-dismissible fade show"
        newMessageDiv.innerHTML = `
            <span><strong>ATENCIÓN: </strong>${message}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="this.parentElement.remove()"></button>`
        
        divMessagesUI.appendChild(newMessageDiv)
    }
}

module.exports = View;
