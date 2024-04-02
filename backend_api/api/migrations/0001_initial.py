# Generated by Django 4.0.1 on 2024-03-15 15:14

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Athlete',
            fields=[
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=7, verbose_name='gender')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='id')),
                ('is_confirm_admin', models.BooleanField(default=True, verbose_name='admin confirm')),
                ('athlete_BeltLicense_doc', models.FileField(blank=True, null=True, upload_to='athlete/beltlicense', verbose_name='athlete BeltLicense doc')),
                ('athlete_BeltLicenseid', models.UUIDField(default=uuid.uuid4, editable=False, verbose_name='athlete BeltLicense id')),
                ('athlete_BeltLicensedate', models.DateTimeField(auto_now=True, verbose_name='athlete Belt License date')),
                ('payment_amount', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='payment amount')),
                ('payment_status', models.BooleanField(default=False, verbose_name='payment status')),
                ('is_confirmed_coach', models.BooleanField(default=True, verbose_name='coach confirmed')),
                ('is_confirmed_master', models.BooleanField(default=False, verbose_name='master confirmed')),
                ('is_confirmed_boss', models.BooleanField(default=False, verbose_name='boss confirmed')),
                ('is_confirmed_hirbod', models.BooleanField(default=False, verbose_name='hirbod confirmed')),
                ('first_name', models.CharField(max_length=100, verbose_name='name')),
                ('last_name', models.CharField(max_length=100, verbose_name='lastname')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email')),
                ('national_code', models.CharField(max_length=10, unique=True, verbose_name='national code')),
                ('national_card', models.ImageField(blank=True, null=True, upload_to='athlete/national_card')),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='athlete/avatar')),
                ('father_name', models.CharField(max_length=100, verbose_name='father name')),
                ('birthday', models.DateField(verbose_name='birthday')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
                ('phone_number', models.CharField(blank=True, max_length=20, null=True, unique=True, verbose_name='phone number')),
            ],
            options={
                'verbose_name': 'َهنرجو',
                'verbose_name_plural': 'َهنرجوها',
            },
        ),
        migrations.CreateModel(
            name='BeltLicense',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(choices=[('YELLOW', 'Yellow'), ('ORANGE', 'Orange'), ('GREEN', 'Green'), ('TURQUOISE', 'Turquoise'), ('RED', 'Red'), ('BROWN', 'brown'), ('BLACK', 'Black')], default='yellow', max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('license_image', models.ImageField(blank=True, null=True, upload_to='belt/license/', verbose_name='license_image')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
            ],
            options={
                'verbose_name': 'حکم کمربند',
                'verbose_name_plural': 'احکام کمربند',
            },
        ),
        migrations.CreateModel(
            name='Province',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('ardabil', 'Ardabil'), ('bushehr', 'Bushehr'), ('azarbaijan', 'East Azerbaijan'), ('isfahan', 'Isfahan'), ('fars', 'Fars'), ('gilan', 'Gilan'), ('golestan', 'Golestan'), ('hamadan', 'Hamadan'), ('hormozgan', 'Hormozgan'), ('ilam', 'Ilam'), ('kerman', 'Kerman'), ('kermanshah', 'Kermanshah'), ('north_khorasan', 'North Khorasan'), ('razavi_khorasan', 'Razavi Khorasan'), ('south_khorasan', 'South Khorasan'), ('khuzestan', 'Khuzestan'), ('kohgiluyeh_and_boyer_ahmad', 'Kohgiluyeh and Boyer-Ahmad'), ('kordestan', 'Kordestan'), ('lorestan', 'Lorestan'), ('markazi', 'Markazi'), ('mazandaran', 'Mazandaran'), ('qazvin', 'Qazvin'), ('qom', 'Qom'), ('semnan', 'Semnan'), ('sistan_and_baluchestan', 'Sistan and Baluchestan'), ('tehran', 'Tehran'), ('yazd', 'Yazd'), ('zanjan', 'Zanjan'), ('alborz', 'Alborz'), ('west_azarbaijan', 'West Azerbaijan'), ('charmahal_and_bakhtiari', 'Chaharmahal and Bakhtiari')], max_length=100, verbose_name='province name')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
            ],
            options={
                'verbose_name': 'استان',
                'verbose_name_plural': 'استانها',
            },
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('admin', 'Admin'), ('hirbod', 'Hirbod'), ('province_boss', 'Province Boss'), ('province_master', 'Province Master'), ('coach', 'Coach'), ('guest', 'Guest')], default='guest', max_length=20)),
            ],
            options={
                'verbose_name': 'سمت',
                'verbose_name_plural': 'سمت ها ',
            },
        ),
        migrations.CreateModel(
            name='ProvinceMaster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wallet', models.IntegerField(default=0, verbose_name='wallet')),
                ('is_valid', models.BooleanField(default=False, verbose_name='is valid')),
                ('is_active', models.BooleanField(default=True, verbose_name='is active')),
                ('province', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='province_master', to='api.province', verbose_name='province')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='province_master', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name': 'نماینده استان ',
                'verbose_name_plural': 'نماینده استانها',
            },
        ),
        migrations.CreateModel(
            name='ProvinceBoss',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wallet', models.IntegerField(default=0, verbose_name='wallet')),
                ('is_valid', models.BooleanField(default=False, verbose_name='is valid')),
                ('is_active', models.BooleanField(default=True, verbose_name='is active')),
                ('province', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='province_boss', to='api.province', verbose_name='province')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='province_boss', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name': 'رییس هیئت استان',
                'verbose_name_plural': 'روسای هیئت استان',
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=20)),
                ('gender', models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female')], max_length=7, null=True, verbose_name='gender')),
                ('full_name', models.CharField(max_length=1000)),
                ('national_id', models.CharField(max_length=10, verbose_name='national id')),
                ('national_id_image', models.ImageField(upload_to='national_id_images/', verbose_name='national id image')),
                ('image', models.ImageField(default='default.jpg', upload_to='user_images')),
                ('birth_date', models.DateField(blank=True, null=True, verbose_name='birthday')),
                ('phone_number', models.CharField(max_length=11, verbose_name='phone number')),
                ('address', models.TextField(verbose_name='address')),
                ('document', models.FileField(blank=True, null=True, upload_to='documents/', verbose_name='documents')),
                ('bio', models.CharField(max_length=100)),
                ('verified', models.BooleanField(default=False)),
                ('province', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile', to='api.province', verbose_name='province')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Hirbod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hirbod_certificate', models.FileField(blank=True, null=True, upload_to='certificates/', verbose_name='hirbod certificate')),
                ('wallet', models.IntegerField(default=0, verbose_name='wallet')),
                ('is_valid', models.BooleanField(default=False, verbose_name='is valid ')),
                ('is_active', models.BooleanField(default=True, verbose_name='is active ')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hirbod', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name': 'هیربد',
                'verbose_name_plural': 'هیربد',
            },
        ),
        migrations.CreateModel(
            name='Coach',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coach_certificate', models.FileField(blank=True, null=True, upload_to='certificates/', verbose_name='coach certificate')),
                ('wallet', models.IntegerField(default=0, verbose_name='wallet')),
                ('is_valid', models.BooleanField(default=False, verbose_name='is valid')),
                ('is_active', models.BooleanField(default=True, verbose_name='is active')),
                ('athlete', models.ManyToManyField(blank=True, related_name='athlete_coach', to='api.Athlete', verbose_name='athletes')),
                ('province', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='coach', to='api.province', verbose_name='province')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='coach', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'مربی',
                'verbose_name_plural': 'مربیان',
            },
        ),
        migrations.AddField(
            model_name='athlete',
            name='athlete_BeltLicense',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='athlete_beltlicenses', to='api.beltlicense', verbose_name="athlete's BeltLicense"),
        ),
        migrations.AddField(
            model_name='athlete',
            name='coach',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='athletes', to='api.coach', verbose_name='coach'),
        ),
        migrations.AddField(
            model_name='athlete',
            name='hirbod',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='athletes', to='api.hirbod', verbose_name='hirbod'),
        ),
        migrations.AddField(
            model_name='athlete',
            name='province',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='athletes', to='api.province', verbose_name='province'),
        ),
        migrations.AddField(
            model_name='athlete',
            name='province_boss',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='athletes', to='api.provinceboss', verbose_name='Chairman of the Board'),
        ),
        migrations.AddField(
            model_name='athlete',
            name='province_master',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='athletes', to='api.provincemaster', verbose_name='Representative of the province'),
        ),
        migrations.AddField(
            model_name='athlete',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='athlete', to=settings.AUTH_USER_MODEL, verbose_name='user'),
        ),
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.ManyToManyField(max_length=20, related_name='user', to='api.Role', verbose_name='role'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]
