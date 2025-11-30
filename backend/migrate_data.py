import os
import django
from mongoengine import connect

# Configuration Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from apli.models import Solution, Quiz, IdeeFausse

def migrate_to_atlas():
    """Migration des données vers MongoDB Atlas"""
    
    # Données par défaut adaptées aux modèles existants
    solutions_data = [
        {
            "titre": "Énergies renouvelables",
            "description": "Installation de panneaux solaires et éoliennes pour réduire les émissions CO2",
            "impact_chiffre": "Réduction de 40% des émissions CO2",
            "source_url": "https://www.irena.org/"
        },
        {
            "titre": "Transport durable", 
            "description": "Développement des transports en commun électriques et mobilité douce",
            "impact_chiffre": "Réduction de 30% des émissions transport",
            "source_url": "https://www.iea.org/"
        },
        {
            "titre": "Efficacité énergétique",
            "description": "Isolation des bâtiments et amélioration de l'efficacité énergétique",
            "impact_chiffre": "Réduction de 25% de la consommation énergétique",
            "source_url": "https://www.iea.org/topics/energy-efficiency"
        }
    ]
    
    quiz_data = [
        {
            "question": "Le réchauffement climatique est-il causé par l'activité humaine ?",
            "reponse_vraie": True,
            "explication": "97% des scientifiques s'accordent sur l'origine anthropique du réchauffement.",
            "source_url": "https://climate.nasa.gov/"
        },
        {
            "question": "Les énergies renouvelables peuvent-elles remplacer les énergies fossiles ?",
            "reponse_vraie": True,
            "explication": "Les énergies renouvelables ont le potentiel de couvrir la totalité des besoins énergétiques mondiaux.",
            "source_url": "https://www.irena.org/"
        }
    ]
    
    fausses_idees_data = [
        {
            "titre": "Le climat change naturellement",
            "pourquoi_faux": "Le changement actuel est 10 fois plus rapide que les variations naturelles.",
            "source_url": "https://climate.nasa.gov/"
        }
    ]
    
    # Créer les documents
    for data in solutions_data:
        Solution(**data).save()
        print(f"✅ Solution créée: {data['titre']}")
        
    for data in quiz_data:
        Quiz(**data).save()
        print(f"✅ Quiz créé: {data['question'][:50]}...")
        
    for data in fausses_idees_data:
        IdeeFausse(**data).save()
        print(f"✅ Fausse idée créée: {data['titre']}")

if __name__ == "__main__":
    migrate_to_atlas()