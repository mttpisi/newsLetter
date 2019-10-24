type role = 1|2|3|4|5|6|7;

export class UtenteNewsletter{
    protected _ruolo:role;
    constructor(
        public email:string, 
        public privacy:boolean,
    ){
        this._ruolo = 1;
    };
    
    get ruolo():role{
        return this._ruolo;
    }
    set ruolo(newRuolo:role){
        this._ruolo = newRuolo;
    }
}

export class UtenteInteressato extends UtenteNewsletter{
    constructor(
        email:string,
        privacy:boolean,
        public nome:string,
        public cognome:string,
        public telefono:string
    ){
        super(email,privacy);
        this._ruolo = 2;
    }
}

export class UtenteSelezioni extends UtenteInteressato{
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        public CF:string,
        public CI:string,
        public titoloStudio:string,
        public CV:string,
        public lettera:string
    ){
        super(email,privacy,nome,cognome,telefono);
        this._ruolo = 3;
    }
}

export class UtenteGraduatoria extends UtenteSelezioni{
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        CF:string,
        CI:string,
        titoloStudio:string,
        CV:string,
        lettera:string,
        public puntTest:number,
        public puntColloquio:number,
        public puntTot:number
    ){
        super(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera);
        this._ruolo = 4;
    }
}

export class Iscritto extends UtenteGraduatoria{
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        CF:string,
        CI:string,
        titoloStudio:string,
        CV:string,
        lettera:string,
        puntTest:number,
        puntColloquio:number,
        puntTot:number,
        public pagamenti:number[]
    ){
        super(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio,puntTot);
        this._ruolo = 5;
    }
}



export class Allievo extends Iscritto{
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        CF:string,
        CI:string,
        titoloStudio:string,
        CV:string,
        lettera:string,
        puntTest:number,
        puntColloquio:number,
        puntTot:number,
        pagamenti:number[],
        public percPresenza:number,
        public votiModuli:number,
        private password:string
    ){
        super(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio,puntTot,pagamenti);
        this._ruolo = 6;
    }
}

export class Docente extends UtenteNewsletter{
    constructor(
        email:string,
        privacy:boolean,
        public paga:number
    ){
        super(email,privacy);
        this._ruolo = 7;
    }
}