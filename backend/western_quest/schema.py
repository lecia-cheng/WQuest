import graphene
from graphene_django import DjangoObjectType
from .models import User, Question, TestCase, Submission, Like


# Defining Individual Queries
class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ("id", "username")


class QuestionType(DjangoObjectType):
    class Meta:
        model = Question
        fields = "__all__"


class TestCaseType(DjangoObjectType):
    class Meta:
        model = TestCase
        fields = "__all__"


class SubmissionType(DjangoObjectType):
    class Meta:
        model = Submission
        fields = "__all__"


class LikeType(DjangoObjectType):
    class Meta:
        model = Like
        fields = "__all__"


# Defining Individual Mutations
class SubmissionLanguage(graphene.Enum):
    C = 'C'
    C_PLUS_PLUS = 'C++'
    JAVA = 'Java'
    PYTHON = 'Python'
    JAVASCRIPT = 'Javascript'
    
class SubmissionStatus(graphene.Enum):
    ACCEPTED = 'Accepted'
    WRONG_ANSWER = 'Wrong Answer'
    TIME_LIMIT_EXCEEDED = 'Time Limit Exceeded'
    RUNTIME_ERROR = 'Runtime Error'
    COMPILE_ERROR = 'Compile Error'
    PENDING = 'Pending'

class CreateSubmission(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        user = graphene.ID(required=True)
        question = graphene.ID(required=True)
        code = graphene.String(required=True)

        submission = graphene.Field(SubmissionType)

    def mutate(self, info, id, title=None, content=None):
       
        return CreateSubmission(post=post)





class CreateLike:
    class Arguments:
        id = graphene.ID(required=True)
        title = graphene.String()
        content = graphene.String()

    submission = graphene.Field(LikeType)

    def mutate(self, info, id, title=None, content=None):
        try:
            post = Submission.objects.get(pk=id)
        except Post.DoesNotExist:
            raise Exception("Post not found")

        if title is not None:
            post.title = title
        if content is not None:
            post.content = content

        post.save()
        return UpdatePost(post=post)

class DeleteLike:



# Defining Queries
class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    question = graphene.List(QuestionType)
    testCase = graphene.List(TestCaseType)
    submission = graphene.List(SubmissionType)
    like = graphene.List(LikeType)

    def resolve_user(self, info): return User.objects.all()
    def resolve_question(self, info): return Question.objects.all()
    def resolve_testcase(self, info): return TestCase.objects.all()
    def resolve_submission(self, info): return Submission.objects.all()
    def resolve_like(self, info): return Like.objects.all()

# Defining Mutations
class Mutation(graphene.ObjectType):
    create_submission = CreateSubmission.Field()
    create_like = CreateLike.Field()
    delete_like = DeleteLike.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)


