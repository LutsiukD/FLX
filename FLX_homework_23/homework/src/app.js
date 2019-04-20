class User {
    constructor(name = '', totalPrice = 0, weekendDiscount = 0, nightDiscount = 0) {
        this.name = name;
        this.orderTotalPrice = totalPrice;
        this.weekendDiscount = weekendDiscount;
        this.nightDiscount = nightDiscount;
        this.bonus = 5;
    }

    setOrderTotalPrice(price) {
        this.orderTotalPrice = price;
    }

    getOrderTotalPrice() {
       return this.orderTotalPrice;
    }

    getWeekendDiscount() {
        return this.weekendDiscount;
    }

    getNightDiscount() {
        return this.nightDiscount;
    }

    getBonus() {
        return this.bonus;
    }

    makeOrder() {
        return `Price after discount and including bonuses is ${this.orderTotalPrice}`;
    } 
}

function getWeekendDiscount(user) {
    let date = new Date().getDay();
    if(date > 5) {
       let newPrice = user.getOrderTotalPrice() - user.getWeekendDiscount();
       user.setOrderTotalPrice(newPrice);
       return `You've got weekend discount of ${user.getWeekendDiscount()} uah.`;
    } else {
        return 'There is no weekend discount: today is not weekend day!';
    }  
}

function getDiscount(user) {
    let hours = new Date().getHours();
    if(hours >= 23 || hours < 6) {
        let newPrice = user.getOrderTotalPrice() - user.getNightDiscount();
        user.setOrderTotalPrice(newPrice);
        return `You've got night discount of ${user.getNightDiscount()} uah.`;
    } else {
        return 'There is no night discount: you can get discount from 23:00 to 6:00!';
    }  
}

function setBonus(user) {
    let bonus = parseInt(user.getOrderTotalPrice() / 100) * user.getBonus();
    let newPrice = user.getOrderTotalPrice() - bonus;
    user.setOrderTotalPrice(newPrice);
    return `You've got bonus discount of ${bonus} uah.`;
}

function getAllDiscounts(user) {
    return getDiscount(user) +
    getWeekendDiscount(user) +
    setBonus(user);
}


let user1 = new User('Anna', 1350, 10, 8);

// getWeekendDiscount(user1);
// getDiscount(user1);
// setBonus(user1);

getAllDiscounts(user1);
user1.makeOrder();