/// <reference path="../../typings/tsd.d.ts" />

import mongoose = require("mongoose");
import IUser 	= require("./IUser");

var Schema : mongoose.Schema = new mongoose.Schema({
	email 			: { type: String, required: true },
    pass            : { type: String, required: true },
    active          : { type: Boolean, default: true },
    created_at      : { type: Date, required: true, default: Date.now },
    upadated_at     : { type: Date, required: true, default: Date.now }
});

var UserModel = mongoose.model < IUser > ('User', Schema);

export = UserModel;