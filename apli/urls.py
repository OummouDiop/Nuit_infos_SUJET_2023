from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IdeeFausseViewSet, SolutionViewSet, QuizViewSet

router = DefaultRouter()
router.register("idees_fausses", IdeeFausseViewSet, basename="ideesfausses")
router.register("solutions", SolutionViewSet, basename="solutions")
router.register("quiz", QuizViewSet, basename="quiz")

urlpatterns = [
    path("", include(router.urls)),
]
