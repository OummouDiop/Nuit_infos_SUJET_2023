from mongoengine import Document, StringField, BooleanField

class IdeeFausse(Document):
    titre = StringField(required=True)
    description = StringField()
    pourquoi_faux = StringField()
    source_url = StringField()

class Solution(Document):
    titre = StringField(required=True)
    description = StringField()
    impact_chiffre = StringField()
    source_url = StringField()

class Quiz(Document):
    question = StringField(required=True)
    reponse_vraie = BooleanField(required=True)
    explication = StringField()
    source_url = StringField()
