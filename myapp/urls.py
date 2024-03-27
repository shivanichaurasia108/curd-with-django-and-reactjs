from django.urls import  include, path
from rest_framework.routers import DefaultRouter
from .views import get_all_data,CreateDataView,DeleteDataView,UpdateDataView

router = DefaultRouter()

router.register(r'all_data', get_all_data, basename='all-data'),
router.register(r'insert_data', CreateDataView, basename='create-data'),
router.register(r'delete_data', DeleteDataView, basename='delete-data'),
router.register(r'update_data', UpdateDataView, basename='update-data')

urlpatterns=[
    path('',include(router.urls)),
    path('all_data/', include('rest_framework.urls')),
    path('insert_data/', include('rest_framework.urls')),
    path('delete_data/<int:pk>/', include('rest_framework.urls')),
    path('update_data/<int:pk>/', include('rest_framework.urls')),
]