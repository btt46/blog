# Generated by Django 4.0.6 on 2022-07-11 10:27

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_alter_blogpost_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='exception',
            field=models.CharField(default=django.utils.timezone.now, max_length=500),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='topic',
            field=models.CharField(max_length=100),
        ),
    ]
