import * as utentiMod from './utenti';

const utenti: any = [];

utenti.push(new utentiMod.UtenteNewsletter("email@email.it",true));
utenti.push(new utentiMod.UtenteInteressato("email2@email.it",true,"Marco","Rossi","3399990000"));
utenti.push(new utentiMod.UtenteSelezioni("email3@email.it",true,"Giuseppe","Bianchi","3388880000","CodiceFiscale","CartaIdentita","Diploma","Curriculum","Lettera"));
utenti.push(new utentiMod.UtenteGraduatoria("email4@email.it",true,"Giovanni","Verdi","3377770000","CodiceFiscale","CartaIdentita","Diploma","Curriculum","Lettera",30,25,55));
utenti.push(new utentiMod.Iscritto("email5@email.it",true,"Maria","Azzurri","3366660000","CodiceFiscale","CartaIdentita","Diploma","Curriculum","Lettera",30,25,55,[200,200]));
utenti.push(new utentiMod.Allievo("email6@email.it",true,"Giacomo","Arancioni","3355550000","CodiceFiscale","CartaIdentita","Diploma","Curriculum","Lettera",30,25,55,[200,200],90,10,"PasswordStraSegreta"));
utenti.push(new utentiMod.Docente("emailDoc@email.it",true,2000));

let results:utentiMod.UtenteNewsletter[] = [];

let nome = "Giovanni";

for(let i = 0; i<utenti.length;i++){
    if(utenti[i].ruolo != 1 || utenti[i].ruolo != 7){
        if(utenti[i].nome == nome){
            results.push(utenti[i]);
        }
    }
}

console.log(results);