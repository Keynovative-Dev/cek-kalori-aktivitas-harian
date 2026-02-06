function hitungKalori() {
  const aktivitas = document.getElementById("aktivitas").value;
  const durasi = parseInt(document.getElementById("durasi").value);
  let kaloriPerMenit;
  let totalKalori = 0;

if (aktivitas === "jalan") {kaloriPerMenit = 4;} 
else if (aktivitas === "lari") {kaloriPerMenit = 10;} 
else if (aktivitas === "sepeda") {kaloriPerMenit = 8;}

totalKalori = kaloriPerMenit * durasi;
if (durasi > 60 && aktivitas !== "jalan") {totalKalori += 50;}
  let rekomendasi = "";
if (totalKalori < 200) {rekomendasi = "Coba tambah durasi olahragamu ,SEMANGAT";} 
else if (totalKalori <= 400) {rekomendasi = "Cukup bagus! Pertahankan! SEMANGAT";}
else {rekomendasi = "Luar biasa! Kamu sangat aktif hari ini ";}

  document.getElementById("hasil").innerHTML = `
    <p>Aktivitas: <strong>${aktivitas}</strong></p>
    <p>Durasi: <strong>${durasi} menit</strong></p>
    <p>Kalori terbakar: <strong>${totalKalori} kalori</strong></p>
    <p>${rekomendasi}</p>
  `;
}