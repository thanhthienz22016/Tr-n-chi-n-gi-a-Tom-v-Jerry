const tom = {
    name: 'Tom',
    hp: 1000,
    atk: 120,
    defence: 30,
    attack(target) {
        const damage = Math.max(this.atk - target.defence);
        target.hp -= damage;
        console.log(`${this.name} đang tấn công ${target.name} với chỉ số tấn công là ${damage} và ${target.name} còn ${target.hp} máu.`);
    },
    isAlive() {
        return this.hp > 0;
    },
}

const jerry = {
    name: 'Jerry',
    hp: 670,
    atk: 90,
    defence: 21,
    attack(target) {
        const damage = Math.max(this.atk - target.defence);
        target.hp -= damage;
        console.log(`${this.name} đang tấn công ${target.name} với chỉ số tấn công là ${this.atk} và ${target.name} còn ${target.hp} máu.`);
    },
    isAlive() {
        return this.hp > 0;
    },
}


// Cho Tom và Jerry phang nhau
// Đếm round
let round = 1;

while (tom.isAlive() && jerry.isAlive()) {
    // In ra số round hiện tại
    console.log(`Round: ${round}`);
    
    if (round % 2 === 0) {
        tom.attack(jerry);
    } else {
        jerry.attack(tom);
    }

    // Tăng biến round lên mỗi lần lặp
    round++   
}

// Tìm ra người chiến thắng cuối cùng khi isAlive là false
if (tom.isAlive()) {
    console.log(`Người chiến thắng cuối cùng là ${tom.name}`);
} else {
    console.log(`Người chiến thắng cuối cùng là ${jerry.name}`);
}