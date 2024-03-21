
import graphene
import western_quest.schema


class Query(western_quest.schema.Query, graphene.ObjectType):
    # Combine the queries from different apps
    pass


class Mutation(western_quest.schema.Mutation, graphene.ObjectType):
    # Combine the mutations from different apps
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)