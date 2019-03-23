"""Added snippet model

Revision ID: f8f2c91b33ee
Revises: 62dd2971b2d4
Create Date: 2019-03-22 20:02:31.932865

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8f2c91b33ee'
down_revision = '62dd2971b2d4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('snippet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('snippet_id', sa.String(length=32), nullable=True),
    sa.Column('snippet_name', sa.String(length=150), nullable=True),
    sa.Column('language', sa.String(length=150), nullable=True),
    sa.Column('codemirror_mode', sa.String(length=50), nullable=True),
    sa.Column('description', sa.String(length=1500), nullable=True),
    sa.Column('snippet_content', sa.String(length=50000), nullable=True),
    sa.Column('tags', sa.String(length=500), nullable=True),
    sa.Column('pinned', sa.Boolean(), nullable=True),
    sa.Column('added_on', sa.DateTime(), nullable=True),
    sa.Column('last_modified', sa.DateTime(), nullable=True),
    sa.Column('times_viewed', sa.Integer(), nullable=True),
    sa.Column('last_viewed', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_snippet_user_id'), 'snippet', ['user_id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_snippet_user_id'), table_name='snippet')
    op.drop_table('snippet')
    # ### end Alembic commands ###
