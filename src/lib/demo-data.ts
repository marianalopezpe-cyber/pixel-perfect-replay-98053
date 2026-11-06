// Datos de ejemplo para los módulos de MASConectados (Fase 2, sin backend).
// Toda la información es ilustrativa y debe marcarse como "Ejemplo" en la UI.

export const ZONES = [
  "Medellín", "Envigado", "Sabaneta", "Itagüí", "Bello",
  "La Estrella", "Caldas", "Copacabana", "Girardota", "Barbosa",
];

export const CATEGORIES = [
  "Veterinaria", "Paseadores", "Cuidadores", "Hospedaje",
  "Guardería", "Peluquería", "Entrenamiento",
];

export type Service = {
  name: string;
  provider: string;
  category: string;
  zone: string;
  price: string;
  rating: number;
};

export const SERVICES: Service[] = [
  { name: "Consulta general veterinaria", provider: "Clínica Patitas", category: "Veterinaria", zone: "Medellín", price: "$70.000", rating: 4.8 },
  { name: "Vacunación anual", provider: "Centro Veterinario Aburrá", category: "Veterinaria", zone: "Sabaneta", price: "$55.000", rating: 4.9 },
  { name: "Paseo grupal 1 hora", provider: "Valentina R.", category: "Paseadores", zone: "Medellín", price: "$25.000", rating: 4.9 },
  { name: "Paseo individual 45 min", provider: "Andrés M.", category: "Paseadores", zone: "Envigado", price: "$30.000", rating: 4.8 },
  { name: "Cuidado en casa por día", provider: "Camila T.", category: "Cuidadores", zone: "Medellín", price: "$50.000", rating: 5.0 },
  { name: "Cuidado nocturno", provider: "Santiago G.", category: "Cuidadores", zone: "Bello", price: "$35.000", rating: 4.7 },
  { name: "Hospedaje en hogar", provider: "Hogar Peludo", category: "Hospedaje", zone: "Envigado", price: "$60.000 / noche", rating: 4.8 },
  { name: "Guardería diurna", provider: "Mundo Mascota", category: "Guardería", zone: "Itagüí", price: "$40.000 / día", rating: 4.6 },
  { name: "Baño y corte completo", provider: "Spa Canino La 10", category: "Peluquería", zone: "Medellín", price: "$65.000", rating: 4.7 },
  { name: "Corte de uñas y limpieza", provider: "Spa Canino La 10", category: "Peluquería", zone: "Medellín", price: "$25.000", rating: 4.7 },
  { name: "Entrenamiento básico 4 sesiones", provider: "Escuela Canina Aburrá", category: "Entrenamiento", zone: "La Estrella", price: "$280.000", rating: 4.9 },
  { name: "Corrección de conducta", provider: "Escuela Canina Aburrá", category: "Entrenamiento", zone: "La Estrella", price: "$350.000", rating: 4.8 },
];

export type Sitter = {
  name: string;
  zone: string;
  services: string[];
  price: string;
  rating: number;
  reviews: number;
  experience: string;
  photo: boolean;
};

export const SITTERS: Sitter[] = [
  { name: "Valentina R.", zone: "Laureles, Medellín", services: ["Paseos", "Cuidado en casa"], price: "Desde $25.000", rating: 4.9, reviews: 87, experience: "4 años de experiencia", photo: true },
  { name: "Andrés M.", zone: "Envigado", services: ["Hospedaje", "Paseos"], price: "Desde $60.000 / noche", rating: 4.8, reviews: 64, experience: "3 años de experiencia", photo: false },
  { name: "Camila T.", zone: "El Poblado, Medellín", services: ["Guardería diurna"], price: "Desde $40.000 / día", rating: 5.0, reviews: 112, experience: "5 años de experiencia", photo: false },
  { name: "Santiago G.", zone: "Bello", services: ["Cuidado nocturno", "Paseos"], price: "Desde $35.000", rating: 4.7, reviews: 41, experience: "2 años de experiencia", photo: false },
  { name: "Daniela P.", zone: "Sabaneta", services: ["Cuidado en casa", "Guardería"], price: "Desde $45.000", rating: 4.9, reviews: 58, experience: "3 años de experiencia", photo: false },
  { name: "Juan Camilo V.", zone: "Itagüí", services: ["Paseos", "Entrenamiento básico"], price: "Desde $28.000", rating: 4.6, reviews: 33, experience: "2 años de experiencia", photo: false },
  { name: "María Fernanda L.", zone: "La Estrella", services: ["Hospedaje", "Cuidado en casa"], price: "Desde $55.000 / noche", rating: 4.8, reviews: 72, experience: "6 años de experiencia", photo: false },
  { name: "Esteban H.", zone: "Copacabana", services: ["Paseos"], price: "Desde $22.000", rating: 4.7, reviews: 29, experience: "1 año de experiencia", photo: false },
];

export type Clinic = {
  name: string;
  zone: string;
  tags: string[];
  hours: string;
  phone: string;
  emergency: boolean;
  rating: number;
};

export const CLINICS: Clinic[] = [
  { name: "Clínica Patitas", zone: "Belén, Medellín", tags: ["Medicina general", "Vacunación", "Odontología"], hours: "Lun–Sáb 8:00–19:00", phone: "(604) 444 20 10", emergency: false, rating: 4.8 },
  { name: "Centro Veterinario Aburrá", zone: "Sabaneta", tags: ["Cirugía", "Urgencias 24h", "Imagenología"], hours: "Todos los días, 24 h", phone: "(604) 288 45 67", emergency: true, rating: 4.9 },
  { name: "Veterinaria San Marcos", zone: "Envigado", tags: ["Medicina general", "Dermatología"], hours: "Lun–Vie 9:00–18:00", phone: "(604) 333 12 90", emergency: false, rating: 4.7 },
  { name: "Clínica Animal Care", zone: "El Poblado, Medellín", tags: ["Especialistas", "Laboratorio", "Urgencias 24h"], hours: "Todos los días, 24 h", phone: "(604) 311 78 45", emergency: true, rating: 4.9 },
  { name: "Veterinaria El Vergel", zone: "Itagüí", tags: ["Medicina general", "Vacunación"], hours: "Lun–Sáb 8:30–18:30", phone: "(604) 372 55 11", emergency: false, rating: 4.6 },
  { name: "Hospital Veterinario del Norte", zone: "Bello", tags: ["Cirugía", "Hospitalización"], hours: "Lun–Dom 7:00–21:00", phone: "(604) 451 90 23", emergency: false, rating: 4.7 },
];

export type Product = {
  name: string;
  cat: string;
  price: number;
  oldPrice?: number;
  brand: string;
};

export const PRODUCT_CATS = ["Alimentos", "Juguetes", "Camas", "Higiene", "Snacks", "Accesorios"];

export const PRODUCTS: Product[] = [
  { name: "Alimento natural adulto 3 kg", cat: "Alimentos", price: 89900, brand: "NutriPet" },
  { name: "Alimento cachorro 2 kg", cat: "Alimentos", price: 72500, brand: "NutriPet" },
  { name: "Cama ortopédica mediana", cat: "Camas", price: 149000, oldPrice: 189000, brand: "DescansoPet" },
  { name: "Kit de juguetes interactivos", cat: "Juguetes", price: 45500, brand: "PlayDog" },
  { name: "Snacks dentales x 20", cat: "Snacks", price: 28900, brand: "DentalCan" },
  { name: "Shampoo hipoalergénico 500 ml", cat: "Higiene", price: 34000, brand: "PelajeSano" },
  { name: "Correa retráctil 5 m", cat: "Accesorios", price: 52000, brand: "PaseoSeguro" },
  { name: "Pelota resistente con sonido", cat: "Juguetes", price: 19800, brand: "PlayDog" },
  { name: "Arena aglomerante gatos 10 kg", cat: "Higiene", price: 46700, brand: "GatoLimpio" },
  { name: "Arnés acolchado ajustable", cat: "Accesorios", price: 58300, oldPrice: 72000, brand: "PaseoSeguro" },
  { name: "Snacks de pollo deshidratado", cat: "Snacks", price: 21500, brand: "NaturalBites" },
  { name: "Cama cueva para gatos", cat: "Camas", price: 98000, brand: "DescansoPet" },
];

export type AdoptablePet = {
  name: string;
  species: "Perro" | "Gato" | "Gata";
  breed: string;
  age: string;
  sex: string;
  zone: string;
  foundation: string;
  health: string[];
  photo: boolean;
};

export const PETS: AdoptablePet[] = [
  { name: "Toby", species: "Perro", breed: "Mestizo mediano", age: "1 año", sex: "Macho", zone: "Bello", foundation: "Fundación Huellas", health: ["Vacunado", "Esterilizado", "Desparasitado"], photo: true },
  { name: "Luna", species: "Gata", breed: "Criolla atigrada", age: "8 meses", sex: "Hembra", zone: "Envigado", foundation: "Gatos del Valle", health: ["Vacunada", "Desparasitada"], photo: false },
  { name: "Rocky", species: "Perro", breed: "Criollo grande", age: "3 años", sex: "Macho", zone: "Medellín", foundation: "Refugio San Francisco", health: ["Vacunado", "Esterilizado"], photo: false },
  { name: "Mía", species: "Gata", breed: "Criolla blanca", age: "2 años", sex: "Hembra", zone: "Sabaneta", foundation: "Gatos del Valle", health: ["Vacunada", "Esterilizada", "Desparasitada"], photo: false },
  { name: "Coco", species: "Perro", breed: "Mestizo pequeño", age: "6 meses", sex: "Hembra", zone: "Itagüí", foundation: "Fundación Huellas", health: ["Vacunada", "Desparasitada"], photo: false },
  { name: "Simba", species: "Gato", breed: "Criollo naranja", age: "1 año", sex: "Macho", zone: "La Estrella", foundation: "Refugio San Francisco", health: ["Vacunado", "Esterilizado"], photo: false },
];

export const formatCOP = (n: number) => "$" + n.toLocaleString("es-CO");
