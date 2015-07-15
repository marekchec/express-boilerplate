/// <reference path="../../typings/tsd.d.ts" />

import mongoose = require("mongoose");

interface IUser extends mongoose.Document 
{
	email: string,
    pass: string,
    active: boolean,
    created_at: Date
    upadated_at: Date
};

export IUser;