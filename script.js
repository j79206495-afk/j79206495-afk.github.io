// Creates a contact file that can be saved to the phone's Contacts app.
const saveButton = document.getElementById("save");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

saveButton.addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Pacaldo;Maybelle Serna;;;",
    "FN:Arki. Maybelle Serna Pacaldo",
    "TITLE:Architect",
    "TEL;TYPE=CELL:+639951807215",
    "EMAIL:Maypacaldo13@gamail.com",
    "URL:https://www.facebook.com/share/1Va4cUzUYh/",
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Maybelle-Pacaldo.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Contact file created. Open it to save the contact.");
});
