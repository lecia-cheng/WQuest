from django.db import models

# Create your models here.
class Western_quest(models.Model):
    qid = models.IntegerField(unique=True)  # Assuming qid is a unique question identifier
    title = models.CharField(max_length=255)  # Title of the question
    title_slug = models.SlugField(max_length=255)  # Slug for the title, useful for URLs
    difficulty = models.CharField(max_length=50)  # Difficulty level (e.g., Easy, Medium, Hard)
    acceptance_rate = models.FloatField()  # Acceptance rate as a percentage
    paid_only = models.BooleanField(default=False)  # Whether the question is only for paid users
    topic_tags = models.JSONField()  # JSON field to store list of topics/tags
    category_slug = models.SlugField(max_length=255)  # Slug for the category
    
    def __str__(self):
        return self.title

