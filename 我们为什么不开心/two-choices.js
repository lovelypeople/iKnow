// Copyright 2020 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.
// Created by Frank Lin on 2020.06.23

// 假设每年去掉花费的 30%，剩余 70% 存款
const SAVE_PERCENT = 0.7;

// 假设每年的年化收益率为 7%
const INVESTMENT_YOY = 1.07;

// 选择 A
function planA() {
  const firstYear = 10000;
  let total = 0;
  let salary = 0;
  let save = 0;

  for (let i = 1; i <= (77 - 22); i++) {
    if (i <= 15) { // 工作前15年薪酬增长
      salary = Math.min(firstYear * Math.pow(1.2, i), 30000);
    } else {
      salary = 0;
    }

    total += salary * 12;

    save *= INVESTMENT_YOY;

    if (i <= 15) { // 前15年储蓄增长
      save += salary * 12 * SAVE_PERCENT;
    } else { // 之后开始消耗储蓄，每年消耗的为其工资时候的顶峰时的开支（考虑到从俭入奢易，从奢入俭难）
      save -= 30000 * 12 * (1 - SAVE_PERCENT);
    }
  }

  console.log(`方案a: 一辈子赚了 ${Math.floor(total / 10000)} 万，储蓄为 ${Math.floor(save / 10000)} 万`);
}

// 选择 B
function planB() {
  const firstYear = 5000;
  let total = 0;
  let salary = 0;
  let save = 0;

  for (let i = 1; i <= (77 - 22); i++) {
    if (i <= 65 - 22) { // 22岁 ～ 65岁薪酬增长
      salary = Math.min(firstYear * Math.pow(1.2, Math.floor(i / 5)), 20000);
    }

    total += salary * 12;

    save *= INVESTMENT_YOY;
    save += salary * 12 * SAVE_PERCENT;
  }

  console.log(`方案b: 一辈子赚了 ${Math.floor(total / 10000)} 万，储蓄为 ${Math.floor(save / 10000)} 万`);
}

planA();
planB();
