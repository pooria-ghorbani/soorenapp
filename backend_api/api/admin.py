from django.contrib import admin
from api.models import User,Profile, BeltLicense, Province, Coach, Hirbod, ProvinceBoss, ProvinceMaster, Athlete, Role

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'first_name', 'last_name' ,'verified']

admin.site.register(User, UserAdmin)
admin.site.register( Profile,ProfileAdmin)
admin.site.register(BeltLicense)
admin.site.register(Province)
admin.site.register(Coach)
admin.site.register(Hirbod)
admin.site.register(ProvinceBoss)
admin.site.register(ProvinceMaster)
admin.site.register(Role)