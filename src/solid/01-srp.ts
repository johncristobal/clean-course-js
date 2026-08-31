(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        private adapterHttp: Object = {};

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }
    
    class MailerService {
        private email: string;

        constructor() {
            this.email = 'admin@example.com';
        }

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log('Enviando correo a los clientes', template );
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        private productService: ProductService;
        private mailerService: MailerService;

        constructor(productService: ProductService, mailerService: MailerService) {
            this.productService = productService;
            this.mailerService = mailerService;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            // console.log('Producto: ',{ id, name: 'OLED Tv' });
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailerService.sendEmail(['client1@example.com', 'client2@example.com'], 'to-clients');
        }
    
        // onAddToCart( productId: number ) {
        //     // Agregar al carrito de compras
        //     console.log('Agregando al carrito ', productId );
        // }
    
    }
    
    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailerService = new MailerService();

    const productBloc = new ProductBloc(
        productService,
        mailerService
    );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();