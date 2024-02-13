import graphene
from graphene_django import DjangoObjectType
from .models import Western_quest


class Western_questType(DjangoObjectType):
    class Meta:
        model = Western_quest
        fields = ("qid", "title_slug")

class Query(graphene.ObjectType):
    all_western_quests = graphene.List(Western_questType)

    def resolve_all_western_quests(root, info):
        return Western_quest.objects.all()


schema = graphene.Schema(query=Query)


