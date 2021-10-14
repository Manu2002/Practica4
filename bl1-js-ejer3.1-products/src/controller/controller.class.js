const View = require('../view/view.class')
const Store = require('../model/store.class')

class Controller {
    constructor() {
        this.store = new Store(1)
        this.view = new View()
    }

    init() {
        this.storeView.init();			// inicializa la vista, si es necesario
    }

    addProductToStore(formData) {
        // Cambiamos los datos en el modelo
        const newProd = this.store.addProduct(formData);
        const total = this.store.totalImport().toFixed(2);	// dice al modelo que añada el producto
        if (newProd) {
            this.view.renderNewProduct(newProd);
            this.view.renderStoreImport(total);
            		// si lo ha hecho le dice a la vista que lo pinte
        } else {
            this.view.renderErrorMessage('error', 'Error al añadir el producto');
        }
        // Si todo ha ido bien mostramos los datos en
        // la página y si no mostramos el error
    }

    deleteProductFromStore(prodId) {
        var find = this.store.findProduct(Number(prodId))
        if (find) {
            const cond1 = prompt('Esta seguro de que desea eliminarlo (s/n)');
            if (cond1 == 's') {
                if (find.units > 0) {
                    const cond2 = prompt('Esta seguro de que desea eliminar las unidades del producto (s/n)');
                        if (cond2 == 's') {
                            this.store.delProduct(prodId);
                            this.view.renderDelProduct;
                        }
                } else {
                    this.store.delProduct(prodId);
                    this.view.renderDelProduct;
                }
            }
        }
        
        // No olvides pedir confirmación y, si el producto
        // tiene unidades pedir una segunda confirmación
    }

    changeProductInStore(formData) {
    }

    changeProductStock(formData) {
        const newProd = this.store.changeProductUnits(formData);
        const total = this.store.totalImport().toFixed(2);	// dice al modelo que añada el producto
        if (newProd) {
            this.view.renderEditProduct(newProd);
            this.view.renderStoreImport(total);		// si lo ha hecho le dice a la vista que lo pinte
        } else {
            this.view.renderErrorMessage('error', 'Error al añadir el producto');
        }
    }
}

module.exports = Controller
