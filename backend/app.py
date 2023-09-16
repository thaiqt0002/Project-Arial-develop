# Essentially library imports
from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify, send_from_directory, Blueprint, send_file, make_response
# Used to connect to database
import pymongo
from pymongo import MongoClient

app = Flask(__name__)

@app.route('/robots.txt')
@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

@app.route('/')
def index():
    return "Hello World!"