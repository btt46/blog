# Generated by Django 4.0.6 on 2022-07-06 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_contact_created_on'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogpost',
            old_name='created_on',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='created_on',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='contact',
            old_name='created_on',
            new_name='created_at',
        ),
        migrations.AddField(
            model_name='blogpost',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='comment',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='contact',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
