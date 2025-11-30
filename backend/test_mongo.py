from mongoengine import connect, Document, StringField
import os

# Test de connexion MongoDB Atlas
MONGODB_URI = "mongodb+srv://23066_db_user:Qf3lQ9Dbxw42A2Y7@climat-cluster.uys59dt.mongodb.net/climatdb?retryWrites=true&w=majority"

try:
    connect('climatdb', host=MONGODB_URI)
    print("✅ Connexion MongoDB Atlas réussie!")
    
    # Test d'insertion simple
    class TestDoc(Document):
        name = StringField(required=True)
    
    test = TestDoc(name="Test connexion")
    test.save()
    print("✅ Test d'écriture réussi!")
    
    test.delete()
    print("✅ Test de suppression réussi!")
    
except Exception as e:
    print(f"❌ Erreur de connexion: {e}")