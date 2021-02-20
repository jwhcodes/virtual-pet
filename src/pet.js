
//class version

class Pet {
    constructor(name){
        this.name = name;
        this.age = 0;
        this. hunger = 0;
        this.fitness = 10;
        this.children = [];
        this.owners = [];
        this.babyMachine = 0;
    };

        get isAlive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        };


    adoptChild(child){
        if (child){
            child = new Pet(child);
            this.children.push(child); 
        } else{
            throw new Error('no pet selected.')
        };
    };


    growUp(){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive');
            }
        this.age += 1;
        this.hunger < 10? this.hunger += 1 : this.hunger = 10;
        this.fitness > 3? this.fitness -= 3 : this.fitness = 0;


        // baby maker
        if(this.age > 3 && this.fitness > 3 && this.hunger < 7 && this.children.length < 5){
            this.babyMachine += 1;
        };
        if(this.babyMachine > 3){
            this.adoptChild(`${this.name}'s baba`);
            this.babyMachine = 0;
            return `${this.name} gave birth!`;
        };
    };

    feed(){
        const MIN_HUNGER = 0;
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive');
        }
        this.hunger>=1? this.hunger -=1 : this.hunger = MIN_HUNGER;
    };

    walk(){
        const MAX_FITNESS = 10;
        if(!this.isAlive){
            throw new Error('Your Pet is no longer alive');
        }
        this.fitness<6? this.fitness += 4 : this.fitness = MAX_FITNESS;
    };

    checkup(){
        const allGood = 'I am all good!';
        const hungry = 'I am hungry';
        const walk = 'I need a walk';
        const dead = 'your pet is dead :('

        if (!this.isAlive) {
            return dead;
        }

        if(this.fitness<=3 && this.hunger>5){
            return `${hungry} AND ${walk}!`;
        }else if(this.fitness<=3){
            return walk;
        }
        if(this.hunger>5){
            return hungry;
        } else {
            return allGood;
        };
    };

    nameChild(name){
        this.name = name;
    };

};






// prototype version 


// function Pet(name){
//     this.name = name;
//     this.age = 0;
//     this.hunger = 0;
//     this.fitness = 10;

// };


//     Pet.prototype = {
//         get isAlive() {
//             return this.age < 30 && this.hunger < 10 && this.fitness > 0;
//         }
//   };


//     Pet.prototype.growUp = function(){
//         if (!this.isAlive){
//             throw new Error('Your pet is noonger alive');
//         }
//         this.age += 1;
//         this.hunger < 10? this.hunger += 1 : this.hunger = 10;
//         this.fitness > 3? this.fitness -= 3 : this.fitness = 0;
//         };
    
//     Pet.prototype.walk = function(){
//         const MAX_FITNESS = 10;
//         if(!this.isAlive){
//             throw new Error('Your Pet is no longer alive');
//         }
//         this.fitness<6? this.fitness += 4 : this.fitness = MAX_FITNESS;
//     };

//     Pet.prototype.feed = function(){
//         const MIN_HUNGER = 0;
//         if (!this.isAlive){
//             throw new Error('Your pet is noonger alive');
//         }
//         this.hunger>=1? this.hunger -=1 : this.hunger = MIN_HUNGER;
        
//     };

//     Pet.prototype.checkup = function(){

//         const allGood = 'I am all good!';
//         const hungry = 'I am hungry';
//         const walk = 'I need a walk';
//         const dead = 'your pet is dead :('

//         if (!this.isAlive) {
//             return dead;
//         }

//         if(this.fitness<=3 && this.hunger>5){
//             return `${hungry} AND ${walk}!`;
//         }else if(this.fitness<=3){
//             return walk;
//         }
//         if(this.hunger>5){
//             return hungry;
//         } else {
//             return allGood;
//         };
//     };
    









module.exports = Pet;