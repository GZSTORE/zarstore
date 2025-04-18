// script.js

document.addEventListener("DOMContentLoaded", () => { // Contoh interaksi tombol const buttons = document.querySelectorAll(".btn-red");

buttons.forEach(button => { button.addEventListener("click", () => { console.log(Tombol diklik: ${button.textContent}); }); });

// QR Code alert (bisa diganti interaksi lain sesuai kebutuhan) const qrisImage = document.querySelector(".qris img"); if (qrisImage) { qrisImage.addEventListener("click", () => { alert("Silakan scan QR Code untuk melakukan pembayaran."); }); } });

