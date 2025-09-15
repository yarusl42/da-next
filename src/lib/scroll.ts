// Smooth scroll to the contact section if present on the page,
// otherwise navigate to the home page with #contact hash.
export const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.href = "/#contact";
  }
};
