const findTheOldest = function(people) {
    sortedPeople = people.sort((firstPerson, nextPerson) => {
        let currentYear = new Date().getFullYear();
        if(!firstPerson.yearOfDeath) {
            firstPerson.yearOfDeath = currentYear;
        }

        if(!nextPerson.yearOfDeath) {
            nextPerson.yearOfDeath = currentYear;
        }

        let firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        let nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

        return nextPersonAge - firstPersonAge;
    })

    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
