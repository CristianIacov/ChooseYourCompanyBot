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

rules[5] = new Rule({
    name: "Intel",
    when: [
        facts => facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "javascript",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "procedural",
        facts => facts.technicalField === "web",

    ],
    then: facts => {
        facts.companyName =  "Amdaris";
    },
});

rules[6] = new Rule({
    name: "Amdaris",
    when: [
        facts => facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "javascript",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "procedural",
        facts => facts.technicalField === "web",

    ],
    then: facts => {
        facts.companyName =  "Amdaris";
    },
});

rules[6] = new Rule({
    name: "IBM",
    when: [
        facts => facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "java",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "oop",
        facts => facts.technicalField === "web",

    ],
    then: facts => {
        facts.companyName =  "IBM";
    },
});

rules[7] = new Rule({
    name: "Accenture",
    when: [
        facts => facts.firstTimeWorking === "Y" || facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "<1" || facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "java",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "oop",
        facts => facts.technicalField === "web",

    ],
    then: facts => {
        facts.companyName =  "Accenture";
    },
});

rules[8] = new Rule({
    name: "Nokia",
    when: [
        facts => facts.firstTimeWorking === "Y" || facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "<1" || facts.yearsOfExperience === "1-3" || facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "C" || facts.favoriteLanguages === "Java",
        facts => facts.hardwareOrSoftware === "H" || facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT" || facts.parttimeOrfulltime === "PT",
        facts => facts.programmingType === "procedural" || facts.programmingType === "oop",
        facts => facts.technicalField === "web",

    ],
    then: facts => {
        facts.companyName =  "Nokia";
    },
});

rules[9] = new Rule({
    name: "Visma",
    when: [
        facts => facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "javascript" || facts.favoriteLanguages === "Java",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "procedural" || facts.programmingType === "oop",
        facts => facts.technicalField === "web" || facts.technicalField === "mobile",

    ],
    then: facts => {
        facts.companyName =  "Visma";
    },
});
rules[10] = new Rule({
    name: "Bitdefender",
    when: [
        facts => facts.firstTimeWorking === "N" ,
        facts => facts.yearsOfExperience === "3+",
        facts => facts.favoriteLanguages === "C" || facts.favoriteLanguages === "Python",
        facts => facts.hardwareOrSoftware === "S",
        facts => facts.parttimeOrfulltime === "FT",
        facts => facts.programmingType === "procedural" || facts.programmingType === "oop",
        

    ],
    then: facts => {
        facts.companyName =  "Bitdefender";
    },
});
async function diagnose(facts) {
    const rools = new Rools();
    await rools.register(rules);
    await rools.evaluate(facts);
    return facts;
};


module.exports = { diagnose };