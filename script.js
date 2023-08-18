const boxersList = document.querySelector("#boxers-input")
const sealersList = document.querySelector("#sealers-input")
const submitButton = document.querySelector(".btn")
const response = document.querySelector(".warning-box")
const header = document.querySelector("h1")

function boxerResponseLoop(){
for(let boxer of boxers){
    if (boxer.name === boxersList.value){

        const randomResponse = boxer.responses[Math.floor(Math.random()*boxer.responses.length)]
        response.textContent = randomResponse
    
    }
    
}
}

function sealerResponseLoop(){
    for(let sealer of sealers){
        if (sealer.name === sealersList.value){
            const randomResponse = sealer.responses[Math.floor(Math.random()*sealer.responses.length)]
            if (randomResponse.includes("xx")){
                const editedResponse = randomResponse.replaceAll("xx", `${boxersList.value}`)
                response.textContent = editedResponse
                
            }
            else {response.textContent= randomResponse}
        }
    }
}

function employeeChoiceLoop() {
    let randomNumber = Math.random()
    let responseChance
    if (boxersList.value.toLowerCase() === "jimmy" || "bill" || "harry" || "kurt" || "kevin") {
     responseChance = .6
    }
    else{ responseChance = .4}


    if(comboResponse()){
        for (let sealer of sealers){
            if (sealersList.value === sealer.name){
                response.textContent = sealer.combo_responses
                setTimeout(()=>{response.style.display = "none"},"7000")
            }
        }
    }
    else if(randomNumber <= responseChance ){
        boxerResponseLoop()
    }
    else if (randomNumber > responseChance){
        sealerResponseLoop()
    }

}

function comboResponse(){
    if (sealersList.value.toLowerCase() === "jimmily" && boxersList.value.toLowerCase() === "jimmy" || sealersList.value.toLowerCase() === "tammy" && boxersList.value.toLowerCase() === "kevin" || sealersList.value.toLowerCase() === "jay" && boxersList.value.toLowerCase() === "kurt" || sealersList.value.toLowerCase() === "alicia" && boxersList.value.toLowerCase() === "trevor"){
        return true
    }
    else return false
}


const boxers = [
    {name: "Jimmy",
    responses: ["Jimmy still doesn't understand that 2511s and 2611s are two different things", "Jimmy forgot to label 4 of his 5907s on the top. Beecher lectured him for a full minute. His window filled up and he never recovered", "Jimmy got help from Trevor with his DFUs. This was a mistake because he ended up with an angio inside of an angio and a random extra device. Kit was 100 percented for DFUs", "Jimmy finally found out that the 'NC' in 'NCMR' stands for 'non-conformance' and he should conform to proper manufacturing standards. His kit was flawless as a result", "Jimmy actually finished his fries today and consumed enough calories to complete his kit without error" ],
    },
    {name: "Bill",
    responses: ["Bill was distracted by the beauty of the women on his line and put 26 pouches in a line kit inner.", "Bill found out that HR didn't want him to use the 'r' word and used it anyway. Pretty retardiff.", "Bill stole a squeeze contrast controller from the kit to use as a sex toy. Emergency surgery was required", "Bill spent his lunch break speeding down Dix Ave listening to Motorhead while pensively stroking his beard. He figured out why his count was off"],
    },
    {name: "Harry",
    responses: ["Harry made a crazy joke at Town Hall and got called down to HR. He was already missing three DFUs. Bill screwed up his count while he was gone","Harry spent his whole kit browsing the internet and ended up boxing up his pens and box cutters instead of pouches", "Harry was put on the Japan line and made good use of his scale, weighing every box. His count was flawless all day.", "Harry was put on a line with one of his daughters. Van Guilder energy pervaded the custom packaging department and everyone was magically on count"],
    },
    {name: "Heidi",
    responses: ["Heidi used 96 bags instead of 13s and we had to 100 percent a three pallet connect", "Kurt helped Heidi spot every trace of foreign matter in her kit",],
    },
    {name: "Jon",
    responses: ["Jon was busy thinking about sexy vampires and put the wrong number of pouches in every box", "Jon left his line to do three audits and Bill had to bail him out.", "Jon went to the bathroom and Trevor screwed up Jon's count while he was gone","Jon used his 'eagle eyes' power-up to spot every trace of foreign matter in the kit.", "Jon argued with Kurt for 20 minutes about what the best guitar hero song is but the count was on somehow"],
    },
    {name: "Kurt",
    responses: ["Kurt laughed for so long he had trouble breathing and he wound up in the hospital. Medline products saved his life", "Kurt forgot a stop label and Trevor missed it on the audit.","There were so many wrinkled seals in Kurt's audit box that someone contacted PETA","Kurt was deep in a discussion about his favorite band 'Avenged Sevenfold' when he thought about the fact that he would be NCMR'd 'sevenfold' if he wasn't careful. His audit box was good", "Kurt distracted Aiden with a diatribe on whether Clerks 1 or Clerks 2 was the superior movie and Aiden missed a cheeto crumb in Kurt's audit box" ],
    },
    {name: "Kevin",
    responses: ["Kevin got a contact high from all the weed at a Dave Matthews concert the day before and he was still so stoned that he missed a hair in the seal", "Kevin  seemingly didn't realize there were other jobs out there where he wouldn't have to fix other people's messes like some kind of weird box janitor. He continued boxing his kit.", "Kevin's been at medline so long he noticed that one of the lines was half an inch longer than its supposed to be. Thanks Rainman."],
    },

    {name: "Trevor", 
    responses: ["Trevor had to pee three times in a single kit after drinking a liter of Diet Mountain Lion at lunch. Jon took over his kit while he was gone and his own kit suffered as a result. Kevin and Bill jumped onto Jon's kit. As everyone was boxing each other's kit, Harry had a fire on line 14.", "Justin brought a microscope out to final box and QDA'd Trevor for a dead skin cell","Trevor used his stager's wisdom to notice a subtle manufacturing defect in the angio sacs. The writing said 'Angio Shaq' for some reason and they were three times the size"],
    },
    {name: "Aiden",
    responses: ["Aiden was tired of Bill calling him Aladdin. He decided to use reverse psychology. He leaned into the stereotype by growing out his facial hair and carrying his box cutters in a genie bottle. HR called him down in the middle of the kit and fired him for a racist depiction of middle easterners", "Aiden stole the plant manager's car over break and went 90 in a 55. We never saw him again"],
}
    
]
const sealers = [
    {name: "Chris C",
    responses: ["Chris got his final warning from Christina for repeatedly telling boxers to box with their eyes closed. Little does he know that he could level the playing field just by getting new glasses", `Chris goes to an improv class three days a week before work. He often vents his frustration by roleplaying as a Medline Employee and screaming 'FUCK YOU' at his fellow improv actors. He forgot he was at work today and swore at the top of his lungs.`]
    
    },
    {name: "Jimmily",
    responses: ["Jimmily found her lost label before we hundred percented the kit", "Jimmily respectfully remembered to give us the next kit's paperwork with a few shippers still left in the kit"],
    combo_responses: "Little did we know, Jimmily was originally named Emily but she had a secret romance with Jimmy and changed her name. Everyone realized this at once when we saw them bickering during a kit"
    },
    {name: "Sue",
    responses: ["Every time stagers tried to bring Sue her rush orders she couldn't hear them calling out 'rush order.' The kit was partialed", `xx pointed out that Sue looked like an owl and everyone literally died laughing `]
    
    },
    {name: "Tammy", 
    responses: [`Before work Tammy and her line members engaged in competitive knitting to hone their dexterity before a kit. Tammy's awe inspiring speed was so well known throughout the company that a local news show caught wind. They came in to televise the kit and were blown away by how fast the window piled up`, "Tammy had spent the previous evening listening to her copy of the Art Of Stopcock Sealing audiobook while simultaneously practicing Tai Chi, but it didn't stop her from sending out two unsealed pouches"],
    combo_responses: "The song 'Crash Into Me' by Kevin's favorite band started playing on the radio and it made things really awkward"
    },
    {name: "Jay",
    responses: ["The entire department was quarantined by the FDA due to a suspicious smell. Men in hazmat suits quickly homed in on Jay's line. The smell turned out to be Jay's breath.","Jay spent the entire kit telling stories he's told twenty times over to all the new people on his line. They forgot to add one of the port protectors as a result and the whole kit had to go back"],
    combo_responses: "Jay sent out ten wrinkled seals right at the end of the kit. We had to send back all ten of Kurt's audit pieces."
},
    {name: "Alicia",
    responses: ["xx realized that there was no limit to Alicia's cheerfulness and decided to test it anyway. xx sent back pouches that had nothing at all wrong with them, only to be told (s)he was doing a 'great job.'","Alicia got tired of reworking wrinkled pouches one day and screamed 'YOU KNOW WHAT?? YOU'RE NOT DOING A GREAT JOB. YOU'RE DOING FUCKING TERRIBLE. I HATE YOU'. HR called her down to the office and she somehow charmed them into letting her keep the job."],
    combo_responses: "Trevor and Alicia decided to mess with everyone's heads and design paperwork for a fake kit and work on it on an empty line. We paid AJ to bring us random objects like we were ordering parts."
}
]

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    response.style.display = "block"
    employeeChoiceLoop()
    boxersList.value = ""
    sealersList.value = ""
    
})

header.addEventListener("mouseover", () => {
    header.textContent = "medline"
})

header.addEventListener("mouseout", () => {
    header.textContent = "redline"
})








