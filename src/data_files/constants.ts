import ogImageSrc from "@images/hero-imagen.png";

export const SITE = {
  title: "Oslop Telcom",
  tagline: "Alta calidad en servicios de aire acondicionado Refrigeración y Calefacción",
  description: "En Oslop Telcom brindamos servicios de aire acondicionado de calidad para satisfacer todas las necesidades de su proyecto. Comience a explorar y comuníquese con nuestro equipo de ventas para obtener calidad y confiabilidad superiores.",
  description_short: "Oslop Telcom ofrece los mejores servicios de aire acondicionado de calidad, para satisfacer todas las necesidades de su proyecto",
  url: "https://osloptelcom.com",
  author: "Oslop Telcom",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-ES",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Servicios de Aire Acondicionado`,
  description: "Ofrecemos los servicios de aire acondicionado de la mas alta calidad, contacte con nosotros para iniciar su proyecto de istalación de aire acondicionado o afines",
  image: ogImageSrc,
};
