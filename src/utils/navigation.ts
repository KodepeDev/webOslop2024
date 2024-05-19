// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  // { name: "Sobre Nosotros", url: "/products" },
  { name: "Sobre Nosotros", url: "/about" },
  { name: "Servicios", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      // { name: "Documentacion", url: "/welcome-to-docs/" },
      { name: "Inicio", url: "/" },
      { name: "Servicios", url: "/services" },
      { name: "Aire Acondicionado", url: "/services" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Sobre Nosotros", url: "/about" },
      { name: "Blog", url: "#" },
      { name: "Contacto", url: "/contact" },
      { name: "Clientes", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100047636532038",
  x: "#",
  whatsapp: "wa.link/tigzud",
  instagram: "#",
  tiktok: "https://www.tiktok.com/@osloptelcom?is_from_webapp=1&sender_device=pc",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};