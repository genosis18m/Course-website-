const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { userRouter } = require('./user')

const { courseRouter } = require('./course')

const app = express();
app.use(express.json());

