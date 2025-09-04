class Enemy {
  constructor(name, level, hp, hpMax, damage, delayAttack) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.hpMax = hpMax;
    this.damage = damage;
    this.delayAttack = delayAttack;
  }

  draw() {
    // name
    document.querySelector("#enemy-name").innerText = this.name;
    // level
    document.querySelector("#enemy-level").innerText = `Lv ${this.level}`;
    // fill
    document.querySelector(".enemy-panel .stats-bar-fill.hp").style.width = `${(this.hp / this.hpMax) * 100}%`;
    document.querySelector(".enemy-panel .stats-bar-fill.hp").innerText = `${this.hp}/${this.hpMax}`;
  }
}
