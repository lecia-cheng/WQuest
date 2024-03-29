# Generated by Django 5.0.2 on 2024-02-06 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Western_quest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qid', models.IntegerField(unique=True)),
                ('title', models.CharField(max_length=255)),
                ('title_slug', models.SlugField(max_length=255)),
                ('difficulty', models.CharField(max_length=50)),
                ('acceptance_rate', models.FloatField()),
                ('paid_only', models.BooleanField(default=False)),
                ('topic_tags', models.JSONField()),
                ('category_slug', models.SlugField(max_length=255)),
            ],
        ),
    ]
