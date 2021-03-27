const { Rools, Rule } = require('rools');


const rules = [];

rules[0] = new Rule({
    name: "Continental",
    when: [
        facts => facts.firstTimeWorking === "Y" || facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "<1" || facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "C" || facts.favoriteLanguages === "Java",
        facts => facts.hardwareOrSoftware === "H" || facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT" || facts.parttimeOrfulltime === "PT",
        facts => facts.programmingType === "procedural" || facts.programmingType === "oop",
        facts => facts.technicalField === "automotive" || facts.programmingType === "embedded",

    ],
    then: facts => {
        facts.companyName =  "Continental";
    },
});

rules[1] = new Rule({
    name: "Hella",
    when: [
        facts => facts.firstTimeWorking === "Y" || facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "<1" || facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "C" || facts.favoriteLanguages === "Java",
        facts => facts.hardwareOrSoftware === "H" || facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT" || facts.parttimeOrfulltime === "PT",
        facts => facts.programmingType === "procedural" || facts.programmingType === "oop",
        facts => facts.technicalField === "automotive",

    ],
    then: facts => {
        facts.companyName =  "Hella";
    },
});

rules[2] = new Rule({
    name: "FEV",
    when: [
        facts => facts.firstTimeWorking === "Y" || facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "<1" || facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "C",
        facts => facts.hardwareOrSoftware === "H" || facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "procedural",
        facts => facts.technicalField === "automotive",

    ],
    then: facts => {
        facts.companyName =  "FEV";
    },
});

rules[3] = new Rule({
    name: "BusyMachines",
    when: [
        facts => facts.firstTimeWorking === "Y" || facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "<1" || facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "Scala" || facts.favoriteLanguages === "Java",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT" || facts.parttimeOrfulltime === "PT",
        facts => facts.programmingType === "functional",
        facts => facts.technicalField === "web" || facts.technicalField === "mobile",

    ],
    then: facts => {
        facts.companyName =  "BusyMachines";
    },
});

rules[4] = new Rule({
    name: "Intel",
    when: [
        facts => facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "C",
        facts => facts.hardwareOrSoftware === "H" || facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "procedural",
        facts => facts.technicalField === "embedded",

    ],
    then: facts => {
        facts.companyName =  "Intel";
    },
});

async function diagnose(facts) {
    const rools = new Rools();
    await rools.register(rules);
    await rools.evaluate(facts);
    return facts;
};


module.exports = { diagnose };