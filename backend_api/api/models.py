from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
import uuid
from django.core.exceptions import ValidationError
from uuid import uuid4


class Role(models.Model):
    USER_ROLES = [
        ('admin', _('Admin')),
        ('hirbod', _('Hirbod')),
        ('province_boss', _('Province Boss')),
        ('province_master', _('Province Master')),
        ('coach', _('Coach')),
        ('guest', _('Guest')),
    ]
    name = models.CharField(max_length=20, choices=USER_ROLES, default='guest')
    def __str__(self):
        return self.name 
    class Meta:
        verbose_name = _('سمت')
        verbose_name_plural = _('سمت ها ')

class Province(models.Model):
    PROVINCE_CHOICES = [
        ('ardabil', _('Ardabil')),
        ('bushehr', _('Bushehr')),
        ('azarbaijan', _('East Azerbaijan')),
        ('isfahan', _('Isfahan')),
        ('fars', _('Fars')),
        ('gilan', _('Gilan')),
        ('golestan', _('Golestan')),
        ('hamadan', _('Hamadan')),
        ('hormozgan', _('Hormozgan')),
        ('ilam', _('Ilam')),
        ('kerman', _('Kerman')),
        ('kermanshah', _('Kermanshah')),
        ('north_khorasan', _('North Khorasan')),
        ('razavi_khorasan', _('Razavi Khorasan')),
        ('south_khorasan', _('South Khorasan')),
        ('khuzestan', _('Khuzestan')),
        ('kohgiluyeh_and_boyer_ahmad', _('Kohgiluyeh and Boyer-Ahmad')),
        ('kordestan', _('Kordestan')),
        ('lorestan', _('Lorestan')),
        ('markazi', _('Markazi')),
        ('mazandaran', _('Mazandaran')),
        ('qazvin', _('Qazvin')),
        ('qom', _('Qom')),
        ('semnan', _('Semnan')),
        ('sistan_and_baluchestan', _('Sistan and Baluchestan')),
        ('tehran', _('Tehran')),
        ('yazd', _('Yazd')),
        ('zanjan', _('Zanjan')),
        ('alborz', _('Alborz')),
        ('west_azarbaijan', _('West Azerbaijan')),
        ('charmahal_and_bakhtiari', _('Chaharmahal and Bakhtiari')),
    ]

    name = models.CharField(_('province name'), max_length=100, choices=PROVINCE_CHOICES)
    created = models.DateTimeField(_("created"), auto_now_add=True)
    updated = models.DateTimeField(_("updated"), auto_now=True)
    
    class Meta:
        verbose_name = _('استان')
        verbose_name_plural = _('استانها')
    def __str__(self):
        return self.name



class BeltLicense(models.Model):
    BELT_CHOICES = (
        ('YELLOW', _('Yellow')),
        ('ORANGE', _('Orange')),
        ('GREEN', _('Green')),
        ('TURQUOISE', _('Turquoise')),
        ('RED', _('Red')),
        ('BROWN', _('brown')),
        ('BLACK', _('Black')),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, choices=BELT_CHOICES, default='yellow')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created = models.DateTimeField(_("created"), auto_now_add=True)
    license_image = models.ImageField(_('license_image'), upload_to="belt/license/", null=True, blank=True)
    updated = models.DateTimeField(_("updated"), auto_now=True)

    class Meta:
        verbose_name = _('حکم کمربند')
        verbose_name_plural = _('احکام کمربند')
    
    def __str__(self):
        return self.name

class User(AbstractUser):
    
    USER_ROLES = [
        ('admin', _('Admin')),
        ('hirbod', _('Hirbod')),
        ('province_boss', _('Province Boss')),
        ('province_master', _('Province Master')),
        ('coach', _('Coach')),
        ('guest', _('Guest')),
    ]
    role = models.CharField(max_length=30, choices=USER_ROLES, default='guest')
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)
    

    
class Profile(models.Model):
    GENDER_CHOICES = [
        ('male', _('Male')),
        ('female', _('Female')),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE , related_name= "profile")   
    role = models.CharField(max_length=30,)
    province = models.OneToOneField(Province, on_delete=models.CASCADE, null=True, blank=True, related_name='profile', verbose_name=_('province'))
    gender = models.CharField(_('gender'), max_length=7, choices=GENDER_CHOICES, null=True, blank=True)
    first_name = models.CharField(max_length=1000, null= True , blank=True)
    last_name = models.CharField(max_length=1000 ,null= True , blank=True  ) 
    national_id = models.CharField(_('national id'), max_length=10,null= True , blank=True)
    national_id_image = models.ImageField(_('national id image'),upload_to='national_id_images/',null= True , blank=True)
    image = models.ImageField(upload_to="user_images", default="default.jpg",null= True , blank=True)
    birth_date = models.DateField(_('birthday'),null=True, blank=True)
    phone_number = models.CharField(_('phone number'),max_length=11, null= True , blank=True)
    address = models.TextField(_('address'),null= True , blank=True)
    document = models.FileField(_('documents'),upload_to='documents/', null=True, blank=True)
    bio = models.CharField(max_length=100,null=True, blank=True)
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)



####
class Coach(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='coach')
    athlete = models.ManyToManyField('Athlete', related_name='athlete_coach', verbose_name=_('athletes'), blank=True)
    province = models.OneToOneField(  Province, on_delete=models.CASCADE, null=True, blank=True , related_name='coach', verbose_name=_('province'))
    coach_certificate = models.FileField(_('coach certificate'),  upload_to='certificates/',  null=True, blank=True)
    wallet = models.IntegerField(_('wallet'),  default=0)
    is_valid = models.BooleanField(_('is valid'),  default=False)
    is_active = models.BooleanField(_('is active'),  default=True)

    class Meta:
        verbose_name = _('مربی')
        verbose_name_plural = _('مربیان')

    def __str__(self):
        return self.user.email



class Hirbod(models.Model):
    user = models.OneToOneField( User, on_delete=models.CASCADE, related_name='hirbod', verbose_name=_('user'))
    hirbod_certificate = models.FileField(_('hirbod certificate'),upload_to='certificates/',  null=True, blank=True)
    wallet = models.IntegerField(_('wallet'), default=0)
    is_valid = models.BooleanField(_('is valid '), default=False)
    is_active = models.BooleanField(_('is active '), default=True)

    class Meta:
        verbose_name = _('هیربد')
        verbose_name_plural = _('هیربد')
    def __str__(self):
        return self.user.email



class ProvinceBoss(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='province_boss', verbose_name=_('user'))
    province = models.OneToOneField(Province, on_delete=models.CASCADE, null=True, blank=True , related_name='province_boss', verbose_name=_('province'))
    wallet = models.IntegerField(_('wallet'),default=0)
    is_valid = models.BooleanField(_('is valid'), default=False)
    is_active = models.BooleanField(_('is active'), default=True)

    class Meta:
        verbose_name = _('رییس هیئت استان')
        verbose_name_plural = _('روسای هیئت استان')
    def __str__(self):
        return self.user.email


class ProvinceMaster(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='province_master', verbose_name=_('user'))
    province = models.OneToOneField(Province, on_delete=models.CASCADE, null=True, blank=True , related_name='province_master', verbose_name=_('province')  )
    wallet = models.IntegerField(_('wallet'), default=0)
    is_valid = models.BooleanField(_('is valid'), default=False)
    is_active = models.BooleanField(_('is active'), default=True)

    class Meta:
        verbose_name = _('نماینده استان ')
        verbose_name_plural = _('نماینده استانها')
    def __str__(self):
        return self.user.email



class Athlete(models.Model):
    GENDER_CHOICES = [
        ('male', _('Male')),
        ('female', _('Female')),
    ]
    user = models.OneToOneField( User, on_delete=models.CASCADE, related_name='athlete', null=True, blank=True, verbose_name=_('user'))
    coach = models.OneToOneField(Coach, on_delete=models.CASCADE, related_name='athletes', verbose_name=_('coach'), null=True, blank=True)
    province = models.OneToOneField( Province, on_delete=models.CASCADE, related_name='athletes', verbose_name=_('province')) 
    gender = models.CharField(_("gender"),choices=GENDER_CHOICES, max_length=7)
    id = models.UUIDField(_("id"), primary_key=True, default=uuid.uuid4, editable=False)
    is_confirm_admin = models.BooleanField(_("admin confirm"), default=True)
    province_boss = models.OneToOneField( ProvinceBoss, on_delete=models.CASCADE, related_name='athletes', verbose_name=_("Chairman of the Board"), null=True, blank=True)
    province_master = models.OneToOneField(ProvinceMaster, on_delete=models.CASCADE, related_name='athletes', null=True, blank=True, verbose_name=_("Representative of the province"))
    hirbod = models.OneToOneField(Hirbod, on_delete=models.CASCADE, related_name='athletes', verbose_name=_("hirbod"), null=True, blank=True)
    athlete_BeltLicense = models.ForeignKey( BeltLicense, on_delete=models.CASCADE, related_name='athlete_beltlicenses', verbose_name=_("athlete's BeltLicense") )
    athlete_BeltLicense_doc = models.FileField(_("athlete BeltLicense doc"), upload_to="athlete/beltlicense", null=True, blank=True)
    athlete_BeltLicenseid = models.UUIDField(_("athlete BeltLicense id"), default=uuid.uuid4, editable=False)
    athlete_BeltLicensedate = models.DateTimeField(_("athlete Belt License date"), auto_now=True)
    payment_amount = models.DecimalField(_("payment amount"), max_digits=10, decimal_places=2)
    payment_status = models.BooleanField(_("payment status"), default=False)
    is_confirmed_coach = models.BooleanField(_("coach confirmed"), default=True)
    is_confirmed_master = models.BooleanField(_("master confirmed"), default=False)
    is_confirmed_boss = models.BooleanField(_("boss confirmed"), default=False)
    is_confirmed_hirbod = models.BooleanField(_("hirbod confirmed"), default=False)
    first_name = models.CharField(_("name"), max_length=100)
    last_name = models.CharField(_("lastname"), max_length=100)
    email = models.EmailField(_("email"), unique=True)
    national_code = models.CharField(_("national code"), unique=True, max_length=10)
    national_card = models.ImageField(upload_to="athlete/national_card", null=True, blank=True)
    profile_image = models.ImageField(upload_to="athlete/avatar", null=True, blank=True)
    father_name = models.CharField(_("father name"), max_length=100)
    birthday = models.DateField(_("birthday"))
    created = models.DateTimeField(_("created"), auto_now_add=True)
    updated = models.DateTimeField(_("updated"), auto_now=True)
    phone_number = models.CharField(_("phone number"), max_length=20, unique=True, null=True, blank=True )

    def save(self, *args, **kwargs):
        if self.athlete_BeltLicense and not self.payment_status:
            raise ValidationError("Payment is not added")
        elif self.athlete_BeltLicense and self.payment_status:
            self.coach.wallet += self.payment_amount * 0.20
            self.coach.province_master.wallet += self.payment_amount * 0.10
            self.coach.province_boss.wallet += self.payment_amount * 0.10
            self.coach.save()
            self.coach.province_master.save()
            self.coach.province_boss.save()
        super().save(*args, **kwargs)
    
    class Meta:
        verbose_name = _('َهنرجو')
        verbose_name_plural = _('َهنرجوها')