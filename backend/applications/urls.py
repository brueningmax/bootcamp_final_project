from django.urls import path

from applications.views import ListAllApplications


urlpatterns = [
    path('all/', ListAllApplications.as_view()),
    # path('latest/', ListAllApplications.as_view()),
]