const Owner = require('../src/owner');
const Pet = require('../src/pet');

describe('Owner', () => {
    it('is an Object', () => {

        expect(new Owner('Joe')).toBeInstanceOf(Object);

    });

    it('has a name', () => {
        const joe = new Owner('Joe');
        expect(joe.name).toEqual('Joe');
    });

    it('has an array of pets objects', () => {
        const joe = new Owner('Joe');
        expect(joe.pets).toBeInstanceOf(Array);
        const pet = new Pet('pet');
        const jake = new Owner('Jake', pet);
        expect(jake.pets[0]).toBeInstanceOf(Object);
        expect(jake.pets[0]).toEqual(pet);
    });

    it('can adopt a pet', () => {
        const joe = new Owner('Joe');
        const vin = new Pet('Vinnie');
        joe.adoptPet(vin);
        expect(joe.pets).toEqual([vin]);
    });

    it('can change the name of a child/pet', () => {
        const vin = new Pet('Vinnie');
        vin.nameChild('Roy');
        expect(vin.name).toEqual('Roy');
    });
});
