// 

/**
 * 
 * @param {*} name 
 * @param {*} hp 
 * @param {*} atk 
 * @param {*} defence 
 * @param {*} speed 
 */




// Không dùng Object literals nữa mà dùng "Hàm tạo" hay còn gọi là Bản thiết kế nhân vật

// Tạo hàm bắt đầu trận chiến
function Character(name, hp, atk, defence, speed) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defence = defence;
    this.speed = speed;
    this.attack = function (target) {
        const damage = Math.max(this.atk - target.defence);
        target.hp -= damage;
        console.log(`${this.name} đang tấn công ${target.name} với chỉ số tấn công là ${damage} và ${target.name} còn ${target.hp} máu.`);
    };
    this.isAlive = function () {
        return this.hp > 0;
    };
 }

 const tom = new Character('Tom', 1000, 120, 30, 10);
 const jerry = new Character('Jerry', 670, 90, 21, 20);


// ================ Object literals ======================
// const tom = {
//     name: 'Tom',
//     hp: 1000,
//     atk: 120,
//     defence: 30,
//     attack(target) {
//         const damage = Math.max(this.atk - target.defence);
//         target.hp -= damage;
//         console.log(`${this.name} đang tấn công ${target.name} với chỉ số tấn công là ${damage} và ${target.name} còn ${target.hp} máu.`);
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// }

// const jerry = {
//     name: 'Jerry',
//     hp: 670,
//     atk: 90,
//     defence: 21,
//     attack(target) {
//         const damage = Math.max(this.atk - target.defence);
//         target.hp -= damage;
//         console.log(`${this.name} đang tấn công ${target.name} với chỉ số tấn công là ${this.atk} và ${target.name} còn ${target.hp} máu.`);
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// }


// Cho Tom và Jerry phang nhau
// Đếm round


function battle(char1, char2) {
    let round = 1;

    while (tom.isAlive() && jerry.isAlive()) {
        // In ra số round hiện tại
        console.log(`Round: ${round}`);
        
        if (char1 >= char2) {
            battleRound(char1, char2);
        } else {
            battleRound(char2, char1);
        }

        // Tăng biến round lên mỗi lần lặp
        round++   
    }

    // Người chiến thắng cuối cùng với Logic kiểm tra char1 trước nếu điều kiện phương thức char1.isAlive() là true thì return char 1 và ngược lại (dùng toán tử 3 ngôi)
    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} wins!`)

    // Tạo hàm để không bị lặp phương thức đánh nhau & linh hoạt hơn ở vòng lặp While 
    function battleRound (attacker, defencer) {
        attacker.attack(defencer);
        if (defencer.isAlive()) defencer.attack(attacker);
    }
}


//  Gọi hàm bắt đầu trận chiến
battle(tom, jerry);