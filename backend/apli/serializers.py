from rest_framework import serializers

class IdeeFausseSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    titre = serializers.CharField()
    description = serializers.CharField()
    pourquoi_faux = serializers.CharField()
    source_url = serializers.CharField()

class SolutionSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    titre = serializers.CharField()
    description = serializers.CharField()
    impact_chiffre = serializers.CharField()
    source_url = serializers.CharField()

class QuizSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    question = serializers.CharField()
    reponse_vraie = serializers.BooleanField()
    explication = serializers.CharField()
    source_url = serializers.CharField()
