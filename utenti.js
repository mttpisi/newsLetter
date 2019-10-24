"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UtenteNewsletter = /** @class */ (function () {
    function UtenteNewsletter(email, privacy) {
        this.email = email;
        this.privacy = privacy;
        this._ruolo = 1;
    }
    ;
    Object.defineProperty(UtenteNewsletter.prototype, "ruolo", {
        get: function () {
            return this._ruolo;
        },
        set: function (newRuolo) {
            this._ruolo = newRuolo;
        },
        enumerable: true,
        configurable: true
    });
    return UtenteNewsletter;
}());
exports.UtenteNewsletter = UtenteNewsletter;
var UtenteInteressato = /** @class */ (function (_super) {
    __extends(UtenteInteressato, _super);
    function UtenteInteressato(email, privacy, nome, cognome, telefono) {
        var _this = _super.call(this, email, privacy) || this;
        _this.nome = nome;
        _this.cognome = cognome;
        _this.telefono = telefono;
        _this._ruolo = 2;
        return _this;
    }
    return UtenteInteressato;
}(UtenteNewsletter));
exports.UtenteInteressato = UtenteInteressato;
var UtenteSelezioni = /** @class */ (function (_super) {
    __extends(UtenteSelezioni, _super);
    function UtenteSelezioni(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono) || this;
        _this.CF = CF;
        _this.CI = CI;
        _this.titoloStudio = titoloStudio;
        _this.CV = CV;
        _this.lettera = lettera;
        _this._ruolo = 3;
        return _this;
    }
    return UtenteSelezioni;
}(UtenteInteressato));
exports.UtenteSelezioni = UtenteSelezioni;
var UtenteGraduatoria = /** @class */ (function (_super) {
    __extends(UtenteGraduatoria, _super);
    function UtenteGraduatoria(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio, puntTot) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera) || this;
        _this.puntTest = puntTest;
        _this.puntColloquio = puntColloquio;
        _this.puntTot = puntTot;
        _this._ruolo = 4;
        return _this;
    }
    return UtenteGraduatoria;
}(UtenteSelezioni));
exports.UtenteGraduatoria = UtenteGraduatoria;
var Iscritto = /** @class */ (function (_super) {
    __extends(Iscritto, _super);
    function Iscritto(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio, puntTot, pagamenti) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio, puntTot) || this;
        _this.pagamenti = pagamenti;
        _this._ruolo = 5;
        return _this;
    }
    return Iscritto;
}(UtenteGraduatoria));
exports.Iscritto = Iscritto;
var Allievo = /** @class */ (function (_super) {
    __extends(Allievo, _super);
    function Allievo(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio, puntTot, pagamenti, percPresenza, votiModuli, password) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio, puntTot, pagamenti) || this;
        _this.percPresenza = percPresenza;
        _this.votiModuli = votiModuli;
        _this.password = password;
        _this._ruolo = 6;
        return _this;
    }
    return Allievo;
}(Iscritto));
exports.Allievo = Allievo;
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(email, privacy, paga) {
        var _this = _super.call(this, email, privacy) || this;
        _this.paga = paga;
        _this._ruolo = 7;
        return _this;
    }
    return Docente;
}(UtenteNewsletter));
exports.Docente = Docente;
