class Owner{
    constructor(name, pet){
        this.name = name;
        this.pets = new Array();
        if (pet) 
            {
                this.pets.push(pet);
                pet.owners.push(this.name);
            }
    };

    adoptPet(pet){
        this.pets.push(pet);
        if(pet){
            pet.owners.push(this.name);
        }
    };
};


module.exports = Owner;