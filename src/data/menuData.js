export const menuData = [
  {
    id: "cat_cafe",
    name: "CAFÉ",
    description: "Café de especialidad.",
    image: "/cafe.png",
    products: [
      { id: "c_1", name: "Espresso", description: "Intenso y puro.", price: "S/ 5.00", image: "/cafeespreso.png" },
      { id: "c_2", name: "Americano", description: "Espresso diluido en agua caliente.", price: "S/ 8.00", image: "/cafeamericano.png" },
      { id: "c_3", name: "Latte", description: "Espresso con leche texturizada.", price: "S/ 10.00", image: "/cafelatte.png" },
      { id: "c_4", name: "Latte Saborizado", description: "Vainilla | Caramel | Avellana", price: "S/ 11.00", image: "/cafelattesaborizado.png" },
      { id: "c_5", name: "Cappuccino", description: "Espresso con leche y espuma cremosa.", price: "S/ 10.00", image: "/cafecappuccino.png" },
      { id: "c_6", name: "Mocaccino", description: "Latte con salsa de chocolate.", price: "S/ 10.00", image: "/cafemocaccino.png" },
      { id: "c_7", name: "Hot Chocolate", description: "Chocolate caliente premium.", price: "S/ 11.00", image: "/cafehotchocolate.png" }
    ]
  },
  {
    id: "cat_frio",
    name: "FRIO",
    description: "Bebidas refrescantes.",
    image: "/frio.png",
    products: [
      { id: "f_1", name: "Iced Americano", description: "Americano con hielo.", price: "S/ 10.00", image: "/cafeicedamericano.png" },
      { id: "f_2", name: "Orange Coffee", description: "Espresso con jugo de naranja.", price: "S/ 11.00", image: "/cafeorangecoffee.png" },
      { id: "f_3", name: "Iced Latte", description: "Latte servido frío.", price: "S/ 11.00", image: "/cafeicedlatte.png" },
      { id: "f_4", name: "Vainilla Latte", description: "Iced Latte con esencia de vainilla.", price: "S/ 12.00", image: "/cafevainillalatte.png" },
      { id: "f_5", name: "Caramel Latte", description: "Iced Latte con salsa de caramelo.", price: "S/ 12.00", image: "/cafecaramellatte.png" },
      { id: "f_6", name: "Avellana Latte", description: "Iced Latte con esencia de avellana.", price: "S/ 12.00", image: "/cafeavellanalatte.png" }
    ]
  },
  {
    id: "cat_infusiones",
    name: "INFUSIONES",
    description: "Tés y mezclas.",
    image: "/infusiones.png",
    products: [
      { id: "i_1", name: "Flor de Cerezo", description: "Infusión floral y ligeramente dulce. Refrescante y delicada.", price: "S/ 8.00", image: "/flordecerezo.png" },
      { id: "i_2", name: "Durazno & Vainilla & Jengibre", description: "Dulce, especiada y cálida, con final fresco.", price: "S/ 8.00", image: "/durazno&vainilla&jengibre.png" },
      { id: "i_3", name: "Maracuyá & Menta", description: "Infusión tropical, cítrica y vibrante.", price: "S/ 8.00", image: "/maracuya&menta.png" },
      { id: "i_4", name: "Chai Canela de Ceilán", description: "Té de Ceilán con especias chai y toque de canela.", price: "S/ 8.00", image: "/chaicaneladeceilan.png" }
    ]
  },
  {
    id: "cat_frappe",
    name: "FRAPPE",
    description: "Batidos helados.",
    image: "/frappe.png",
    products: [
      { id: "fr_1", name: "Coffee Frappe", description: "Clásico sabor a café.", price: "S/ 14.00", image: "/coffeefrappe.png" },
      { id: "fr_2", name: "Oreo Frappe", description: "Con galletas Oreo.", price: "S/ 14.00", image: "/oreofrappe.png" },
      { id: "fr_3", name: "Fresa Frappe", description: "Sabor a fresa.", price: "S/ 14.00", image: "/fresafrappe.png" },
      { id: "fr_4", name: "Vainilla Frappe", description: "Clásica vainilla.", price: "S/ 14.00", image: "/vainillafrappe.png" },
      { id: "fr_5", name: "Caramel Frappe", description: "Con salsa de caramelo.", price: "S/ 14.00", image: "/caramelfrappe.png" },
      { id: "fr_6", name: "Avellana Frappe", description: "Con esencia de avellana.", price: "S/ 14.00", image: "/avellanafrappe.png" }
    ]
  },
  {
    id: "cat_signature",
    name: "SIGNATURE",
    description: "Bebidas exclusivas.",
    image: "/signature.png",
    products: [
      { id: "sig_1", name: "Golden Mango Coco", description: "Mango + Leche de coco + Toque tropical.", price: "S/ 15.00", image: "/goldenmangococo.png" },
      { id: "sig_2", name: "Passion Sunset", description: "Maracuyá + Fresas + Matices cítricos.", price: "S/ 13.00", image: "/passionsunset.png" },
      { id: "sig_3", name: "Mango Splash", description: "Mango + Maracuyá + Explosión tropical.", price: "S/ 13.00", image: "/mangosplash.png" }
    ]
  },
  {
    id: "cat_frozen",
    name: "FROZEN",
    description: "Bebidas heladas.",
    image: "/frozen.png",
    products: [
      { id: "fz_1", name: "Fresa", description: "Frozen de fresa.", price: "S/ 12.00", image: "/frozenfresa.png" },
      { id: "fz_2", name: "Mango", description: "Frozen de mango.", price: "S/ 12.00", image: "/frozen.png" },
      { id: "fz_3", name: "Piña", description: "Frozen de piña.", price: "S/ 12.00", image: "/frozen.png" },
      { id: "fz_4", name: "Maracuyá", description: "Frozen de maracuyá.", price: "S/ 12.00", image: "/frozenmaracuya.png" },
      { id: "fz_5", name: "Limón", description: "Frozen de limón.", price: "S/ 12.00", image: "/frozenlimon.png" },
      { id: "fz_6", name: "Lúcuma", description: "Frozen de lúcuma.", price: "S/ 12.00", image: "/frozenlucuma.png" }
    ]
  },
  {
    id: "cat_batido",
    name: "BATIDO",
    description: "Batidos de fruta.",
    image: "/batido.png",
    products: [
      { id: "bt_1", name: "Fresa", description: "Batido cremoso de fresa.", price: "S/ 14.00", image: "/batidofresa.png" },
      { id: "bt_2", name: "Mango", description: "Batido cremoso de mango.", price: "S/ 14.00", image: "/batidomango.png" },
      { id: "bt_3", name: "Lúcuma", description: "Batido cremoso de lúcuma.", price: "S/ 14.00", image: "/batido.png" }
    ]
  },
  {
    id: "cat_refrescante",
    name: "REFRESCANTE",
    description: "Limonadas.",
    image: "/refrescante.png",
    products: [
      { id: "rf_1", name: "Limonada Clásica", description: "Refrescante limón.", price: "S/ 9.00", image: "/limonadaclásica.png" },
      { id: "rf_2", name: "Limonada de Hierbaluisa", description: "Con toque de hierbaluisa.", price: "S/ 10.00", image: "/limonadadehierbaluisa.png" },
      { id: "rf_3", name: "Limonada de Fresa", description: "Con fresas frescas.", price: "S/ 10.00", image: "/limonadadefresa.png" },
      { id: "rf_4", name: "Agua San Luis", description: "Botella personal.", price: "S/ 4.00", image: "/aguapersonal.png" },
      { id: "rf_5", name: "Gaseosas", description: "Variedad de gaseosas.", price: "S/ 5.00", image: "/gaseosas.png" }
    ]
  },
  {
    id: "cat_hamburguesas",
    name: "HAMBURGUESAS",
    description: "150gr de pura carne.",
    image: "/hamburguesas.png",
    products: [
      { id: "hb_1", name: "The Classic", description: "Con queso cheddar, lechuga, tomate y papas fritas.", price: "S/ 20.00", image: "/hamburguesastheclassic.png" },
      { id: "hb_2", name: "Tocino BBQ", description: "Con tocino crocante, salsa BBQ, queso cheddar y papas fritas.", price: "S/ 24.00", image: "/hambuerguesastocinobbq.png" },
      { id: "hb_3", name: "Cheddar Bacon Melt", description: "Con doble tocino, doble queso cheddar y papas fritas.", price: "S/ 24.00", image: "/hamburguesascheddarbaconmelt.png" },
      { id: "hb_4", name: "The Royal", description: "Con huevo frito, queso cheddar, tomate, lechuga y papas fritas.", price: "S/ 22.00", image: "/hamburguesastheroyal.png" }
    ]
  },
  {
    id: "cat_salchipapas",
    name: "SALCHIPAPAS",
    description: "100% Frankfurter.",
    image: "/salchipapas.png",
    products: [
      { id: "sp_1", name: "Clásica", description: "Con salchicha frankfurter y papas fritas.", price: "S/ 18.00", image: "/salchipapaclásica.png" },
      { id: "sp_2", name: "Achorada", description: "Con salchicha frankfurter, chorizo y papas fritas.", price: "S/ 20.00", image: "/salchipapasachorada.png" },
      { id: "sp_3", name: "A lo Pobre", description: "Con plátano frito, huevo frito, salchicha frankfurter y papas fritas.", price: "S/ 20.00", image: "/salchipapaalopobre.png" },
      { id: "sp_4", name: "Mixta", description: "Con pollo a la plancha, salchicha frankfurter y papas fritas.", price: "S/ 23.00", image: "/salchipapamixta.png" }
    ]
  },
  {
    id: "cat_plancha",
    name: "A LA PLANCHA",
    description: "Sabor superior.",
    image: "/alaplancha.png",
    products: [
      { id: "pl_1", name: "Hamburguesa al Grill", description: "Hamburguesa casera con papas fritas, huevo y ensalada.", price: "S/ 20.00", image: "/hamburguesaalgrill.png" },
      { id: "pl_2", name: "Pechuga Grillada", description: "Jugosa pechuga de pollo al grill con papas fritas y ensalada.", price: "S/ 20.00", image: "/pechugagrillada.png" }
    ]
  },
  {
    id: "cat_ensaladas",
    name: "ENSALADAS",
    description: "Frescura 100%.",
    image: "/ensaladas.png",
    products: [
      { id: "en_1", name: "César Artesanal", description: "Lechuga, crutones, queso, pollo a la plancha, aderezo César.", price: "S/ 18.00", image: "/césarartesanal.png" },
      { id: "en_2", name: "Tropical", description: "Lechuga, tomate, durazno, nueces, pollo.", price: "S/ 18.00", image: "/tropical.png" },
      { id: "en_3", name: "Andina Fresca", description: "Lechuga, tomate, choclo desgranado, queso fresco.", price: "S/ 15.00", image: "/andinafresca.png" }
    ]
  }
];
