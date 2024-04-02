# Generated by Django 4.0.1 on 2024-03-15 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.ManyToManyField(default='guest', max_length=20, related_name='user', to='api.Role', verbose_name='role'),
        ),
    ]