# Generated by Django 4.0.6 on 2022-07-06 13:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogpost',
            old_name='date',
            new_name='created_on',
        ),
    ]
