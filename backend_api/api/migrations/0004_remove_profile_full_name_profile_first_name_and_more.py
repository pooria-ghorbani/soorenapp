# Generated by Django 4.0.1 on 2024-04-01 16:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_profile_role_remove_user_role_user_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='full_name',
        ),
        migrations.AddField(
            model_name='profile',
            name='first_name',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='last_name',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='address',
            field=models.TextField(blank=True, null=True, verbose_name='address'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to='user_images'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='national_id',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='national id'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='national_id_image',
            field=models.ImageField(blank=True, null=True, upload_to='national_id_images/', verbose_name='national id image'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone_number',
            field=models.CharField(blank=True, max_length=11, null=True, verbose_name='phone number'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL),
        ),
    ]
