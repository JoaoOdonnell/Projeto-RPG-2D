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
      this.isAttacking = false;
    }, this.delayAttack * 1000);
  }

  draw() {
    // mana
    document.querySelector(".user-panel .stats-bar.mana").innerText = `${this.mana}/${this.manaMax}`;
    // exp
    document.querySelector(".user-panel .stats-bar.exp").innerText = `${this.exp}/${this.expMax}`;
  }

  checkLevelUp() {
    if (this.exp >= this.expMax) {
      this.level++;
      this.exp = 0;
      this.expMax = this.expMax * 2;
    }
  }
}
