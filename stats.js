const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const statusGroup = Object.entries(groupBy(buildings, "status"));

const groupSize = statusGroup.length;

for (const [key, value] of statusGroup) {
  const statsDom = document.querySelector("#stats");
  statsDom.style.gridTemplateColumns = `repeat(${groupSize}, 1fr)`;
  statsDom.innerHTML += `<span>${key}: ${value.length}</span>`;
}
