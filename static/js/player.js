class Player {
  constructor(name, level, hp, hpMax, mana, manaMax, exp, expMax, damage, delayAttack) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.hpMax = hpMax;
    this.mana = mana;
    this.manaMax = manaMax;
    this.exp = exp;
    this.exp = expMax;
    this.damage = damage;
    this.delayAttack = delayAttack;
    this.isAttacking = false;
  }

  attack(entity) {
    if (this.isAttacking) return;
    this.isAttacking = true;
    setTimeout(() => {
      entity.hp -= this.damage;
      console.log("enemy hp: ", entity.hp);
      this.isAttacking = false;
    }, this.delayAttack);
  }

  draw() {
    // name
    document.querySelector("#user-name").innerText = this.name;

    // level
    document.querySelector("#user-level").innerText = `Lv ${this.level}`;
    // fill
    document.querySelector(".user-panel .stats-bar-fill.hp").style.width = `${(this.hp / this.hpMax) * 100}%`;
    document.querySelector(".user-panel .stats-bar-fill.hp").innerText = `${this.hp}/${this.hpMax}`;
    // mana
    document.querySelector(".user-panel .stats-bar.mana").innerText = `${this.mana}/${this.manaMax}`;
    // exp
    document.querySelector(".user-panel .stats-bar.exp").innerText = `${this.exp}/${this.expMax}`;
  }
}
