# Generated by Django 4.0.6 on 2022-07-17 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_rename_exception_blogpost_exceprtion'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='coverImage',
            field=models.ImageField(blank=True, upload_to='users/%Y/%m/%d/'),
        ),
    ]
