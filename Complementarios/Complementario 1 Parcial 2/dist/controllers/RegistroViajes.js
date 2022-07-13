"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerRegistroViajes = exports.ObtenerRegistroViaje = exports.CrearRegistroViaje = exports.BorrarRegistroViaje = exports.ActualizarRegistroViaje = void 0;
const models_1 = require("../models");
const ObtenerRegistroViajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Limite = 10, Desde = 0 } = req.query;
    const query = { Estado: true };
    const [total, datos] = yield Promise.all([
        models_1.RegistroViaje.countDocuments(query),
        models_1.RegistroViaje.find(query).populate('IdUsuario').populate('IdBus').skip(Number(Desde)).limit(Number(Limite)),
    ]);
    res.json({
        total,
        datos,
    });
});
exports.ObtenerRegistroViajes = ObtenerRegistroViajes;
const ObtenerRegistroViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const registrorecarga = yield models_1.RegistroViaje.findById(id).populate('IdUsuario').populate('IdBus').catch((err) => { res.status(400).json({ status: 'no es una id correcta', error: err }); });
    res.json(registrorecarga);
});
exports.ObtenerRegistroViaje = ObtenerRegistroViaje;
const CrearRegistroViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const registroviaje = new models_1.RegistroViaje(body);
    try {
        const CntViajesUsu = yield models_1.Usuario.findById(registroviaje.IdUsuario);
        const UsuarioModificado = yield models_1.Usuario.findByIdAndUpdate(registroviaje.IdUsuario, { CntViajes: CntViajesUsu.CntViajes - 1 }, { new: true }).catch((err) => { res.status(400).json({ status: 'no es una id correcta1', error: err }); });
        const RegistroViajeNuevo = yield registroviaje.save();
        res.status(201).json({ RegistroViajeNuevo, UsuarioModificado });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ status: 'no es una id correcta2' });
    }
});
exports.CrearRegistroViaje = CrearRegistroViaje;
const ActualizarRegistroViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const registroviaje = new models_1.RegistroViaje(body);
    try {
        const RegistroViajeActual = yield models_1.RegistroViaje.findById(id);
        const CntViajesUsuNuevo = yield models_1.Usuario.findById(registroviaje.IdUsuario).catch((err) => { res.status(400).json({ status: 'no es una id correcta2', error: err.message }); });
        const UsuarioModificado = yield models_1.Usuario.findByIdAndUpdate(registroviaje.IdUsuario, { CntViajes: CntViajesUsuNuevo.CntViajes - 1 }, { new: true }).catch((err) => { res.status(400).json({ status: 'no es una id correcta', error: err }); });
        //ahora aumentamos los viejos
        if (RegistroViajeActual.Estado) {
            const CntViajesUsu = yield models_1.Usuario.findById(RegistroViajeActual.IdUsuario);
            const UsuarioDesModificado = yield models_1.Usuario.findByIdAndUpdate(RegistroViajeActual.IdUsuario, { CntViajes: CntViajesUsu.CntViajes + 1 }, { new: true }).catch((err) => { res.status(400).json({ status: 'no es una id correcta1', error: err }); });
        }
        const RegistroViajeModificado = yield models_1.RegistroViaje.findByIdAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'no es una id correcta2', error: err.message }); });
        res.json({ RegistroViajeModificado });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ status: 'Error' });
    }
});
exports.ActualizarRegistroViaje = ActualizarRegistroViaje;
const BorrarRegistroViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const RegistroViajeActual = yield models_1.RegistroViaje.findById(id);
    const CntViajesUsu = yield models_1.Usuario.findById(RegistroViajeActual.IdUsuario);
    const UsuarioDesModificado = yield models_1.Usuario.findByIdAndUpdate(RegistroViajeActual.IdUsuario, { CntViajes: CntViajesUsu.CntViajes + 1 }, { new: true }).catch((err) => { res.status(400).json({ status: 'no es una id correcta1', error: err }); });
    const RegistroViajeBorrado = yield models_1.RegistroViaje.findByIdAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'no es una id correcta', error: err }); });
    res.json(RegistroViajeBorrado);
});
exports.BorrarRegistroViaje = BorrarRegistroViaje;
