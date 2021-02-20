const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
        });
    it('gives the object the name passed in', () => {
    let Fido = new Pet('Fido');
    let rex = new Pet('Rex');
        expect(Fido).toBeInstanceOf(Object)
        expect(Fido.name).toEqual('Fido'); 
    });
    });

describe('growUp', () => {
    const pet = new Pet('Vinnie');
    it('increments the age by 1', () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increases the hunger by 1', () => {
        expect(pet.hunger).toEqual(1);
    });
    it('decreases fitness by 3', () => {
        expect(pet.fitness).toEqual(7);
    });
    it('throws if dead', () => {
        pet.age = 35;
        expect( () => pet.feed().toThrow('Your pet is no longer alive'));
    });
    });

describe('walk', () => {
    const pet = new Pet('Vinnie');
    it('increases fitness level by 4 | MAX:10', () => {
        pet.walk();
        expect(pet.fitness).toEqual(10);
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    it('throws if dead', () => {
        pet.age = 35;
        expect( () => pet.feed().toThrow('Your pet is no longer alive'));
    });
});

describe('feed', () => {
    const pet = new Pet('Vinnie');

    it('puts hunger down 1 | MIN:0', () => {
        pet.growUp(); pet.growUp(); pet.growUp();
        expect(pet.hunger).toEqual(3);
        pet.feed();
        expect(pet.hunger).toEqual(2);
        pet.feed(); pet.feed(); pet.feed(); pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    it('throws if dead', () => {
        pet.age = 35;
        expect( () => pet.feed().toThrow('Your pet is no longer alive'));
    });
    
});

describe('checkup', () => {

    const allGood = 'I am all good!';
    const hungry = 'I am hungry';
    const walk = 'I need a walk';

    it('returns if hunger level more than 5', () => {
        const pet = new Pet('Vinnie');

        expect(pet.checkup()).toEqual(allGood);
        pet.hunger = 6;
        expect(pet.checkup()).toEqual(hungry);
    });
    it('returns if fitness is less than 3', () => {
        const pet = new Pet('Vinnie');

        expect(pet.age).toEqual(0);
        expect(pet.checkup()).toEqual(allGood)
        pet.fitness = 2;
        expect(pet.checkup()).toEqual(walk);
    });
    it('returns if fitness less than 3 and hunger greater than 5', () => {
        const pet = new Pet('Vinnie');
        pet.fitness = 3;
        pet.hunger = 6;
        expect(pet.checkup()).toEqual(`${hungry} AND ${walk}!`);
    });
    it('throws if dead', () => {
        const pet = new Pet('Vinnie');
        pet.age = 35;
        expect( () => pet.feed().toThrow('Your pet is no longer alive'));
    });

});


describe('isAlive', () => {
    const pet = new Pet('Vinnie');
    it('returns true if age < 30, hunger < 10 and fitness > 0', () =>{
        expect(pet.isAlive).toEqual(true);
    });
    it('returns false if age >= 30', () =>{
        pet.age = 30;
        expect(pet.isAlive).toEqual(false);
    });
    it ('returns false if hunger >= 10', () => {
        pet.hunger = 10;
        expect(pet.isAlive).toEqual(false);
    });
    it('returns false if fitness <= 0', () => {
        pet.fitness = 0;
        expect(pet.isAlive).toEqual(false);
    });
});

describe('adoptChild', () => {

    let parent = new Pet('Parent');

    it('Checks the child is an object', () => {
        parent.adoptChild('Joe');
    expect(parent.children[0]).toBeInstanceOf(Object);
    });

    it('Checks the name of the child is correct', () => {
    expect(parent.children[0].name).toEqual('Joe');
    });
});

describe('parent has child if fit and healthy > 3 years', () => {
    let parent = new Pet('parent');

    it('creates child', () => {
        parent.age = 3;
        parent.growUp(); parent.growUp(); 
        parent.walk(); parent.growUp(); 
        parent.walk(); parent.growUp();

        expect(parent.children[0]).toBeInstanceOf(Object);
    });

    it('names the child accordingly', () => {

        expect(parent.children[0].name).toEqual("parent's baba");
    });
});
