# from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ContactSerializer
from .models import ContactModel
from rest_framework.decorators import api_view
# from django.shortcuts import get_object_or_404

#GET API
class get_all_data(viewsets.ModelViewSet):
    # define queryset
    queryset = ContactModel.objects.all()
 
    # specify serializer to be used
    serializer_class = ContactSerializer

#POST API
class CreateDataView(viewsets.ModelViewSet):
    # define queryset
    queryset = ContactModel.objects.all()
 
    # specify serializer to be used
    serializer_class = ContactSerializer
    
    def post(self, request, *args, **kwargs):
        try:
            # Access form data from request.data
            serializer = ContactSerializer(data=request.data)

            # Validate the serializer
            serializer.is_valid(raise_exception=True)

            # Save the data to the database
            serializer.save()

            # Return a successful response
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            # Handle exceptions and return an error response
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#PUT API
class UpdateDataView(viewsets.ModelViewSet):
    # define queryset
    queryset = ContactModel.objects.all()
 
    # specify serializer to be used
    serializer_class = ContactSerializer

    def update(self, request, pk=id):
        try:
            contact = ContactModel.objects.get(pk=pk)
        except ContactModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ContactSerializer(contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE API
class DeleteDataView(viewsets.ModelViewSet):
    # define queryset
    queryset = ContactModel.objects.all()
 
    # specify serializer to be used
    serializer_class = ContactSerializer

    def delete(self, request, pk=id):
        try:
            # Retrieve the object to delete
            contact = ContactModel.objects.get(pk=pk)
        except ContactModel.DoesNotExist:
            return Response({'error': 'Contact does not exist'}, status=status.HTTP_404_NOT_FOUND)

        # Delete the object
        contact.delete()
        return Response({'message': 'Contact deleted successfully'}, status=status.HTTP_204_NO_CONTENT)