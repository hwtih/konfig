# Generated by Django 5.0.4 on 2024-04-23 07:12

import uuid
from django.db import migrations
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chatbot_app", "0021_populate_uuid"),
    ]

    operations = [
        migrations.AlterField(
            model_name="chat",
            name="chat_id",
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]