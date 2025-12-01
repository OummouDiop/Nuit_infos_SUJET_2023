from rest_framework.response import Response
from rest_framework import status, viewsets
from .models import IdeeFausse, Solution, Quiz
from .serializers import IdeeFausseSerializer, SolutionSerializer, QuizSerializer

class IdeeFausseViewSet(viewsets.ViewSet):
    def list(self, request):
        data = IdeeFausse.objects.all()
        serializer = IdeeFausseSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = IdeeFausseSerializer(data=request.data)
        if serializer.is_valid():
            item = IdeeFausse(**serializer.validated_data)
            item.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)

class SolutionViewSet(viewsets.ViewSet):
    def list(self, request):
        data = Solution.objects.all()
        serializer = SolutionSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = SolutionSerializer(data=request.data)
        if serializer.is_valid():
            item = Solution(**serializer.validated_data)
            item.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)

class QuizViewSet(viewsets.ViewSet):
    def list(self, request):
        data = Quiz.objects.all()
        serializer = QuizSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = QuizSerializer(data=request.data)
        if serializer.is_valid():
            item = Quiz(**serializer.validated_data)
            item.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
