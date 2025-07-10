/**
 * 
 * Health / HP: Máu
 * Attack power/ATK: Sức mạnh 
 * Defense: Phòng thủ
 * Speed: Tốc độ 
 * Counter Rate: Phản công 
 */
// Khởi tạo hàm tạo
function Character (name, hp, atk, defence, speed, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defence = defence;
    this.speed = speed;
    this.counterRate = counterRate;
    this.attack = function (target) {
        // tính damage và không âm
        const damage = Math.max(this.atk - target.defence, 0);
        // Tính toán máu của mục tiêu khi bị tấn công
        target.hp -= damage;

        console.log(`${this.name} tấn công ${target.name} với chỉ số tấn công ${this.atk} và ${target.name} còn ${target.hp} máu.`);

        // Xử lý target phản công
        if (target.isAlive() && Math.random() < target.counterRate) {
            const counterDamage = Math.max(target.atk - this.defence, 0);
            // Tính toán máu của mục tiêu khi bị tấn công
            this.hp -= counterDamage;

            console.log(`${target.name} phang lại ${this.name} với chỉ số tấn công ${target.atk} và ${this.name} còn ${this.hp} máu.`);
        }
    };
    this.isAlive = function () {
        return this.hp > 0;
    }
}

// Tạo nhân vật Tom
const tom = new Character ('Tom', 1000, 120, 80, 20, 0.7);
// Tạo nhân vật Jerry
const jerry = new Character ('Jerry', 760, 160, 70, 15, 0.8);

// Tạo hàm thực hiện trận đánh
function battle (char1, char2) {
    let round = 1;
    while (tom.isAlive() && jerry.isAlive()) {
        console.log(`Round: ${round}`);
        if (char1.speed >= char2.speed) {
            battleRound(char1, char2);
        } else {
            battleRound(char2, char1);
        }

        round++;
    }
        
    // Tạo hàm phương thức tấn công
    function battleRound (attacker, defender) {
        attacker.attack(defender);

        // Kiểm tra xem defender còn sống thì đánh lại
        if (defender.isAlive() && attacker.isAlive()) {
            defender.attack(attacker);
        }
    }

    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} wins!`);
    return winner;
}



//Gọi hàm bắt đầu thực hiện trận đánh
battle (tom, jerry);