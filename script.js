// Collapse/Expand sezioni
document.querySelectorAll("section").forEach((section) => {
  const header = section.querySelector("div.d-flex");
  if (header) {
    const toggleBtn = header.querySelector("a.text-secondary");
    if (toggleBtn) {
      const content = section.querySelector(".row, .row.g-3, .row.g-4");
      if (content) {
        toggleBtn.addEventListener("click", function (e) {
          e.preventDefault();
          if (content.style.display === "none") {
            content.style.display = "";
            toggleBtn.textContent = "Nascondi sezione";
          } else {
            content.style.display = "none";
            toggleBtn.textContent = "Mostra sezione";
          }
        });
      }
    }
  }
});

// Conta viaggi
document.getElementById("countTripsBtn").addEventListener("click", function () {
  const visibleCards = Array.from(document.querySelectorAll(".card")).filter(
    (card) => card.offsetParent !== null
  );
  alert("Numero di viaggi presenti sulla pagina: " + visibleCards.length);
});

// Rimuovi tutte le card
document
  .getElementById("removeCardsBtn")
  .addEventListener("click", function () {
    document.querySelectorAll(".card").forEach((card) => card.remove());
  });

// Modale Contattaci
const contactModal = new bootstrap.Modal(
  document.getElementById("contactModal")
);
document.getElementById("contattaciBtn").addEventListener("click", function () {
  contactModal.show();
});

// (Facoltativo) Gestione invio form modale
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Messaggio inviato!");
  contactModal.hide();
});
