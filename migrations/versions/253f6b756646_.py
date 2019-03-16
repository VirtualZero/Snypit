"""empty message

Revision ID: 253f6b756646
Revises: 
Create Date: 2019-03-16 14:39:58.925759

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '253f6b756646'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=150), nullable=True),
    sa.Column('first_name', sa.String(length=150), nullable=True),
    sa.Column('last_name', sa.String(length=150), nullable=True),
    sa.Column('pw_hash', sa.String(length=150), nullable=True),
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
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_accountactivity_user_id'), table_name='accountactivity')
    op.drop_table('accountactivity')
    op.drop_index(op.f('ix_user_is_admin'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###
