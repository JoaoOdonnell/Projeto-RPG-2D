window.player = new Player("João", 1, 100, 100, 100, 100, 0, 100, 10, 1);
window.enemy = new Enemy("Globin", 1, 100, 100, 10, 1);

setInterval(() => {
  window.player.draw();
  window.enemy.draw();
}, 1000 / 60);
