let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom=["es","com","cl","cu","ca"];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let y = 0; y < noun.length; y++) {
            console.log( `${pronoun[i]}${adj[j]}${noun[y]}.${dom[domAleat(dom)]}`);
        }
    }
}

function domAleat(dom){
   return Math.floor(Math.random() * dom.length);
}
