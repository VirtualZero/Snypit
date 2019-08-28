"""empty message

Revision ID: dad4ad43b6bd
Revises: e0c0cd098c08
Create Date: 2019-08-28 17:28:05.556525

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dad4ad43b6bd'
down_revision = 'e0c0cd098c08'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('vzin', sa.String(length=8), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=True),
    sa.Column('username', sa.String(length=20), nullable=True),
    sa.Column('pw_hash', sa.String(length=300), nullable=True),
    sa.Column('editor_theme', sa.String(length=50), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.Column('account_created_on', sa.DateTime(), nullable=True),
    sa.Column('account_cancelled_on', sa.DateTime(), nullable=True),
    sa.Column('agreed_to_tos', sa.Boolean(), nullable=True),
    sa.Column('account_created_from_ip', sa.String(length=45), nullable=True),
    sa.Column('locale', sa.String(length=5), server_default='en', nullable=False),
    sa.Column('login_count', sa.Integer(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('verify_email_token', sa.String(length=300), nullable=True),
    sa.Column('email_confirmed', sa.Boolean(), nullable=True),
    sa.Column('email_confirmed_on', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=False)
    op.create_index(op.f('ix_user_is_admin'), 'user', ['is_admin'], unique=False)
    op.create_table('accountactivity',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('login', sa.DateTime(), nullable=True),
    sa.Column('logout', sa.DateTime(), nullable=True),
    sa.Column('login_from_ip', sa.String(length=45), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_accountactivity_user_id'), 'accountactivity', ['user_id'], unique=False)
    op.create_table('pwtoken',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('pw_reset_token', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_pwtoken_user_id'), 'pwtoken', ['user_id'], unique=False)
    op.create_table('snippet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('vzsid', sa.String(length=32), nullable=True),
    sa.Column('snippet_name', sa.String(length=150), nullable=True),
    sa.Column('language', sa.String(length=150), nullable=True),
    sa.Column('language_icon', sa.String(length=150), nullable=True),
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
    op.drop_index(op.f('ix_pwtoken_user_id'), table_name='pwtoken')
    op.drop_table('pwtoken')
    op.drop_index(op.f('ix_accountactivity_user_id'), table_name='accountactivity')
    op.drop_table('accountactivity')
    op.drop_index(op.f('ix_user_is_admin'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###
