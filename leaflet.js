const map = L.map("map", {
  preferCanvas: true,
}).setView([38.293311757000026, 38.30632123100003], 13);

L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href=\"https://osm.org/copyright\">OpenStreetMap</a> contributors",
}).addTo(map);

function pickColor(status) {
  switch (status) {
    case "Hasarsız":
      return "#E5F9E0";
    case "Az Hasarlı":
      return "#397367";
    case "Orta Hasarlı":
      return "#EDAFB8";
    case "Ağır Hasarlı":
    case "Acil Yıktırılacak":
      return "#960200";
    case "Yıkık":
      return "#050505";
    default:
      return "#ffffff00";
  }
}

buildings.forEach(b => {
  if (b.coordinates != null) {
    let circle = L.circle([b.coordinates.latitude, b.coordinates.longitude], 1).addTo(map);
    circle.setStyle({color: pickColor(b.status)});
  }
});
