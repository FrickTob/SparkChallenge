interface TextStrings {
    searchPlaceholder: string;
    search: string;
    resources: string;
    contact: string;
    aboutUs: string;
    homeText: string;
    healthCare: string;
    work: string;
    family: string;
    locations: string;
}

class EnglishStrings implements TextStrings {
    searchPlaceholder = "Search for resources";
    search = "Search";
    resources = "Resources";
    contact = "Contact";
    aboutUs = "About Us";
    homeText = "Immigrant Resources Finder";
    healthCare = "Health Care";
    work = "Work";
    family = "Family";
    locations = "Grinnell, Tama, Brooklyn";
}
class SpanishStrings implements TextStrings {
    searchPlaceholder = "Buscar recursos";
    search = "Buscar";
    resources = "Recursos";
    contact = "Contacto";
    aboutUs = "Sobre Nosotros";
    homeText = "Buscador de Recursos para Inmigrantes";
    healthCare = "Cuidado de la Salud";
    work = "Trabajo";
    family = "Familia";
    locations = "Grinnell, Tama, Brooklyn";
}
class FrenchStrings implements TextStrings {
    searchPlaceholder = "Rechercher des ressources";
    search = "Chercher";
    resources = "Ressources";
    contact = "Contacter";
    aboutUs = "Nous";
    homeText = "Chercheur de Ressources pour Immigrants"
    healthCare = "Soins de Santé";
    work = "Travail";
    family = "Famille";
    locations = "Grinnell, Tama, Brooklyn";
}



export { EnglishStrings, SpanishStrings, FrenchStrings };
export type { TextStrings };
