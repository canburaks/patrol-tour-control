
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.23.0
 * Query Engine version: adf5e8cba3daf12d456d911d72b6e9418681b28b
 */
Prisma.prismaVersion = {
  client: "2.23.0",
  engine: "adf5e8cba3daf12d456d911d72b6e9418681b28b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.EvolutionsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  titleDown: 'titleDown',
  description: 'description',
  batch: 'batch',
  checksum: 'checksum',
  status: 'status',
  created: 'created',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.AbonealarmdurumlariScalarFieldEnum = makeEnum({
  id: 'id',
  aboneid: 'aboneid',
  f_kodu: 'f_kodu',
  partno: 'partno',
  KOD: 'KOD',
  duzeldi: 'duzeldi',
  tarih: 'tarih',
  mesajsira: 'mesajsira'
});

exports.Prisma.AbonecarihareketlerScalarFieldEnum = makeEnum({
  ID: 'ID',
  ABONEID: 'ABONEID',
  TARIH: 'TARIH',
  ODEMETIPI: 'ODEMETIPI',
  ACIKLAMA: 'ACIKLAMA',
  B_A: 'B_A',
  ALACAK: 'ALACAK',
  BORC: 'BORC',
  VADETARIHI: 'VADETARIHI',
  BORCLANDIRMAID: 'BORCLANDIRMAID',
  fistipi: 'fistipi',
  fisno: 'fisno'
});

exports.Prisma.AbonehatkontrolleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  f_kodu: 'f_kodu',
  partno: 'partno',
  takipsuresi: 'takipsuresi',
  baslamazamani: 'baslamazamani',
  maxadet: 'maxadet',
  mevcutadet: 'mevcutadet',
  sontakipzamani: 'sontakipzamani',
  hattipid: 'hattipid',
  sontestkontrolzamani: 'sontestkontrolzamani',
  hattelno: 'hattelno',
  hatipno: 'hatipno',
  hatcidno: 'hatcidno',
  hatsabotajkontrol: 'hatsabotajkontrol',
  hatsimno: 'hatsimno',
  gtestsaati: 'gtestsaati'
});

exports.Prisma.AbonelikborclariScalarFieldEnum = makeEnum({
  ID: 'ID',
  TARIH: 'TARIH',
  ACIKLAMA: 'ACIKLAMA',
  AY: 'AY',
  YIL: 'YIL',
  fisno: 'fisno'
});

exports.Prisma.AboneliklerScalarFieldEnum = makeEnum({
  ID: 'ID',
  f_kodu: 'f_kodu',
  partno: 'partno',
  hesaptipId: 'hesaptipId',
  baslamatarihi: 'baslamatarihi',
  bitistarihi: 'bitistarihi',
  ucret: 'ucret',
  doviztipi: 'doviztipi',
  periyodu: 'periyodu',
  ilkyilucret: 'ilkyilucret',
  aciklama: 'aciklama',
  tahsilatturid: 'tahsilatturid',
  sonhatirlatmazamani: 'sonhatirlatmazamani'
});

exports.Prisma.Abonelikler_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  f_kodu: 'f_kodu',
  partno: 'partno',
  hesaptipId: 'hesaptipId',
  baslamatarihi: 'baslamatarihi',
  bitistarihi: 'bitistarihi',
  ucret: 'ucret',
  doviztipi: 'doviztipi',
  periyodu: 'periyodu',
  ilkyilucret: 'ilkyilucret',
  aciklama: 'aciklama',
  tahsilatturid: 'tahsilatturid',
  sonhatirlatmazamani: 'sonhatirlatmazamani'
});

exports.Prisma.AbonemevcutsmskredidurumuScalarFieldEnum = makeEnum({
  id: 'id',
  f_kodu: 'f_kodu',
  partno: 'partno',
  mevcutkredi: 'mevcutkredi',
  kullanilankredi: 'kullanilankredi',
  yuklenenkredi: 'yuklenenkredi',
  uyariseviye1: 'uyariseviye1',
  uyariseviye2: 'uyariseviye2',
  uyariseviye3: 'uyariseviye3'
});

exports.Prisma.AboneozeldurumScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SINYALTIPI: 'SINYALTIPI',
  ALARM: 'ALARM',
  SMS: 'SMS',
  EPOSTA: 'EPOSTA',
  IVR: 'IVR',
  PUSHMESSAGE: 'PUSHMESSAGE',
  SMSgidecekler: 'SMSgidecekler',
  epostagidecekler: 'epostagidecekler',
  ivrdanaranacaklar: 'ivrdanaranacaklar'
});

exports.Prisma.AbonepartlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.AbonetatilleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  BASLAMATARIHI: 'BASLAMATARIHI',
  BITISTARIHI: 'BITISTARIHI',
  ACIKLAMA: 'ACIKLAMA',
  GENELTATILID: 'GENELTATILID',
  GENELTATILUYGULA: 'GENELTATILUYGULA'
});

exports.Prisma.Abonetatilleri_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  BASLAMATARIHI: 'BASLAMATARIHI',
  BITISTARIHI: 'BITISTARIHI',
  ACIKLAMA: 'ACIKLAMA',
  GENELTATILID: 'GENELTATILID',
  GENELTATILUYGULA: 'GENELTATILUYGULA'
});

exports.Prisma.AbonetelnolariScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  CID: 'CID'
});

exports.Prisma.AbonetipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.AboneuzakkullanicilariScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  KULLANICIADI: 'KULLANICIADI',
  WEBSIFRE: 'WEBSIFRE',
  ADISOYADI: 'ADISOYADI',
  TEL1: 'TEL1',
  EPOSTA: 'EPOSTA',
  YETKIGRUBU: 'YETKIGRUBU',
  YETKIALANLARI: 'YETKIALANLARI',
  MOBILSIFRE: 'MOBILSIFRE',
  IVRSIFRE: 'IVRSIFRE'
});

exports.Prisma.AboneyuklenensmskredileriScalarFieldEnum = makeEnum({
  id: 'id',
  f_kodu: 'f_kodu',
  partno: 'partno',
  tarih: 'tarih',
  aciklama: 'aciklama',
  kredi: 'kredi',
  ucret: 'ucret'
});

exports.Prisma.AbonezamanlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  GUN: 'GUN',
  ACILIS: 'ACILIS',
  KAPANIS: 'KAPANIS',
  YAZKAPANIS: 'YAZKAPANIS',
  KAPALI: 'KAPALI',
  KAPALIBASLAMA: 'KAPALIBASLAMA',
  KAPALIBITIS: 'KAPALIBITIS',
  GECACTOLERANS: 'GECACTOLERANS',
  GECKAPATOLERANS: 'GECKAPATOLERANS',
  MESAIDISITOLERANS: 'MESAIDISITOLERANS',
  ERKENACTOLERANS: 'ERKENACTOLERANS',
  OTM_KURULUM: 'OTM_KURULUM',
  AKAPANIS: 'AKAPANIS'
});

exports.Prisma.Abonezamanlar_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  GUN: 'GUN',
  ACILIS: 'ACILIS',
  KAPANIS: 'KAPANIS',
  AKAPANIS: 'AKAPANIS',
  YAZKAPANIS: 'YAZKAPANIS',
  KAPALI: 'KAPALI',
  KAPALIBASLAMA: 'KAPALIBASLAMA',
  KAPALIBITIS: 'KAPALIBITIS',
  GECACTOLERANS: 'GECACTOLERANS',
  GECKAPATOLERANS: 'GECKAPATOLERANS',
  MESAIDISITOLERANS: 'MESAIDISITOLERANS',
  ERKENACTOLERANS: 'ERKENACTOLERANS',
  OTM_KURULUM: 'OTM_KURULUM'
});

exports.Prisma.Abonezamanlar_copyScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  GUN: 'GUN',
  ACILIS: 'ACILIS',
  KAPANIS: 'KAPANIS',
  YAZKAPANIS: 'YAZKAPANIS',
  KAPALI: 'KAPALI',
  KAPALIBASLAMA: 'KAPALIBASLAMA',
  KAPALIBITIS: 'KAPALIBITIS',
  GECACTOLERANS: 'GECACTOLERANS',
  GECKAPATOLERANS: 'GECKAPATOLERANS',
  MESAIDISITOLERANS: 'MESAIDISITOLERANS',
  ERKENACTOLERANS: 'ERKENACTOLERANS',
  OTM_KURULUM: 'OTM_KURULUM',
  AKAPANIS: 'AKAPANIS'
});

exports.Prisma.AccountsScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  TELNO: 'TELNO',
  COMNO: 'COMNO',
  LINENO: 'LINENO',
  CLL_SIRANO: 'CLL_SIRANO',
  OPL_SIRANO: 'OPL_SIRANO',
  VF_REFID: 'VF_REFID',
  VF_SERI: 'VF_SERI',
  VF_TARIH: 'VF_TARIH'
});

exports.Prisma.AlarmbolgetanimlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  SIRA: 'SIRA',
  ACIKLAMA: 'ACIKLAMA',
  RESIM: 'RESIM'
});

exports.Prisma.AlarmmerkezleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  FIRMAADI: 'FIRMAADI',
  YETKILI1: 'YETKILI1',
  YETKILI2: 'YETKILI2',
  ADRES1: 'ADRES1',
  ADRES2: 'ADRES2',
  ILCE: 'ILCE',
  IL: 'IL',
  PKODU: 'PKODU',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  WEB: 'WEB',
  ANTET: 'ANTET',
  EMAIL_ADRESS: 'EMAIL_ADRESS',
  and_ap_key: 'and_ap_key',
  ios_ap_key: 'ios_ap_key'
});

exports.Prisma.AnlasmatipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  ACIKLAMA: 'ACIKLAMA',
  periyodu: 'periyodu'
});

exports.Prisma.ArizalisinyallerScalarFieldEnum = makeEnum({
  TARIH: 'TARIH',
  COM: 'COM',
  ISLENDI: 'ISLENDI',
  MESAJ: 'MESAJ',
  SIRA: 'SIRA',
  IP_SERI: 'IP_SERI'
});

exports.Prisma.At_altolaykodlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ZT_KODU: 'ZT_KODU',
  OLAYKODU: 'OLAYKODU',
  BOLGENO: 'BOLGENO',
  OLAYACIKLAMASI: 'OLAYACIKLAMASI',
  USTOLAYKODU: 'USTOLAYKODU',
  SORUMLU: 'SORUMLU'
});

exports.Prisma.At_altolaykodlari_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  ZT_KODU: 'ZT_KODU',
  OLAYKODU: 'OLAYKODU',
  BOLGENO: 'BOLGENO',
  OLAYACIKLAMASI: 'OLAYACIKLAMASI',
  USTOLAYKODU: 'USTOLAYKODU',
  SORUMLU: 'SORUMLU'
});

exports.Prisma.At_olaykodlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ZT_KODU: 'ZT_KODU',
  OLAYKODU: 'OLAYKODU',
  SORUMLU: 'SORUMLU',
  BOLGENO: 'BOLGENO',
  TIP: 'TIP',
  ALARM: 'ALARM'
});

exports.Prisma.At_olaykodlari_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  ZT_KODU: 'ZT_KODU',
  OLAYKODU: 'OLAYKODU',
  SORUMLU: 'SORUMLU',
  BOLGENO: 'BOLGENO',
  TIP: 'TIP',
  ALARM: 'ALARM'
});

exports.Prisma.Bayi_teknisyenlerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  PAROLA: 'PAROLA',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  KULLANICIKODU: 'KULLANICIKODU',
  SMS: 'SMS',
  EPOSTA: 'EPOSTA',
  EPOSTADURUM: 'EPOSTADURUM'
});

exports.Prisma.Bayi_teknisyenler_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  PAROLA: 'PAROLA',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  KULLANICIKODU: 'KULLANICIKODU',
  SMS: 'SMS',
  EPOSTA: 'EPOSTA',
  EPOSTADURUM: 'EPOSTADURUM'
});

exports.Prisma.BayiabonelikhizmetpaketleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  bayiId: 'bayiId',
  aboneliktipId: 'aboneliktipId',
  stokhizmetpaketId: 'stokhizmetpaketId',
  ucret: 'ucret',
  doviztipi: 'doviztipi',
  periyodu: 'periyodu',
  ilkyilucret: 'ilkyilucret',
  aciklama: 'aciklama',
  tahsilatturid: 'tahsilatturid',
  sonhatirlatmazamani: 'sonhatirlatmazamani'
});

exports.Prisma.BayicariScalarFieldEnum = makeEnum({
  ID: 'ID',
  BAYIID: 'BAYIID',
  TARIH: 'TARIH',
  ODEMETIPI: 'ODEMETIPI',
  ACIKLAMA: 'ACIKLAMA',
  B_A: 'B_A',
  ALACAK: 'ALACAK',
  BORC: 'BORC',
  VADETARIHI: 'VADETARIHI',
  BORCLANDIRMAID: 'BORCLANDIRMAID',
  ABONECARIID: 'ABONECARIID'
});

exports.Prisma.BayihesaplariScalarFieldEnum = makeEnum({
  ID: 'ID',
  BAYIID: 'BAYIID',
  HESAPADI: 'HESAPADI',
  PERIYOD: 'PERIYOD',
  GONDERIMSAATI: 'GONDERIMSAATI',
  RAPORLAMATURU: 'RAPORLAMATURU',
  DUZELMEKONTROL: 'DUZELMEKONTROL',
  DONEM: 'DONEM'
});

exports.Prisma.BayilerScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ADI: 'ADI',
  YETKILI1: 'YETKILI1',
  YETKILI2: 'YETKILI2',
  ADRES1: 'ADRES1',
  ADRES2: 'ADRES2',
  PKODU: 'PKODU',
  ILCE: 'ILCE',
  IL: 'IL',
  ULKE: 'ULKE',
  YETKILI1EMAIL: 'YETKILI1EMAIL',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  SFIYAT: 'SFIYAT',
  AFIYAT: 'AFIYAT',
  LISTELENSIN: 'LISTELENSIN',
  YETKILI1TEL: 'YETKILI1TEL',
  YETKILI2TEL: 'YETKILI2TEL',
  YETKILI1CEP: 'YETKILI1CEP',
  YETKILI2CEP: 'YETKILI2CEP',
  YETKILI2EMAIL: 'YETKILI2EMAIL',
  EMAIL: 'EMAIL',
  VDAIRE: 'VDAIRE',
  VNO: 'VNO',
  KK_BANKAADI: 'KK_BANKAADI',
  KK_KARTNO: 'KK_KARTNO',
  KK_SONKULTAR: 'KK_SONKULTAR',
  KK_KARTGUVNO: 'KK_KARTGUVNO',
  ODEMETURU: 'ODEMETURU',
  KK_KARTSAHIBI: 'KK_KARTSAHIBI',
  UCRETSEVIYE1: 'UCRETSEVIYE1',
  UCRETSEVIYE2: 'UCRETSEVIYE2',
  UCRETSEVIYE3: 'UCRETSEVIYE3',
  UCRETSEVIYE4: 'UCRETSEVIYE4',
  UCRETSEVIYE5: 'UCRETSEVIYE5',
  UCRETSEVIYE6: 'UCRETSEVIYE6',
  PAROLA: 'PAROLA',
  WEBILKGIRIS: 'WEBILKGIRIS',
  LOGO: 'LOGO',
  SMS: 'SMS',
  PROSEDUR: 'PROSEDUR',
  ABNSONU_SMS: 'ABNSONU_SMS',
  ABNSONU_EPOSTA: 'ABNSONU_EPOSTA',
  PERIYOD: 'PERIYOD',
  GUN: 'GUN',
  GONDERIMSAATI: 'GONDERIMSAATI',
  FIYAT: 'FIYAT',
  PAROLAZORUNLU: 'PAROLAZORUNLU',
  HESAPTARIHI: 'HESAPTARIHI',
  SMSBUHESAPTANGITSIN: 'SMSBUHESAPTANGITSIN',
  RAPORBAYIBILGISI: 'RAPORBAYIBILGISI',
  ILKABONENO: 'ILKABONENO',
  SONABONENO: 'SONABONENO',
  ABONENOKACHANE: 'ABONENOKACHANE',
  ABONENOHEXOLSUN: 'ABONENOHEXOLSUN',
  SERVISFORMUSMSGONDER: 'SERVISFORMUSMSGONDER',
  SMS_AYARID: 'SMS_AYARID',
  SMS_BAYI: 'SMS_BAYI',
  FIYATGRUBU: 'FIYATGRUBU',
  eps_GORUNECEKISIM: 'eps_GORUNECEKISIM',
  eps_EMAILADRESI: 'eps_EMAILADRESI',
  eps_POPNAME: 'eps_POPNAME',
  eps_POPPORT: 'eps_POPPORT',
  eps_HOSTNAME: 'eps_HOSTNAME',
  eps_HOSTPORT: 'eps_HOSTPORT',
  eps_USERNAME: 'eps_USERNAME',
  eps_PAROLA: 'eps_PAROLA',
  eps_CEVAPADRESI: 'eps_CEVAPADRESI',
  eps_BILGIADRESI: 'eps_BILGIADRESI',
  eps_SIFRELEME: 'eps_SIFRELEME',
  eps_SSLVERSION: 'eps_SSLVERSION',
  eps_KIMLIKDOGRULAMA: 'eps_KIMLIKDOGRULAMA',
  eps_BUHESAPTANGITSIN: 'eps_BUHESAPTANGITSIN',
  eps_SIFRELEMETURU: 'eps_SIFRELEMETURU',
  eps_SSLVAR: 'eps_SSLVAR',
  telcevirmekodu: 'telcevirmekodu'
});

exports.Prisma.Bayiler_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ADI: 'ADI',
  YETKILI1: 'YETKILI1',
  YETKILI2: 'YETKILI2',
  ADRES1: 'ADRES1',
  ADRES2: 'ADRES2',
  PKODU: 'PKODU',
  ILCE: 'ILCE',
  IL: 'IL',
  ULKE: 'ULKE',
  YETKILI1EMAIL: 'YETKILI1EMAIL',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  SFIYAT: 'SFIYAT',
  AFIYAT: 'AFIYAT',
  LISTELENSIN: 'LISTELENSIN',
  YETKILI1TEL: 'YETKILI1TEL',
  YETKILI2TEL: 'YETKILI2TEL',
  YETKILI1CEP: 'YETKILI1CEP',
  YETKILI2CEP: 'YETKILI2CEP',
  YETKILI2EMAIL: 'YETKILI2EMAIL',
  EMAIL: 'EMAIL',
  VDAIRE: 'VDAIRE',
  VNO: 'VNO',
  KK_BANKAADI: 'KK_BANKAADI',
  KK_KARTNO: 'KK_KARTNO',
  KK_SONKULTAR: 'KK_SONKULTAR',
  KK_KARTGUVNO: 'KK_KARTGUVNO',
  ODEMETURU: 'ODEMETURU',
  KK_KARTSAHIBI: 'KK_KARTSAHIBI',
  UCRETSEVIYE1: 'UCRETSEVIYE1',
  UCRETSEVIYE2: 'UCRETSEVIYE2',
  UCRETSEVIYE3: 'UCRETSEVIYE3',
  UCRETSEVIYE4: 'UCRETSEVIYE4',
  UCRETSEVIYE5: 'UCRETSEVIYE5',
  UCRETSEVIYE6: 'UCRETSEVIYE6',
  PAROLA: 'PAROLA',
  WEBILKGIRIS: 'WEBILKGIRIS',
  LOGO: 'LOGO',
  SMS: 'SMS',
  PROSEDUR: 'PROSEDUR',
  ABNSONU_SMS: 'ABNSONU_SMS',
  ABNSONU_EPOSTA: 'ABNSONU_EPOSTA',
  PERIYOD: 'PERIYOD',
  GUN: 'GUN',
  GONDERIMSAATI: 'GONDERIMSAATI',
  FIYAT: 'FIYAT',
  PAROLAZORUNLU: 'PAROLAZORUNLU',
  HESAPTARIHI: 'HESAPTARIHI',
  SMS_AYARID: 'SMS_AYARID',
  SMSBUHESAPTANGITSIN: 'SMSBUHESAPTANGITSIN',
  RAPORBAYIBILGISI: 'RAPORBAYIBILGISI',
  ILKABONENO: 'ILKABONENO',
  SONABONENO: 'SONABONENO',
  ABONENOKACHANE: 'ABONENOKACHANE',
  ABONENOHEXOLSUN: 'ABONENOHEXOLSUN',
  SERVISFORMUSMSGONDER: 'SERVISFORMUSMSGONDER',
  FIYATGRUBU: 'FIYATGRUBU',
  eps_GORUNECEKISIM: 'eps_GORUNECEKISIM',
  eps_EMAILADRESI: 'eps_EMAILADRESI',
  eps_POPNAME: 'eps_POPNAME',
  eps_POPPORT: 'eps_POPPORT',
  eps_HOSTNAME: 'eps_HOSTNAME',
  eps_HOSTPORT: 'eps_HOSTPORT',
  eps_USERNAME: 'eps_USERNAME',
  eps_PAROLA: 'eps_PAROLA',
  eps_CEVAPADRESI: 'eps_CEVAPADRESI',
  eps_BILGIADRESI: 'eps_BILGIADRESI',
  eps_SIFRELEME: 'eps_SIFRELEME',
  eps_SSLVERSION: 'eps_SSLVERSION',
  eps_KIMLIKDOGRULAMA: 'eps_KIMLIKDOGRULAMA',
  eps_BUHESAPTANGITSIN: 'eps_BUHESAPTANGITSIN',
  eps_SIFRELEMETURU: 'eps_SIFRELEMETURU',
  eps_SSLVAR: 'eps_SSLVAR'
});

exports.Prisma.BayimailbolgeleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  HESAPID: 'HESAPID',
  BOLGEID: 'BOLGEID'
});

exports.Prisma.BayimailmesleklerScalarFieldEnum = makeEnum({
  ID: 'ID',
  BAYIID: 'BAYIID',
  MESLEK: 'MESLEK'
});

exports.Prisma.BayimailsinyaltipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  HESAPID: 'HESAPID',
  SINYALTIPI: 'SINYALTIPI'
});

exports.Prisma.BirimtanimlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  aciklama: 'aciklama'
});

exports.Prisma.BolgelerScalarFieldEnum = makeEnum({
  ID: 'ID',
  BOLGE: 'BOLGE'
});

exports.Prisma.CarifistipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  KOD: 'KOD',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.CarikartlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  UNVANI: 'UNVANI',
  MAHALLE: 'MAHALLE',
  CADDE: 'CADDE',
  SOKAK: 'SOKAK',
  KAPINO: 'KAPINO',
  ADRESDETAY: 'ADRESDETAY',
  IL: 'IL',
  ILCE: 'ILCE',
  PKODU: 'PKODU',
  ULKE: 'ULKE',
  EMAIL1: 'EMAIL1',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  FAX1: 'FAX1',
  VDAIRESI: 'VDAIRESI',
  VNO: 'VNO',
  URL1: 'URL1',
  MESLEKGRUBU: 'MESLEKGRUBU',
  SATISFIYATI: 'SATISFIYATI',
  VADEFARKI: 'VADEFARKI',
  ISKONTO: 'ISKONTO',
  MUAFIYETGUN: 'MUAFIYETGUN',
  RISKLIMITI: 'RISKLIMITI',
  KREDILIMITI: 'KREDILIMITI',
  OZELKOD1: 'OZELKOD1',
  OZELKOD2: 'OZELKOD2',
  PASIF: 'PASIF',
  TIPI: 'TIPI',
  ACIKLAMA: 'ACIKLAMA',
  OTM_FATURA: 'OTM_FATURA',
  faturaid: 'faturaid',
  CARIKART: 'CARIKART'
});

exports.Prisma.CihazdurumlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  MRKONEK: 'MRKONEK',
  ABONEKODU: 'ABONEKODU',
  SONSINYALTARIHI: 'SONSINYALTARIHI',
  BAGLI: 'BAGLI',
  BILDIRILDI: 'BILDIRILDI',
  IP: 'IP',
  HATGUVENLIGI: 'HATGUVENLIGI',
  SignalType: 'SignalType'
});

exports.Prisma.CihazsmskomutlariScalarFieldEnum = makeEnum({
  id: 'id',
  cihazid: 'cihazid',
  komut: 'komut',
  aciklama: 'aciklama',
  ornekkomut: 'ornekkomut',
  cevap: 'cevap'
});

exports.Prisma.DegerlendirilmeyeceksinyallerScalarFieldEnum = makeEnum({
  ID: 'ID',
  f_kodu: 'f_kodu',
  partno: 'partno',
  alarmkodu: 'alarmkodu',
  kaydet: 'kaydet',
  sure: 'sure',
  zaman: 'zaman',
  aktif: 'aktif'
});

exports.Prisma.DegerlendirmesonuclariScalarFieldEnum = makeEnum({
  ID: 'ID',
  SIRA: 'SIRA',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.DovizkurisimleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ACIKLAMA: 'ACIKLAMA',
  SEMBOL: 'SEMBOL'
});

exports.Prisma.Email_emirleriScalarFieldEnum = makeEnum({
  id: 'id',
  emirzamani: 'emirzamani',
  emirtipi: 'emirtipi',
  mesaj: 'mesaj',
  islendi: 'islendi',
  mesajsirano: 'mesajsirano',
  email1: 'email1',
  email2: 'email2',
  email3: 'email3',
  email4: 'email4',
  email5: 'email5',
  bas_tar: 'bas_tar',
  bit_tar: 'bit_tar',
  bayi: 'bayi'
});

exports.Prisma.Email_gidenScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  DURUM: 'DURUM',
  GID_TAR: 'GID_TAR',
  GID_SAAT: 'GID_SAAT',
  GIT_TAR: 'GIT_TAR',
  GIT_SAAT: 'GIT_SAAT',
  EMAIL1: 'EMAIL1',
  EMAIL2: 'EMAIL2',
  EMAIL3: 'EMAIL3',
  EMAIL4: 'EMAIL4',
  EMAIL5: 'EMAIL5',
  EKLIDOSYALAR: 'EKLIDOSYALAR',
  MESAJ: 'MESAJ',
  KONU: 'KONU',
  MESAJSIRA: 'MESAJSIRA',
  ACIKLAMA: 'ACIKLAMA',
  TIP: 'TIP',
  oncelik: 'oncelik',
  denemesayisi: 'denemesayisi',
  bayi: 'bayi'
});

exports.Prisma.Email_giden_arizaliScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  DURUM: 'DURUM',
  GID_TAR: 'GID_TAR',
  GID_SAAT: 'GID_SAAT',
  GIT_TAR: 'GIT_TAR',
  GIT_SAAT: 'GIT_SAAT',
  EMAIL1: 'EMAIL1',
  EMAIL2: 'EMAIL2',
  EMAIL3: 'EMAIL3',
  EMAIL4: 'EMAIL4',
  EMAIL5: 'EMAIL5',
  EKLIDOSYALAR: 'EKLIDOSYALAR',
  MESAJ: 'MESAJ',
  KONU: 'KONU',
  MESAJSIRA: 'MESAJSIRA',
  ACIKLAMA: 'ACIKLAMA',
  TIP: 'TIP',
  oncelik: 'oncelik',
  bayi: 'bayi'
});

exports.Prisma.Email_gonderilenScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  DURUM: 'DURUM',
  GID_TAR: 'GID_TAR',
  GID_SAAT: 'GID_SAAT',
  GIT_TAR: 'GIT_TAR',
  GIT_SAAT: 'GIT_SAAT',
  EMAIL1: 'EMAIL1',
  EMAIL2: 'EMAIL2',
  EMAIL3: 'EMAIL3',
  EMAIL4: 'EMAIL4',
  EMAIL5: 'EMAIL5',
  EKLIDOSYALAR: 'EKLIDOSYALAR',
  MESAJ: 'MESAJ',
  KONU: 'KONU',
  ACIKLAMA: 'ACIKLAMA',
  oncelik: 'oncelik',
  bayi: 'bayi'
});

exports.Prisma.EmailayarlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  GORUNECEKISIM: 'GORUNECEKISIM',
  EMAILADRESI: 'EMAILADRESI',
  POPNAME: 'POPNAME',
  POPPORT: 'POPPORT',
  HOSTNAME: 'HOSTNAME',
  HOSTPORT: 'HOSTPORT',
  USERNAME: 'USERNAME',
  PAROLA: 'PAROLA',
  ICERIK: 'ICERIK',
  USTNOT: 'USTNOT',
  ALTNOT: 'ALTNOT',
  MAILTURU: 'MAILTURU',
  CEVAPADRESI: 'CEVAPADRESI',
  BILGIADRESI: 'BILGIADRESI',
  BASLIK: 'BASLIK',
  SIFRELEME: 'SIFRELEME',
  SSLVERSION: 'SSLVERSION',
  KIMLIKDOGRULAMA: 'KIMLIKDOGRULAMA',
  TIP: 'TIP',
  SSLVAR: 'SSLVAR',
  SIFRELEMETURU: 'SIFRELEMETURU'
});

exports.Prisma.ErtelenenmesajlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  SIRA: 'SIRA',
  CIHAZ: 'CIHAZ',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ALICIALET: 'ALICIALET',
  TELHATTI: 'TELHATTI',
  ALARMKODU: 'ALARMKODU',
  BOLGE: 'BOLGE',
  HAMSINYAL: 'HAMSINYAL',
  KULLANICI: 'KULLANICI',
  SONUC: 'SONUC',
  MESAJTIPI: 'MESAJTIPI',
  MESAJ: 'MESAJ',
  TARIH: 'TARIH',
  ACKTARIH: 'ACKTARIH',
  NOTLAR: 'NOTLAR',
  F_UNVANI: 'F_UNVANI',
  ALARMVERSIN: 'ALARMVERSIN',
  ISLENDI: 'ISLENDI',
  CID: 'CID',
  ONCELIK: 'ONCELIK',
  TIP: 'TIP',
  MESGUL: 'MESGUL',
  ERTELEMEZAMANI: 'ERTELEMEZAMANI',
  ERTELEMESURE: 'ERTELEMESURE',
  ERTELEMESAYISI: 'ERTELEMESAYISI'
});

exports.Prisma.FaturaScalarFieldEnum = makeEnum({
  ID: 'ID',
  CH_ID: 'CH_ID',
  FIS_NO: 'FIS_NO',
  FIS_TARIHI: 'FIS_TARIHI',
  ACIKLAMA: 'ACIKLAMA',
  TLTOPLAMI: 'TLTOPLAMI',
  TLISKTOPLAMI: 'TLISKTOPLAMI',
  TLARATOPLAM: 'TLARATOPLAM',
  TLKDVTOPLAM: 'TLKDVTOPLAM',
  TLGENTOPLAM: 'TLGENTOPLAM',
  FISTURU: 'FISTURU',
  ISLEM_TARIHI: 'ISLEM_TARIHI',
  VADE_TARIHI: 'VADE_TARIHI',
  ACIK_KAPALI: 'ACIK_KAPALI',
  DEPO_ID: 'DEPO_ID',
  OZEL_KOD: 'OZEL_KOD',
  IRSALIYE_TARIHI: 'IRSALIYE_TARIHI',
  IRSALIYE_NO: 'IRSALIYE_NO',
  ISLENDI: 'ISLENDI',
  SIPARIS_ID: 'SIPARIS_ID',
  SIPARIS_NO: 'SIPARIS_NO',
  CARI_HRK_ID: 'CARI_HRK_ID',
  KASA_HRK_ID: 'KASA_HRK_ID',
  DIPNOT: 'DIPNOT',
  IPTAL: 'IPTAL',
  VDEPO_ID: 'VDEPO_ID',
  DOVIZ_KURU: 'DOVIZ_KURU',
  DOVIZ_TIPI: 'DOVIZ_TIPI'
});

exports.Prisma.FaturadetayScalarFieldEnum = makeEnum({
  ID: 'ID',
  FIS_ID: 'FIS_ID',
  URUNKODU: 'URUNKODU',
  URUNADI: 'URUNADI',
  URUNACIKLAMA: 'URUNACIKLAMA',
  BEDEN: 'BEDEN',
  MARKA: 'MARKA',
  MIKTAR: 'MIKTAR',
  BIRIM: 'BIRIM',
  TL_FIYATI: 'TL_FIYATI',
  TL_TUTARI: 'TL_TUTARI',
  KDV: 'KDV',
  ISKONTO: 'ISKONTO',
  TL_KDVLIFIYAT: 'TL_KDVLIFIYAT',
  TL_KDVLITUTAR: 'TL_KDVLITUTAR',
  TLKDV_TUTARI: 'TLKDV_TUTARI',
  TLISK_TUTARI: 'TLISK_TUTARI',
  TL_ISKLIFIYAT: 'TL_ISKLIFIYAT',
  TL_ISKLITUTAR: 'TL_ISKLITUTAR',
  URUN_ID: 'URUN_ID',
  STH_ID: 'STH_ID',
  STH_ID1: 'STH_ID1'
});

exports.Prisma.FirmayetkilileriScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  EMAIL1: 'EMAIL1',
  EMAIL2: 'EMAIL2',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  CEP1: 'CEP1',
  CEP2: 'CEP2',
  DT: 'DT'
});

exports.Prisma.FotograflarScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  ACIKLAMA: 'ACIKLAMA',
  FOTOGRAF: 'FOTOGRAF',
  SIRA: 'SIRA'
});

exports.Prisma.GecersizabonelerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  SINYALADETI: 'SINYALADETI',
  CIDNO: 'CIDNO',
  SONSINYALTARIHI: 'SONSINYALTARIHI',
  HAMSINYAL: 'HAMSINYAL'
});

exports.Prisma.GelensinyallerScalarFieldEnum = makeEnum({
  ID: 'ID',
  SINYAL: 'SINYAL',
  HAMSINYAL: 'HAMSINYAL',
  TARIH: 'TARIH',
  GONDERILDI: 'GONDERILDI',
  TEST: 'TEST',
  GONDTARIH: 'GONDTARIH'
});

exports.Prisma.Genel_onemlitelefonlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  ADI: 'ADI',
  ULKE: 'ULKE',
  IL: 'IL',
  ILCE: 'ILCE',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.GeneltatillerScalarFieldEnum = makeEnum({
  ID: 'ID',
  ACIKLAMA: 'ACIKLAMA',
  BASLAMATARIHI: 'BASLAMATARIHI',
  BITISTARIHI: 'BITISTARIHI',
  YILBAGIMSIZ: 'YILBAGIMSIZ'
});

exports.Prisma.GunlerScalarFieldEnum = makeEnum({
  ID: 'ID',
  GUN: 'GUN',
  ADI: 'ADI'
});

exports.Prisma.HaberverileceklerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  ADRES: 'ADRES',
  PAROLA: 'PAROLA',
  ALARMTIPI: 'ALARMTIPI',
  SMS: 'SMS',
  MPAROLA: 'MPAROLA',
  EPOSTA: 'EPOSTA',
  EPOSTADURUM: 'EPOSTADURUM',
  BASLAMATARIHI: 'BASLAMATARIHI',
  BITISTARIHI: 'BITISTARIHI',
  KISITLAMA: 'KISITLAMA',
  VOIPSIFRE: 'VOIPSIFRE',
  VOIPARA: 'VOIPARA',
  ULKETELKODU: 'ULKETELKODU',
  SICILNO: 'SICILNO'
});

exports.Prisma.Haberverilecekler_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  ADRES: 'ADRES',
  PAROLA: 'PAROLA',
  ALARMTIPI: 'ALARMTIPI',
  SMS: 'SMS',
  MPAROLA: 'MPAROLA',
  EPOSTA: 'EPOSTA',
  EPOSTADURUM: 'EPOSTADURUM',
  BASLAMATARIHI: 'BASLAMATARIHI',
  BITISTARIHI: 'BITISTARIHI',
  KISITLAMA: 'KISITLAMA',
  VOIPSIFRE: 'VOIPSIFRE',
  VOIPARA: 'VOIPARA',
  ULKETELKODU: 'ULKETELKODU',
  SICILNO: 'SICILNO'
});

exports.Prisma.HamsinyallerScalarFieldEnum = makeEnum({
  TARIH: 'TARIH',
  COM: 'COM',
  ISLENDI: 'ISLENDI',
  MESAJ: 'MESAJ',
  SIRA: 'SIRA',
  IP_SERI: 'IP_SERI',
  MESGUL: 'MESGUL'
});

exports.Prisma.HesaptipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  HESAPADI: 'HESAPADI',
  POSTA: 'POSTA',
  EMAIL: 'EMAIL',
  FAKS: 'FAKS',
  PERIYOD: 'PERIYOD',
  GUN: 'GUN',
  AK_KATIBI: 'AK_KATIBI',
  GAK_RAPORU: 'GAK_RAPORU',
  HAK_RAPORU: 'HAK_RAPORU',
  SMS: 'SMS',
  FIYAT: 'FIYAT',
  SMS_KURMA: 'SMS_KURMA',
  SMS_KAPAMA: 'SMS_KAPAMA',
  SMS_GECKURMA: 'SMS_GECKURMA',
  SMS_GECKAPAMA: 'SMS_GECKAPAMA',
  SMS_KAPALIGUN: 'SMS_KAPALIGUN',
  SMS_GTEST: 'SMS_GTEST',
  SMS_ALARM: 'SMS_ALARM'
});

exports.Prisma.HizlinotlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  sira: 'sira',
  ACIKLAMA: 'ACIKLAMA',
  KULLANICI: 'KULLANICI',
  SAHIP: 'SAHIP'
});

exports.Prisma.IkguncellemeScalarFieldEnum = makeEnum({
  ID: 'ID',
  P_NO: 'P_NO',
  P_AD: 'P_AD',
  P_SOYAD: 'P_SOYAD',
  UNVAN_AD: 'UNVAN_AD',
  P_GOREV: 'P_GOREV',
  PZ_AD: 'PZ_AD',
  KKOD: 'KKOD',
  YER: 'YER',
  BOL_ADI: 'BOL_ADI',
  ISTEL: 'ISTEL',
  P_CEPTEL: 'P_CEPTEL',
  P_CIKTAR: 'P_CIKTAR'
});

exports.Prisma.IlcelerScalarFieldEnum = makeEnum({
  ID: 'ID',
  ILKODU: 'ILKODU',
  ILCEKODU: 'ILCEKODU',
  ILCE: 'ILCE'
});

exports.Prisma.Ilceler_copyScalarFieldEnum = makeEnum({
  ID: 'ID',
  ILKODU: 'ILKODU',
  ILCEKODU: 'ILCEKODU',
  ILCE: 'ILCE'
});

exports.Prisma.IllerScalarFieldEnum = makeEnum({
  ID: 'ID',
  ULKEKODU: 'ULKEKODU',
  ILKODU: 'ILKODU',
  IL: 'IL'
});

exports.Prisma.Ip_meslekleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  TERMINALID: 'TERMINALID',
  MESLEK: 'MESLEK'
});

exports.Prisma.Ivr_gelenaramaScalarFieldEnum = makeEnum({
  id: 'id',
  adi: 'adi',
  soyadi: 'soyadi',
  telefon: 'telefon',
  firma: 'firma',
  abonekodu: 'abonekodu',
  partno: 'partno',
  notlar: 'notlar',
  tarih: 'tarih',
  sesdosyasi: 'sesdosyasi'
});

exports.Prisma.Ivr_gidenaramaScalarFieldEnum = makeEnum({
  id: 'id',
  adi: 'adi',
  soyadi: 'soyadi',
  firma: 'firma',
  f_kodu: 'f_kodu',
  mesaj: 'mesaj',
  mesajid: 'mesajid',
  sonuc: 'sonuc',
  notlar: 'notlar',
  aranacakno: 'aranacakno',
  tarih: 'tarih',
  aranantarih: 'aranantarih',
  sesdosyasi: 'sesdosyasi',
  partno: 'partno',
  hid: 'hid',
  hat: 'hat',
  ivragonderilme: 'ivragonderilme',
  islembitti: 'islembitti',
  kampanya: 'kampanya'
});

exports.Prisma.Ivr_isimScalarFieldEnum = makeEnum({
  id: 'id',
  isim: 'isim'
});

exports.Prisma.Ivr_kuyrukScalarFieldEnum = makeEnum({
  id: 'id',
  telefon: 'telefon'
});

exports.Prisma.Ivr_voipScalarFieldEnum = makeEnum({
  id: 'id',
  ip: 'ip',
  kullanici: 'kullanici',
  sifre: 'sifre',
  sira: 'sira',
  turu: 'turu'
});

exports.Prisma.KameraayarlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  IP: 'IP',
  PORT: 'PORT',
  KULLANICI: 'KULLANICI',
  SIFRE: 'SIFRE'
});

exports.Prisma.KameralarScalarFieldEnum = makeEnum({
  id: 'id',
  f_kodu: 'f_kodu',
  partno: 'partno',
  link: 'link',
  adi: 'adi',
  kamerano: 'kamerano',
  bolgeno: 'bolgeno',
  kam_kadi: 'kam_kadi',
  kam_sifre: 'kam_sifre',
  kam_ip: 'kam_ip',
  kam_port: 'kam_port'
});

exports.Prisma.KoordinasyonScalarFieldEnum = makeEnum({
  id: 'id',
  program: 'program',
  tarih: 'tarih',
  durum: 'durum',
  kayit: 'kayit',
  sonuc: 'sonuc',
  bakim: 'bakim'
});

exports.Prisma.KurumScalarFieldEnum = makeEnum({
  Id: 'Id',
  kurum: 'kurum',
  data: 'data',
  tarih: 'tarih'
});

exports.Prisma.LinekartlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  RECEIVER: 'RECEIVER',
  LINEKART: 'LINEKART',
  TELEFONNO: 'TELEFONNO',
  ACIKLAMA: 'ACIKLAMA',
  GEL_TELNO: 'GEL_TELNO',
  RECID: 'RECID',
  GEL_ACCNO: 'GEL_ACCNO',
  GEL_COM: 'GEL_COM',
  SONMESAJSIRA: 'SONMESAJSIRA',
  ONEK: 'ONEK',
  TIP: 'TIP'
});

exports.Prisma.MailtipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  TIP: 'TIP',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.MalzemelerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  TAKILDIGIBOLGE: 'TAKILDIGIBOLGE',
  TAKILDIGI_YER: 'TAKILDIGI_YER',
  WWWIP: 'WWWIP',
  TSERVIS: 'TSERVIS',
  TS_SURE: 'TS_SURE',
  TSB_TARIH: 'TSB_TARIH',
  DEDEKTOR: 'DEDEKTOR',
  Knm_X: 'Knm_X',
  Knm_Y: 'Knm_Y',
  TAKIPSURESI: 'TAKIPSURESI',
  SONTAKIPZAMANI: 'SONTAKIPZAMANI',
  OTM_ENT_KODU: 'OTM_ENT_KODU',
  DURUM: 'DURUM',
  TKP_BASLAMA: 'TKP_BASLAMA',
  TKP_BITIS: 'TKP_BITIS'
});

exports.Prisma.Malzemeler_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  TAKILDIGIBOLGE: 'TAKILDIGIBOLGE',
  TAKILDIGI_YER: 'TAKILDIGI_YER',
  WWWIP: 'WWWIP',
  TSERVIS: 'TSERVIS',
  TS_SURE: 'TS_SURE',
  TSB_TARIH: 'TSB_TARIH',
  DEDEKTOR: 'DEDEKTOR',
  Knm_X: 'Knm_X',
  Knm_Y: 'Knm_Y',
  TAKIPSURESI: 'TAKIPSURESI',
  SONTAKIPZAMANI: 'SONTAKIPZAMANI',
  OTM_ENT_KODU: 'OTM_ENT_KODU',
  DURUM: 'DURUM',
  TKP_BASLAMA: 'TKP_BASLAMA',
  TKP_BITIS: 'TKP_BITIS'
});

exports.Prisma.MarkatanimlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  aciklama: 'aciklama'
});

exports.Prisma.MesajlarScalarFieldEnum = makeEnum({
  SIRA: 'SIRA',
  CIHAZ: 'CIHAZ',
  F_KODU: 'F_KODU',
  ALICIALET: 'ALICIALET',
  TELHATTI: 'TELHATTI',
  ALARMKODU: 'ALARMKODU',
  BOLGE: 'BOLGE',
  HAMSINYAL: 'HAMSINYAL',
  KULLANICI: 'KULLANICI',
  PARTNO: 'PARTNO',
  SONUC: 'SONUC',
  MESAJTIPI: 'MESAJTIPI',
  MESAJ: 'MESAJ',
  TARIH: 'TARIH',
  ACKTARIH: 'ACKTARIH',
  F_UNVANI: 'F_UNVANI',
  ALARMVERSIN: 'ALARMVERSIN',
  ISLENDI: 'ISLENDI',
  CID: 'CID',
  ONCELIK: 'ONCELIK',
  TIP: 'TIP',
  MESGUL: 'MESGUL',
  CEVASPSURESN: 'CEVASPSURESN',
  GECERSIZABONE: 'GECERSIZABONE',
  NOTLAR: 'NOTLAR',
  BOLGENO: 'BOLGENO',
  ERTELEME: 'ERTELEME'
});

exports.Prisma.MesajnotlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  MESAJSIRA: 'MESAJSIRA',
  NOTLAR: 'NOTLAR',
  ZAMAN: 'ZAMAN',
  OPERATOR: 'OPERATOR'
});

exports.Prisma.MeslekgrupScalarFieldEnum = makeEnum({
  ID: 'ID',
  MESLEKGRB: 'MESLEKGRB',
  TATILALARM: 'TATILALARM'
});

exports.Prisma.Mstgrup_teknisyenlerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  PAROLA: 'PAROLA',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  KULLANICIKODU: 'KULLANICIKODU',
  SMS: 'SMS',
  EPOSTA: 'EPOSTA',
  EPOSTADURUM: 'EPOSTADURUM'
});

exports.Prisma.MstgruphesaplariScalarFieldEnum = makeEnum({
  ID: 'ID',
  MSTGRUPID: 'MSTGRUPID',
  HESAPADI: 'HESAPADI',
  PERIYOD: 'PERIYOD',
  GONDERIMSAATI: 'GONDERIMSAATI',
  RAPORLAMATURU: 'RAPORLAMATURU',
  DUZELMEKONTROL: 'DUZELMEKONTROL',
  DONEM: 'DONEM',
  eposta: 'eposta'
});

exports.Prisma.MstgrupmailbolgeleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  HESAPID: 'HESAPID',
  BOLGEID: 'BOLGEID'
});

exports.Prisma.MstgrupmailsinyaltipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  HESAPID: 'HESAPID',
  SINYALTIPI: 'SINYALTIPI'
});

exports.Prisma.MstgrupmesleklerScalarFieldEnum = makeEnum({
  ID: 'ID',
  HESAPID: 'HESAPID',
  MESLEK: 'MESLEK'
});

exports.Prisma.MusteriScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ALICINO: 'ALICINO',
  PART_VAR: 'PART_VAR',
  FIRMA_ADI: 'FIRMA_ADI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  A_MAHALLE: 'A_MAHALLE',
  A_CADDE: 'A_CADDE',
  A_SOKAK: 'A_SOKAK',
  A_KAPINO: 'A_KAPINO',
  A_ADRES1: 'A_ADRES1',
  A_ADRES2: 'A_ADRES2',
  A_PKODU: 'A_PKODU',
  A_ILCE: 'A_ILCE',
  A_IL: 'A_IL',
  A_ULKE: 'A_ULKE',
  A_BOLGE: 'A_BOLGE',
  SISTEMMONTEJYERI: 'SISTEMMONTEJYERI',
  ALRBAKIM: 'ALRBAKIM',
  ZONE_TABLOSU: 'ZONE_TABLOSU',
  ACIKKAPALI: 'ACIKKAPALI',
  ACILISSAATI: 'ACILISSAATI',
  KAPANISSAATI: 'KAPANISSAATI',
  GUNLUKSIN: 'GUNLUKSIN',
  SINLISGID: 'SINLISGID',
  BAKIMTURU: 'BAKIMTURU',
  ILKKAYITTARIHI: 'ILKKAYITTARIHI',
  KAYITTARIHI: 'KAYITTARIHI',
  BAKIMBASLAMA: 'BAKIMBASLAMA',
  BAKIMBITIS: 'BAKIMBITIS',
  GARANTIBASLAMA: 'GARANTIBASLAMA',
  GARANTIBITIS: 'GARANTIBITIS',
  AYRILISTARIHI: 'AYRILISTARIHI',
  ODEMETURU: 'ODEMETURU',
  ACIKKAPALITARIH: 'ACIKKAPALITARIH',
  SONGUNTAR: 'SONGUNTAR',
  OPERATOR: 'OPERATOR',
  BILGIGUNTAR: 'BILGIGUNTAR',
  MESLEKGRUBU: 'MESLEKGRUBU',
  UYARIMESAJI: 'UYARIMESAJI',
  UYARISAATI: 'UYARISAATI',
  UCRETSEVIYESI: 'UCRETSEVIYESI',
  MESAJMAIL_0: 'MESAJMAIL_0',
  MESAJMAIL_1: 'MESAJMAIL_1',
  MESAJMAIL_2: 'MESAJMAIL_2',
  MESAJMAIL_3: 'MESAJMAIL_3',
  MESAJMAIL_4: 'MESAJMAIL_4',
  HATGUVENLIGISAATI: 'HATGUVENLIGISAATI',
  GECKURMATAR: 'GECKURMATAR',
  GECKAPAMATAR: 'GECKAPAMATAR',
  WEBPAROLA: 'WEBPAROLA',
  SONSINYALTAR: 'SONSINYALTAR',
  TELSIZSONHATGUVSIN: 'TELSIZSONHATGUVSIN',
  GPRSSONHATGUVSIN: 'GPRSSONHATGUVSIN',
  IPSONHATGUVSIN: 'IPSONHATGUVSIN',
  GPRSSONSINYALTAR: 'GPRSSONSINYALTAR',
  IPSONSINYALTAR: 'IPSONSINYALTAR',
  TELSIZSONSINYALTAR: 'TELSIZSONSINYALTAR',
  TEKNIKSERVISVAR: 'TEKNIKSERVISVAR',
  SISTEMTEL: 'SISTEMTEL',
  SISTEMMODELI: 'SISTEMMODELI',
  SISTEMMARKA: 'SISTEMMARKA',
  HATGUV_TARIHI: 'HATGUV_TARIHI',
  RESERVE: 'RESERVE',
  GKURMATAKIBI: 'GKURMATAKIBI',
  HESAP_TURU: 'HESAP_TURU',
  ABN_BAS_TAR: 'ABN_BAS_TAR',
  ABN_BIT_TAR: 'ABN_BIT_TAR',
  GKAPAMATAKIBI: 'GKAPAMATAKIBI',
  TS_NOTU: 'TS_NOTU',
  WEBILKGIRIS: 'WEBILKGIRIS',
  GTESTBASLAMA: 'GTESTBASLAMA',
  GTESTBITIS: 'GTESTBITIS',
  GTESTSAATI: 'GTESTSAATI',
  SONHATGUVSIN: 'SONHATGUVSIN',
  DURUM: 'DURUM',
  TATILKONTROL: 'TATILKONTROL',
  ILETISIMTURU: 'ILETISIMTURU',
  HESAP: 'HESAP',
  OTM_SMS: 'OTM_SMS',
  GUN_SIN_ADETI: 'GUN_SIN_ADETI',
  YENIKAPAMASAATI: 'YENIKAPAMASAATI',
  TSB_TARIH: 'TSB_TARIH',
  CIDNO: 'CIDNO',
  GECKURMADUSTU: 'GECKURMADUSTU',
  FORMUYOK: 'FORMUYOK',
  MAXSINYALADETI: 'MAXSINYALADETI',
  OTM_EPOSTA: 'OTM_EPOSTA',
  SUBEKODU: 'SUBEKODU',
  ILETISIMVAR: 'ILETISIMVAR',
  ATMSUBEKODU: 'ATMSUBEKODU',
  TELSABOTAJKONT: 'TELSABOTAJKONT',
  GECKAPAMADUSTU: 'GECKAPAMADUSTU',
  GECKAPAMAERTELE: 'GECKAPAMAERTELE',
  GECKURMAERTELE: 'GECKURMAERTELE',
  DEVREDISISURE: 'DEVREDISISURE',
  GMAPX: 'GMAPX',
  GMAPY: 'GMAPY',
  SISTEMIP: 'SISTEMIP',
  FIYAT: 'FIYAT',
  PERIYOD: 'PERIYOD',
  GUN: 'GUN',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  SIMNO: 'SIMNO',
  ABNSONU_SMS: 'ABNSONU_SMS',
  ABNSONU_EPOSTA: 'ABNSONU_EPOSTA',
  PASIFBIT_TARIHI: 'PASIFBIT_TARIHI',
  ABNBITUYARIMAILTAR: 'ABNBITUYARIMAILTAR',
  ABNBITUYARISMSTAR: 'ABNBITUYARISMSTAR',
  TS_SURE: 'TS_SURE',
  YAZSAATI: 'YAZSAATI',
  ALARMDAMESGUL: 'ALARMDAMESGUL',
  ALARMDA: 'ALARMDA',
  BAYI: 'BAYI',
  MUSTERIGRPID: 'MUSTERIGRPID',
  AKLAS: 'AKLAS',
  MESAIDISIGIRISKONTROL: 'MESAIDISIGIRISKONTROL',
  SMSABNBITTAR: 'SMSABNBITTAR',
  WEBYETKIID: 'WEBYETKIID',
  TANIMSIZKULALARM: 'TANIMSIZKULALARM',
  AYLIKODEME: 'AYLIKODEME',
  ALARMS_NOREC: 'ALARMS_NOREC',
  DVR_MARKA: 'DVR_MARKA',
  TIP: 'TIP',
  NOTLAR: 'NOTLAR',
  VOIPSIFRE: 'VOIPSIFRE',
  ATMTIPI: 'ATMTIPI',
  EATOLERANS: 'EATOLERANS',
  IPTAL: 'IPTAL',
  MERKEZID: 'MERKEZID',
  SMSBITUYARISMSTAR: 'SMSBITUYARISMSTAR',
  GPRSHATKONTROLU: 'GPRSHATKONTROLU',
  IPHATKONTROLU: 'IPHATKONTROLU',
  TELSIZHATKONTROLU: 'TELSIZHATKONTROLU',
  ADAY: 'ADAY',
  cihaz_sn1: 'cihaz_sn1',
  cihaz_sn2: 'cihaz_sn2',
  TS_ALAN: 'TS_ALAN',
  CARIKARTID: 'CARIKARTID',
  mesgulzamani: 'mesgulzamani',
  otm_kurulumsaati: 'otm_kurulumsaati',
  kamerapaneltipi: 'kamerapaneltipi',
  GPRSHATGUV_TARIHI: 'GPRSHATGUV_TARIHI',
  GPRSHATGUVENLIGISAATI: 'GPRSHATGUVENLIGISAATI',
  IPHATGUVENLIGISAATI: 'IPHATGUVENLIGISAATI',
  IPHATGUV_TARIHI: 'IPHATGUV_TARIHI',
  TELSIZHATGUVENLIGISAATI: 'TELSIZHATGUVENLIGISAATI',
  TELSIZHATGUV_TARIHI: 'TELSIZHATGUV_TARIHI',
  PSTNHATKONTROLU: 'PSTNHATKONTROLU',
  AC_KAPA_BAS_TAR: 'AC_KAPA_BAS_TAR',
  OTOMATION: 'OTOMATION',
  OTM_MODULID: 'OTM_MODULID',
  OTM_PSW: 'OTM_PSW',
  IPTALNEDENI: 'IPTALNEDENI',
  pasifnedeni: 'pasifnedeni',
  anlasmatipi: 'anlasmatipi',
  PASSMASKELE: 'PASSMASKELE',
  DEVREDISIPAROLAONAYI: 'DEVREDISIPAROLAONAYI',
  DEVREDISIPONAYISURE: 'DEVREDISIPONAYISURE',
  DEVREDISIPAROLAONAYZAMANI: 'DEVREDISIPAROLAONAYZAMANI',
  panelmasterkod: 'panelmasterkod',
  vno: 'vno',
  vdaire: 'vdaire'
});

exports.Prisma.Musteri_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ALICINO: 'ALICINO',
  PART_VAR: 'PART_VAR',
  FIRMA_ADI: 'FIRMA_ADI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  A_MAHALLE: 'A_MAHALLE',
  A_CADDE: 'A_CADDE',
  A_SOKAK: 'A_SOKAK',
  A_KAPINO: 'A_KAPINO',
  A_ADRES1: 'A_ADRES1',
  A_ADRES2: 'A_ADRES2',
  A_PKODU: 'A_PKODU',
  A_ILCE: 'A_ILCE',
  A_IL: 'A_IL',
  A_ULKE: 'A_ULKE',
  A_BOLGE: 'A_BOLGE',
  SISTEMMONTEJYERI: 'SISTEMMONTEJYERI',
  ALRBAKIM: 'ALRBAKIM',
  ZONE_TABLOSU: 'ZONE_TABLOSU',
  ACIKKAPALI: 'ACIKKAPALI',
  ACILISSAATI: 'ACILISSAATI',
  KAPANISSAATI: 'KAPANISSAATI',
  GUNLUKSIN: 'GUNLUKSIN',
  SINLISGID: 'SINLISGID',
  BAKIMTURU: 'BAKIMTURU',
  ILKKAYITTARIHI: 'ILKKAYITTARIHI',
  KAYITTARIHI: 'KAYITTARIHI',
  BAKIMBASLAMA: 'BAKIMBASLAMA',
  BAKIMBITIS: 'BAKIMBITIS',
  GARANTIBASLAMA: 'GARANTIBASLAMA',
  GARANTIBITIS: 'GARANTIBITIS',
  AYRILISTARIHI: 'AYRILISTARIHI',
  ODEMETURU: 'ODEMETURU',
  ACIKKAPALITARIH: 'ACIKKAPALITARIH',
  SONGUNTAR: 'SONGUNTAR',
  OPERATOR: 'OPERATOR',
  BILGIGUNTAR: 'BILGIGUNTAR',
  MESLEKGRUBU: 'MESLEKGRUBU',
  UYARIMESAJI: 'UYARIMESAJI',
  UYARISAATI: 'UYARISAATI',
  UCRETSEVIYESI: 'UCRETSEVIYESI',
  MESAJMAIL_0: 'MESAJMAIL_0',
  MESAJMAIL_1: 'MESAJMAIL_1',
  MESAJMAIL_2: 'MESAJMAIL_2',
  MESAJMAIL_3: 'MESAJMAIL_3',
  MESAJMAIL_4: 'MESAJMAIL_4',
  HATGUVENLIGISAATI: 'HATGUVENLIGISAATI',
  GECKURMATAR: 'GECKURMATAR',
  GECKAPAMATAR: 'GECKAPAMATAR',
  WEBPAROLA: 'WEBPAROLA',
  SONSINYALTAR: 'SONSINYALTAR',
  TELSIZSONHATGUVSIN: 'TELSIZSONHATGUVSIN',
  GPRSSONHATGUVSIN: 'GPRSSONHATGUVSIN',
  IPSONHATGUVSIN: 'IPSONHATGUVSIN',
  GPRSSONSINYALTAR: 'GPRSSONSINYALTAR',
  IPSONSINYALTAR: 'IPSONSINYALTAR',
  TELSIZSONSINYALTAR: 'TELSIZSONSINYALTAR',
  TEKNIKSERVISVAR: 'TEKNIKSERVISVAR',
  SISTEMTEL: 'SISTEMTEL',
  SISTEMMODELI: 'SISTEMMODELI',
  SISTEMMARKA: 'SISTEMMARKA',
  HATGUV_TARIHI: 'HATGUV_TARIHI',
  RESERVE: 'RESERVE',
  GKURMATAKIBI: 'GKURMATAKIBI',
  HESAP_TURU: 'HESAP_TURU',
  ABN_BAS_TAR: 'ABN_BAS_TAR',
  ABN_BIT_TAR: 'ABN_BIT_TAR',
  GKAPAMATAKIBI: 'GKAPAMATAKIBI',
  TS_NOTU: 'TS_NOTU',
  WEBILKGIRIS: 'WEBILKGIRIS',
  GTESTBASLAMA: 'GTESTBASLAMA',
  GTESTBITIS: 'GTESTBITIS',
  GTESTSAATI: 'GTESTSAATI',
  SONHATGUVSIN: 'SONHATGUVSIN',
  DURUM: 'DURUM',
  TATILKONTROL: 'TATILKONTROL',
  ILETISIMTURU: 'ILETISIMTURU',
  HESAP: 'HESAP',
  OTM_SMS: 'OTM_SMS',
  GUN_SIN_ADETI: 'GUN_SIN_ADETI',
  YENIKAPAMASAATI: 'YENIKAPAMASAATI',
  TSB_TARIH: 'TSB_TARIH',
  CIDNO: 'CIDNO',
  GECKURMADUSTU: 'GECKURMADUSTU',
  FORMUYOK: 'FORMUYOK',
  MAXSINYALADETI: 'MAXSINYALADETI',
  OTM_EPOSTA: 'OTM_EPOSTA',
  SUBEKODU: 'SUBEKODU',
  ILETISIMVAR: 'ILETISIMVAR',
  ATMSUBEKODU: 'ATMSUBEKODU',
  TELSABOTAJKONT: 'TELSABOTAJKONT',
  GECKAPAMADUSTU: 'GECKAPAMADUSTU',
  GECKAPAMAERTELE: 'GECKAPAMAERTELE',
  GECKURMAERTELE: 'GECKURMAERTELE',
  DEVREDISISURE: 'DEVREDISISURE',
  GMAPX: 'GMAPX',
  GMAPY: 'GMAPY',
  SISTEMIP: 'SISTEMIP',
  FIYAT: 'FIYAT',
  PERIYOD: 'PERIYOD',
  GUN: 'GUN',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  SIMNO: 'SIMNO',
  ABNSONU_SMS: 'ABNSONU_SMS',
  ABNSONU_EPOSTA: 'ABNSONU_EPOSTA',
  PASIFBIT_TARIHI: 'PASIFBIT_TARIHI',
  ABNBITUYARIMAILTAR: 'ABNBITUYARIMAILTAR',
  ABNBITUYARISMSTAR: 'ABNBITUYARISMSTAR',
  TS_SURE: 'TS_SURE',
  YAZSAATI: 'YAZSAATI',
  ALARMDAMESGUL: 'ALARMDAMESGUL',
  ALARMDA: 'ALARMDA',
  BAYI: 'BAYI',
  MUSTERIGRPID: 'MUSTERIGRPID',
  AKLAS: 'AKLAS',
  MESAIDISIGIRISKONTROL: 'MESAIDISIGIRISKONTROL',
  SMSABNBITTAR: 'SMSABNBITTAR',
  WEBYETKIID: 'WEBYETKIID',
  TANIMSIZKULALARM: 'TANIMSIZKULALARM',
  AYLIKODEME: 'AYLIKODEME',
  ALARMS_NOREC: 'ALARMS_NOREC',
  DVR_MARKA: 'DVR_MARKA',
  TIP: 'TIP',
  NOTLAR: 'NOTLAR',
  VOIPSIFRE: 'VOIPSIFRE',
  ATMTIPI: 'ATMTIPI',
  EATOLERANS: 'EATOLERANS',
  IPTAL: 'IPTAL',
  MERKEZID: 'MERKEZID',
  SMSBITUYARISMSTAR: 'SMSBITUYARISMSTAR',
  GPRSHATKONTROLU: 'GPRSHATKONTROLU',
  IPHATKONTROLU: 'IPHATKONTROLU',
  TELSIZHATKONTROLU: 'TELSIZHATKONTROLU',
  ADAY: 'ADAY',
  cihaz_sn1: 'cihaz_sn1',
  cihaz_sn2: 'cihaz_sn2',
  TS_ALAN: 'TS_ALAN',
  CARIKARTID: 'CARIKARTID',
  mesgulzamani: 'mesgulzamani',
  otm_kurulumsaati: 'otm_kurulumsaati',
  kamerapaneltipi: 'kamerapaneltipi',
  GPRSHATGUV_TARIHI: 'GPRSHATGUV_TARIHI',
  GPRSHATGUVENLIGISAATI: 'GPRSHATGUVENLIGISAATI',
  IPHATGUVENLIGISAATI: 'IPHATGUVENLIGISAATI',
  IPHATGUV_TARIHI: 'IPHATGUV_TARIHI',
  TELSIZHATGUVENLIGISAATI: 'TELSIZHATGUVENLIGISAATI',
  TELSIZHATGUV_TARIHI: 'TELSIZHATGUV_TARIHI',
  PSTNHATKONTROLU: 'PSTNHATKONTROLU',
  AC_KAPA_BAS_TAR: 'AC_KAPA_BAS_TAR',
  OTOMATION: 'OTOMATION',
  OTM_MODULID: 'OTM_MODULID',
  OTM_PSW: 'OTM_PSW',
  anlasmatipi: 'anlasmatipi',
  IPTALNEDENI: 'IPTALNEDENI',
  pasifnedeni: 'pasifnedeni',
  PASSMASKELE: 'PASSMASKELE',
  DEVREDISIPAROLAONAYI: 'DEVREDISIPAROLAONAYI',
  DEVREDISIPONAYISURE: 'DEVREDISIPONAYISURE',
  DEVREDISIPAROLAONAYZAMANI: 'DEVREDISIPAROLAONAYZAMANI',
  panelmasterkod: 'panelmasterkod',
  vno: 'vno',
  vdaire: 'vdaire',
  kameravar: 'kameravar',
  alarmvar: 'alarmvar',
  caritipi: 'caritipi'
});

exports.Prisma.MustericariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ABONEID: 'ABONEID',
  TARIH: 'TARIH',
  ODEMETIPI: 'ODEMETIPI',
  ACIKLAMA: 'ACIKLAMA',
  B_A: 'B_A',
  ALACAK: 'ALACAK',
  BORC: 'BORC',
  VADETARIHI: 'VADETARIHI',
  BORCLANDIRMAID: 'BORCLANDIRMAID',
  fistipi: 'fistipi',
  fisno: 'fisno'
});

exports.Prisma.MusterigruplariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ADI: 'ADI',
  IL: 'IL',
  ILCE: 'ILCE',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  FAX1: 'FAX1',
  TEL3: 'TEL3',
  FAX2: 'FAX2',
  ACIKLAMA: 'ACIKLAMA',
  KODU: 'KODU',
  YETKILI1: 'YETKILI1',
  YETKILI2: 'YETKILI2',
  ADRES1: 'ADRES1',
  ADRES2: 'ADRES2',
  PKODU: 'PKODU',
  ULKE: 'ULKE',
  YETKILI1EMAIL: 'YETKILI1EMAIL',
  SFIYAT: 'SFIYAT',
  AFIYAT: 'AFIYAT',
  LISTELENSIN: 'LISTELENSIN',
  YETKILI1TEL: 'YETKILI1TEL',
  YETKILI2TEL: 'YETKILI2TEL',
  YETKILI1CEP: 'YETKILI1CEP',
  YETKILI2CEP: 'YETKILI2CEP',
  YETKILI2EMAIL: 'YETKILI2EMAIL',
  EMAIL: 'EMAIL',
  VDAIRE: 'VDAIRE',
  VNO: 'VNO',
  KK_BANKAADI: 'KK_BANKAADI',
  KK_KARTNO: 'KK_KARTNO',
  KK_SONKULTAR: 'KK_SONKULTAR',
  KK_KARTGUVNO: 'KK_KARTGUVNO',
  ODEMETURU: 'ODEMETURU',
  KK_KARTSAHIBI: 'KK_KARTSAHIBI',
  UCRETSEVIYE1: 'UCRETSEVIYE1',
  UCRETSEVIYE2: 'UCRETSEVIYE2',
  UCRETSEVIYE3: 'UCRETSEVIYE3',
  UCRETSEVIYE4: 'UCRETSEVIYE4',
  UCRETSEVIYE5: 'UCRETSEVIYE5',
  UCRETSEVIYE6: 'UCRETSEVIYE6',
  PAROLA: 'PAROLA',
  WEBILKGIRIS: 'WEBILKGIRIS',
  SMS: 'SMS',
  PROSEDUR: 'PROSEDUR',
  ABNSONU_SMS: 'ABNSONU_SMS',
  ABNSONU_EPOSTA: 'ABNSONU_EPOSTA',
  PERIYOD: 'PERIYOD',
  GUN: 'GUN',
  GONDERIMSAATI: 'GONDERIMSAATI',
  FIYAT: 'FIYAT',
  PAROLAZORUNLU: 'PAROLAZORUNLU',
  BAYIID: 'BAYIID',
  HESAPTARIHI: 'HESAPTARIHI',
  SMSBUHESAPTANGITSIN: 'SMSBUHESAPTANGITSIN',
  TSFORMUGONDER: 'TSFORMUGONDER',
  eposta: 'eposta',
  eps_GORUNECEKISIM: 'eps_GORUNECEKISIM',
  eps_EMAILADRESI: 'eps_EMAILADRESI',
  eps_POPNAME: 'eps_POPNAME',
  eps_POPPORT: 'eps_POPPORT',
  eps_HOSTNAME: 'eps_HOSTNAME',
  eps_HOSTPORT: 'eps_HOSTPORT',
  eps_USERNAME: 'eps_USERNAME',
  eps_PAROLA: 'eps_PAROLA',
  eps_CEVAPADRESI: 'eps_CEVAPADRESI',
  eps_BILGIADRESI: 'eps_BILGIADRESI',
  eps_SIFRELEME: 'eps_SIFRELEME',
  eps_SSLVERSION: 'eps_SSLVERSION',
  eps_KIMLIKDOGRULAMA: 'eps_KIMLIKDOGRULAMA',
  eps_BUHESAPTANGITSIN: 'eps_BUHESAPTANGITSIN',
  eps_SIFRELEMETURU: 'eps_SIFRELEMETURU',
  eps_SSLVAR: 'eps_SSLVAR',
  SMS_AYARID: 'SMS_AYARID'
});

exports.Prisma.MusterinotlarScalarFieldEnum = makeEnum({
  ID: 'ID',
  ABONEID: 'ABONEID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  BAS_TARIHI: 'BAS_TARIHI',
  BIT_TARIHI: 'BIT_TARIHI',
  ACIKLAMA: 'ACIKLAMA',
  AKTIF: 'AKTIF',
  NOTLAR: 'NOTLAR',
  NOTTYPEID: 'NOTTYPEID'
});

exports.Prisma.Musterinotlar_copyScalarFieldEnum = makeEnum({
  ID: 'ID',
  ABONEID: 'ABONEID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  BAS_TARIHI: 'BAS_TARIHI',
  BIT_TARIHI: 'BIT_TARIHI',
  ACIKLAMA: 'ACIKLAMA',
  AKTIF: 'AKTIF',
  NOTLAR: 'NOTLAR',
  NOTTYPEID: 'NOTTYPEID'
});

exports.Prisma.NottipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  ACIKLAMA: 'ACIKLAMA',
  TRAFIKLISTGOR: 'TRAFIKLISTGOR',
  POPUP: 'POPUP'
});

exports.Prisma.OperatoraboneleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  OP_ID: 'OP_ID',
  ABONE_ID: 'ABONE_ID'
});

exports.Prisma.OperatorbolgeyetkileriScalarFieldEnum = makeEnum({
  ID: 'ID',
  OP_ID: 'OP_ID',
  BOLGE: 'BOLGE'
});

exports.Prisma.OperatorhaklariScalarFieldEnum = makeEnum({
  ID: 'ID',
  USERID: 'USERID',
  KATAGORIID: 'KATAGORIID',
  BOLUMID: 'BOLUMID',
  EKLE: 'EKLE',
  SIL: 'SIL',
  GOR: 'GOR',
  DUZELT: 'DUZELT',
  SORGU: 'SORGU',
  YETKIID: 'YETKIID'
});

exports.Prisma.OperatorinoutScalarFieldEnum = makeEnum({
  ID: 'ID',
  Tarih: 'Tarih',
  OpKodu: 'OpKodu',
  LogInOut: 'LogInOut',
  IP: 'IP',
  WEB: 'WEB'
});

exports.Prisma.OperatormesajlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  GONDERENOP: 'GONDERENOP',
  ALANOP: 'ALANOP',
  MESAJ: 'MESAJ',
  GONDZAMANI: 'GONDZAMANI',
  ALMAZAMANI: 'ALMAZAMANI',
  OKUNDU: 'OKUNDU'
});

exports.Prisma.OperatorsScalarFieldEnum = makeEnum({
  ID: 'ID',
  OP_KODU: 'OP_KODU',
  PAROLA: 'PAROLA',
  OP_ADI: 'OP_ADI',
  OP_ADRESI: 'OP_ADRESI',
  OP_IL: 'OP_IL',
  OP_ILCE: 'OP_ILCE',
  OP_PKODU: 'OP_PKODU',
  OP_TEL: 'OP_TEL',
  OP_TEL1: 'OP_TEL1',
  OP_CEPTEL: 'OP_CEPTEL',
  OP_EMAIL: 'OP_EMAIL',
  KULLANCIHAKTANIMLA: 'KULLANCIHAKTANIMLA',
  WEBYETKI: 'WEBYETKI',
  SSYETKISI: 'SSYETKISI',
  SAB_ARAC_KYD_G: 'SAB_ARAC_KYD_G',
  skinname: 'skinname',
  MERKEZID: 'MERKEZID',
  BAYIID: 'BAYIID',
  MUSTGRPID: 'MUSTGRPID',
  MESLEKID: 'MESLEKID',
  TIP: 'TIP',
  HESAPTIPI: 'HESAPTIPI',
  YETKIGRUBU: 'YETKIGRUBU',
  IPFILTRE: 'IPFILTRE',
  MAXFILTRE: 'MAXFILTRE',
  OP_LANG: 'OP_LANG',
  GORECEGIKULLANICILAR: 'GORECEGIKULLANICILAR',
  MPAROLA: 'MPAROLA',
  CARIDEGOR: 'CARIDEGOR',
  CARIPAROLA: 'CARIPAROLA'
});

exports.Prisma.OperatorsinyaltipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  OP_ID: 'OP_ID',
  SINYALTIPI: 'SINYALTIPI'
});

exports.Prisma.OtmcihazdurumlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ABONEKODU: 'ABONEKODU',
  SONSINYALTARIHI: 'SONSINYALTARIHI',
  BAGLI: 'BAGLI',
  BILDIRILDI: 'BILDIRILDI',
  IP: 'IP',
  ZAMANASIMI: 'ZAMANASIMI'
});

exports.Prisma.OtmgelensinyallerScalarFieldEnum = makeEnum({
  ID: 'ID',
  SINYAL: 'SINYAL',
  HAMSINYAL: 'HAMSINYAL',
  TARIH: 'TARIH',
  GONDERILDI: 'GONDERILDI',
  TEST: 'TEST',
  GONDTARIH: 'GONDTARIH'
});

exports.Prisma.OtmgiriscikisdurumlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  DI1: 'DI1',
  DI2: 'DI2',
  DI3: 'DI3',
  DI4: 'DI4',
  DI5: 'DI5',
  DI6: 'DI6',
  DI7: 'DI7',
  DI8: 'DI8',
  DO1: 'DO1',
  DO2: 'DO2',
  DO3: 'DO3',
  DO4: 'DO4',
  DO5: 'DO5',
  DO6: 'DO6',
  DO7: 'DO7',
  DO8: 'DO8',
  AG1: 'AG1',
  AG2: 'AG2',
  AG3: 'AG3',
  AG5: 'AG5',
  AG6: 'AG6',
  AG7: 'AG7',
  AG8: 'AG8',
  AC1: 'AC1',
  AC2: 'AC2',
  AC3: 'AC3',
  AC4: 'AC4',
  AC5: 'AC5',
  AC6: 'AC6',
  AC7: 'AC7',
  AC8: 'AC8'
});

exports.Prisma.OtomasyonanalogseviyelerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  ACIKLAMA: 'ACIKLAMA',
  ALTSEVIYE: 'ALTSEVIYE',
  USTSEVIYE: 'USTSEVIYE',
  MEVCUTSEVIYE: 'MEVCUTSEVIYE'
});

exports.Prisma.OtomasyonentegrasyonScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  KURULU: 'KURULU'
});

exports.Prisma.OtomasyonmodulleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  ACIKLAMA: 'ACIKLAMA',
  KOD: 'KOD'
});

exports.Prisma.OtomasyonporttipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.Panel_modelleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  MARKA: 'MARKA',
  MODEL: 'MODEL',
  DETAY: 'DETAY'
});

exports.Prisma.PanelentegrasyonScalarFieldEnum = makeEnum({
  ID: 'ID',
  f_kodu: 'f_kodu',
  partno: 'partno',
  PanelID: 'PanelID',
  panelip: 'panelip',
  panelport: 'panelport',
  modulpassword: 'modulpassword',
  userpassword: 'userpassword',
  imei: 'imei',
  panelstatus: 'panelstatus'
});

exports.Prisma.PanelipcameralarScalarFieldEnum = makeEnum({
  id: 'id',
  panelentegrasyonid: 'panelentegrasyonid',
  bolgeno: 'bolgeno',
  camip: 'camip',
  camport: 'camport',
  kullaniciadi: 'kullaniciadi',
  sunucuparola: 'sunucuparola'
});

exports.Prisma.PanellerScalarFieldEnum = makeEnum({
  ID: 'ID',
  PANELADI: 'PANELADI',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.PdksScalarFieldEnum = makeEnum({
  id: 'id',
  tarih: 'tarih',
  f_kodu: 'f_kodu',
  partno: 'partno',
  girissaati: 'girissaati',
  girenkisi: 'girenkisi',
  cikissaati: 'cikissaati',
  cikankisi: 'cikankisi'
});

exports.Prisma.PostakodlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ILKODU: 'ILKODU',
  PKODU: 'PKODU',
  ADRES: 'ADRES'
});

exports.Prisma.ProseccihazayarlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  CIHAZID: 'CIHAZID',
  ONEK: 'ONEK',
  ACCOUNT: 'ACCOUNT',
  IP1: 'IP1',
  IP2: 'IP2',
  PORT1: 'PORT1',
  PORT2: 'PORT2',
  ACCOUNT1: 'ACCOUNT1',
  ACCOUNT2: 'ACCOUNT2',
  DEV: 'DEV',
  ARM: 'ARM',
  DI0: 'DI0',
  DO0: 'DO0',
  ERR: 'ERR',
  SW: 'SW',
  HW: 'HW',
  PW: 'PW',
  CMS_OPT: 'CMS_OPT',
  DEV_OPT: 'DEV_OPT',
  RPT_INT: 'RPT_INT',
  PHONE1: 'PHONE1',
  PHONE2: 'PHONE2',
  PHONE3: 'PHONE3',
  PHONE4: 'PHONE4',
  PHONE5: 'PHONE5',
  PHONE6: 'PHONE6',
  PHONE7: 'PHONE7',
  PHONE8: 'PHONE8',
  PHONE0: 'PHONE0',
  ERROR: 'ERROR',
  ZAMAN: 'ZAMAN',
  OUTPUT: 'OUTPUT',
  FW_UPDATE: 'FW_UPDATE',
  PRM_UPDATE: 'PRM_UPDATE',
  GUNCEL: 'GUNCEL',
  AHM: 'AHM',
  APN: 'APN',
  gnczamani: 'gnczamani'
});

exports.Prisma.ProseccihazyardimScalarFieldEnum = makeEnum({
  ID: 'ID',
  KOD: 'KOD',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.PushsenderScalarFieldEnum = makeEnum({
  id: 'id',
  mesaj: 'mesaj',
  title: 'title',
  sonuc: 'sonuc',
  musteriid: 'musteriid',
  gonderilmetarihi: 'gonderilmetarihi',
  emirzamani: 'emirzamani'
});

exports.Prisma.ReceiverformatsScalarFieldEnum = makeEnum({
  ID: 'ID',
  FORMAT: 'FORMAT',
  ADI: 'ADI',
  FRM_BASLAMA: 'FRM_BASLAMA',
  FRM_UZUNLUK: 'FRM_UZUNLUK',
  RNO_BASLAMA: 'RNO_BASLAMA',
  RNO_UZUNLUK: 'RNO_UZUNLUK',
  LCR_BASLAMA: 'LCR_BASLAMA',
  LCR_UZUNLUK: 'LCR_UZUNLUK',
  ACD_BASLAMA: 'ACD_BASLAMA',
  ACD_UZUNLUK: 'ACD_UZUNLUK',
  EQU_BASLAMA: 'EQU_BASLAMA',
  EQU_UZUNLUK: 'EQU_UZUNLUK',
  ECD_BASLAMA: 'ECD_BASLAMA',
  ECD_UZUNLUK: 'ECD_UZUNLUK',
  GNO_BASLAMA: 'GNO_BASLAMA',
  GNO_UZUNLUK: 'GNO_UZUNLUK',
  ZNO_BASLAMA: 'ZNO_BASLAMA',
  ZNO_UZUNLUK: 'ZNO_UZUNLUK',
  SAA_BASLAMA: 'SAA_BASLAMA',
  SAA_UZUNLUK: 'SAA_UZUNLUK',
  DAK_BASLAMA: 'DAK_BASLAMA',
  DAK_UZUNLUK: 'DAK_UZUNLUK',
  SAN_BASLAMA: 'SAN_BASLAMA',
  SAN_UZUNLUK: 'SAN_UZUNLUK',
  GUN_BASLAMA: 'GUN_BASLAMA',
  GUN_UZUNLUK: 'GUN_UZUNLUK',
  AY_BASLAMA: 'AY_BASLAMA',
  AY_UZUNLUK: 'AY_UZUNLUK',
  YIL_BASLAMA: 'YIL_BASLAMA',
  YIL_UZUNLUK: 'YIL_UZUNLUK',
  ACC_BAS_CHAR: 'ACC_BAS_CHAR',
  ACC_BIT_CHAR: 'ACC_BIT_CHAR',
  DATA_BAS_CHAR: 'DATA_BAS_CHAR',
  DATA_BIT_CHAR: 'DATA_BIT_CHAR',
  PHN_BASLAMA: 'PHN_BASLAMA',
  PHN_UZUNLUK: 'PHN_UZUNLUK',
  EVN_GELEN_CODE: 'EVN_GELEN_CODE',
  EVN_CONVERT_CODE: 'EVN_CONVERT_CODE',
  REST_GELEN_CODE: 'REST_GELEN_CODE',
  REST_CONVERT_CODE: 'REST_CONVERT_CODE',
  CLASSZONEBIRLES: 'CLASSZONEBIRLES',
  MIN: 'MIN',
  MAX: 'MAX',
  REC_ID: 'REC_ID',
  YORUMLAMA: 'YORUMLAMA',
  CID_BASLAMA: 'CID_BASLAMA',
  CID_CHAR: 'CID_CHAR',
  DIREKISLE: 'DIREKISLE',
  DATABOYU: 'DATABOYU',
  OTM_CID: 'OTM_CID'
});

exports.Prisma.ReceiversScalarFieldEnum = makeEnum({
  ID: 'ID',
  RECNO: 'RECNO',
  REC_KODU: 'REC_KODU',
  F_KODU: 'F_KODU',
  ADI: 'ADI',
  COM: 'COM',
  BAUD: 'BAUD',
  PARITY: 'PARITY',
  DATABIT: 'DATABIT',
  STOPBIT: 'STOPBIT',
  FLOWCONTROL: 'FLOWCONTROL',
  HANDSHAKE: 'HANDSHAKE',
  ACK: 'ACK',
  NACK: 'NACK',
  BUZZERSTOP: 'BUZZERSTOP',
  RECEIVEDATA: 'RECEIVEDATA',
  DATETIME: 'DATETIME',
  MODEM_II: 'MODEM_II',
  CLOCKSIGNAL: 'CLOCKSIGNAL',
  ENDDATA: 'ENDDATA',
  AKTIF: 'AKTIF',
  REC_ACK: 'REC_ACK',
  HANDSHAKE_STR: 'HANDSHAKE_STR',
  PC_ADI: 'PC_ADI',
  PC_NO: 'PC_NO',
  IPSERI: 'IPSERI',
  IP: 'IP',
  PORT: 'PORT',
  SUNUCU: 'SUNUCU',
  MODEL: 'MODEL',
  ONLINE: 'ONLINE',
  DTR: 'DTR',
  RTS: 'RTS',
  USEDTR: 'USEDTR',
  USERTS: 'USERTS',
  REQDSR: 'REQDSR',
  REQCTS: 'REQCTS',
  DATALENGTH: 'DATALENGTH',
  PROTOKOL: 'PROTOKOL',
  ISLE_PC_NO: 'ISLE_PC_NO',
  TCPUDP: 'TCPUDP',
  TELNOMESAJDANSONRA: 'TELNOMESAJDANSONRA',
  HANDSHAKE_SURE: 'HANDSHAKE_SURE',
  VIDEOFIED: 'VIDEOFIED',
  ZONE_TABLOSU: 'ZONE_TABLOSU',
  komutsunucuportu: 'komutsunucuportu',
  komutsunucuaktif: 'komutsunucuaktif',
  komutsunucuip: 'komutsunucuip',
  sonsinyalzamani: 'sonsinyalzamani',
  sonsinyal: 'sonsinyal',
  komutsunucusifre: 'komutsunucusifre',
  komutsunucukullanici: 'komutsunucukullanici',
  ONEK: 'ONEK',
  DISIPTEL: 'DISIPTEL',
  DISPORT: 'DISPORT'
});

exports.Prisma.Receivers_protokolScalarFieldEnum = makeEnum({
  ID: 'ID',
  ADI: 'ADI',
  PROTOKOLYOK: 'PROTOKOLYOK'
});

exports.Prisma.Sabit_tablo_varsayilanlarScalarFieldEnum = makeEnum({
  id: 'id',
  fieldadi: 'fieldadi',
  degeri: 'degeri',
  tabloadi: 'tabloadi'
});

exports.Prisma.SabitlerScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  FIRMAADI: 'FIRMAADI',
  YETKILI1: 'YETKILI1',
  YETKILI2: 'YETKILI2',
  ADRES1: 'ADRES1',
  ADRES2: 'ADRES2',
  ILCE: 'ILCE',
  IL: 'IL',
  PKODU: 'PKODU',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  FAX1: 'FAX1',
  FAX2: 'FAX2',
  MESLEKTATILKONTROL: 'MESLEKTATILKONTROL',
  MAXSINYALADETI: 'MAXSINYALADETI',
  WEB: 'WEB',
  ANTET: 'ANTET',
  EMAIL_ADRESS: 'EMAIL_ADRESS',
  MI_ALANKODU: 'MI_ALANKODU',
  DISHAT: 'DISHAT',
  TATILKONTROL: 'TATILKONTROL',
  ALARM_SES: 'ALARM_SES',
  ALANKODUEKLE: 'ALANKODUEKLE',
  PASSMASKELE: 'PASSMASKELE',
  SINYALKONTROLSURESI: 'SINYALKONTROLSURESI',
  VERSIYON: 'VERSIYON',
  OTMISLENDIMESAJI: 'OTMISLENDIMESAJI',
  SMSBITTARABNLIKTEN: 'SMSBITTARABNLIKTEN',
  COKLUHATTAKIBI: 'COKLUHATTAKIBI',
  OZELDURUMABONELIKTEN: 'OZELDURUMABONELIKTEN',
  COKLUWEBKULLANICI: 'COKLUWEBKULLANICI',
  MINDISKBOYUTU: 'MINDISKBOYUTU',
  abonenobaslangic: 'abonenobaslangic',
  abonenohaneadeti: 'abonenohaneadeti',
  VDAIRE: 'VDAIRE',
  VNO: 'VNO'
});

exports.Prisma.SatisfiyatisimleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  ISIM: 'ISIM',
  ZAMORANI: 'ZAMORANI'
});

exports.Prisma.Servis_alarmScalarFieldEnum = makeEnum({
  id: 'id',
  f_kodu: 'f_kodu',
  alarm: 'alarm',
  tarih: 'tarih',
  gonderilmetarihi: 'gonderilmetarihi',
  durum: 'durum'
});

exports.Prisma.Servis_haberverileceklerScalarFieldEnum = makeEnum({
  id: 'id',
  f_kodu: 'f_kodu',
  adisoyadi: 'adisoyadi',
  sifre: 'sifre',
  telefon: 'telefon',
  durum: 'durum',
  tarih: 'tarih',
  gonderilmetarihi: 'gonderilmetarihi',
  sira: 'sira'
});

exports.Prisma.Servis_musteriScalarFieldEnum = makeEnum({
  id: 'id',
  f_kodu: 'f_kodu',
  adisoyadi: 'adisoyadi',
  telefon: 'telefon',
  adres: 'adres',
  email: 'email',
  durum: 'durum',
  tarih: 'tarih',
  gonderilmetarihi: 'gonderilmetarihi'
});

exports.Prisma.ServislerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  FIRMA_ADI: 'FIRMA_ADI',
  SERVISNO: 'SERVISNO',
  SONUC: 'SONUC',
  SERVISVEREN: 'SERVISVEREN',
  SERVISALAN: 'SERVISALAN',
  SERVISBASLAMASAATI: 'SERVISBASLAMASAATI',
  SERVISBITISSAATI: 'SERVISBITISSAATI',
  VERILENSERVISDETAYI: 'VERILENSERVISDETAYI',
  ABONEBILDIRMETARIHI: 'ABONEBILDIRMETARIHI',
  SERVISVERILMETARIHI: 'SERVISVERILMETARIHI',
  SERVISEGIDILMETARIHI: 'SERVISEGIDILMETARIHI',
  SERVISKESINBITISTARIHI: 'SERVISKESINBITISTARIHI',
  KAPANDI: 'KAPANDI',
  tipi: 'tipi'
});

exports.Prisma.ServissonucScalarFieldEnum = makeEnum({
  ID: 'ID',
  SONUC: 'SONUC'
});

exports.Prisma.ServistipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  TIP: 'TIP'
});

exports.Prisma.SeskayitlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  CH_ID: 'CH_ID',
  TYPE: 'TYPE',
  NUMBER: 'NUMBER',
  STARTDATE: 'STARTDATE',
  ENDDATE: 'ENDDATE',
  STARTTIME: 'STARTTIME',
  ENDTIME: 'ENDTIME',
  DURATION: 'DURATION',
  ACIKLAMA: 'ACIKLAMA',
  SOUNDFILE: 'SOUNDFILE',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO'
});

exports.Prisma.SessionsScalarFieldEnum = makeEnum({
  sid: 'sid',
  sess: 'sess',
  expired: 'expired'
});

exports.Prisma.SinyabasliklariScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  FORMAT: 'FORMAT',
  ACIKLAMASI: 'ACIKLAMASI',
  PROTOKOLTURU: 'PROTOKOLTURU',
  MOBILDEGORUNSUN: 'MOBILDEGORUNSUN'
});

exports.Prisma.SinyaliletimturleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  SINYALTIPI: 'SINYALTIPI',
  KODU: 'KODU'
});

exports.Prisma.SinyaltipleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  KOD: 'KOD',
  SINYALTIPI: 'SINYALTIPI',
  DUZELMESI: 'DUZELMESI',
  SMS_EML_ACIKLAMA: 'SMS_EML_ACIKLAMA',
  SESDOSYASI: 'SESDOSYASI',
  ERTELE: 'ERTELE',
  TOPLUISLE: 'TOPLUISLE',
  TIP: 'TIP',
  UCRETSIZSMS: 'UCRETSIZSMS',
  SMSILEISLE: 'SMSILEISLE',
  DUZELDI_OTM_ISLE: 'DUZELDI_OTM_ISLE',
  WEBCANLIFILTRE: 'WEBCANLIFILTRE',
  OTM_ERTELEME_SURESI: 'OTM_ERTELEME_SURESI',
  degistirilemez: 'degistirilemez',
  silinemez: 'silinemez'
});

exports.Prisma.Sinyaltipleri_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  KOD: 'KOD',
  SINYALTIPI: 'SINYALTIPI',
  DUZELMESI: 'DUZELMESI',
  SMS_EML_ACIKLAMA: 'SMS_EML_ACIKLAMA',
  SESDOSYASI: 'SESDOSYASI',
  ERTELE: 'ERTELE',
  TOPLUISLE: 'TOPLUISLE',
  TIP: 'TIP',
  UCRETSIZSMS: 'UCRETSIZSMS',
  SMSILEISLE: 'SMSILEISLE',
  DUZELDI_OTM_ISLE: 'DUZELDI_OTM_ISLE',
  WEBCANLIFILTRE: 'WEBCANLIFILTRE',
  OTM_ERTELEME_SURESI: 'OTM_ERTELEME_SURESI',
  degistirilemez: 'degistirilemez',
  silinemez: 'silinemez'
});

exports.Prisma.SinyalturleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ACIKLAMA: 'ACIKLAMA',
  ALARM: 'ALARM',
  ONCELIK: 'ONCELIK',
  ZEMINRENGI: 'ZEMINRENGI',
  YAZIRENGI: 'YAZIRENGI',
  ERTELENEBILIR: 'ERTELENEBILIR',
  SINYALTIPID: 'SINYALTIPID',
  PROSEDUR: 'PROSEDUR',
  degistirilemez: 'degistirilemez',
  silinemez: 'silinemez'
});

exports.Prisma.Sinyalturleri_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ACIKLAMA: 'ACIKLAMA',
  ALARM: 'ALARM',
  ONCELIK: 'ONCELIK',
  ZEMINRENGI: 'ZEMINRENGI',
  YAZIRENGI: 'YAZIRENGI',
  ERTELENEBILIR: 'ERTELENEBILIR',
  SINYALTIPID: 'SINYALTIPID',
  PROSEDUR: 'PROSEDUR',
  degistirilemez: 'degistirilemez',
  silinemez: 'silinemez'
});

exports.Prisma.SistemkullanicilariScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  PAROLA: 'PAROLA',
  KULLANICIKODU: 'KULLANICIKODU',
  ALARM: 'ALARM',
  SICILNO: 'SICILNO',
  ALARMSEBEBI: 'ALARMSEBEBI',
  ALARMTIPI: 'ALARMTIPI'
});

exports.Prisma.Sistemkullanicilari_ScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SIRA: 'SIRA',
  ADISOYADI: 'ADISOYADI',
  GOREVI: 'GOREVI',
  YAKINLIGI: 'YAKINLIGI',
  TEL1: 'TEL1',
  TEL2: 'TEL2',
  TEL3: 'TEL3',
  TEL4: 'TEL4',
  PAROLA: 'PAROLA',
  KULLANICIKODU: 'KULLANICIKODU',
  ALARM: 'ALARM',
  SICILNO: 'SICILNO',
  ALARMSEBEBI: 'ALARMSEBEBI',
  ALARMTIPI: 'ALARMTIPI'
});

exports.Prisma.Sms_emirleriScalarFieldEnum = makeEnum({
  id: 'id',
  emirzamani: 'emirzamani',
  emirtipi: 'emirtipi',
  mesaj: 'mesaj',
  islendi: 'islendi',
  mesajsirano: 'mesajsirano',
  telno: 'telno',
  mesgul: 'mesgul'
});

exports.Prisma.Sms_gidenScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  MESAJ: 'MESAJ',
  TARIH: 'TARIH',
  MESAJID: 'MESAJID',
  SONUC: 'SONUC',
  TELNO: 'TELNO',
  GONDERILDI: 'GONDERILDI',
  RAPORSONUC: 'RAPORSONUC',
  CH_ID: 'CH_ID',
  MESAJSIRANO: 'MESAJSIRANO',
  BEKLEMEDE: 'BEKLEMEDE',
  MESAJTIPI: 'MESAJTIPI'
});

exports.Prisma.Sms_giden_arizaliScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  MESAJ: 'MESAJ',
  TARIH: 'TARIH',
  MESAJID: 'MESAJID',
  SONUC: 'SONUC',
  TELNO: 'TELNO',
  GONDERILDI: 'GONDERILDI',
  RAPORSONUC: 'RAPORSONUC',
  CH_ID: 'CH_ID',
  MESAJSIRANO: 'MESAJSIRANO',
  BEKLEMEDE: 'BEKLEMEDE',
  MESAJTIPI: 'MESAJTIPI'
});

exports.Prisma.Sms_giden_copyScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  MESAJ: 'MESAJ',
  TARIH: 'TARIH',
  MESAJID: 'MESAJID',
  SONUC: 'SONUC',
  TELNO: 'TELNO',
  GONDERILDI: 'GONDERILDI',
  RAPORSONUC: 'RAPORSONUC',
  CH_ID: 'CH_ID',
  MESAJSIRANO: 'MESAJSIRANO',
  BEKLEMEDE: 'BEKLEMEDE',
  MESAJTIPI: 'MESAJTIPI'
});

exports.Prisma.Sms_gonderilenScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  ADI: 'ADI',
  MESAJ: 'MESAJ',
  TARIH: 'TARIH',
  MESAJID: 'MESAJID',
  SONUC: 'SONUC',
  TELNO: 'TELNO',
  GONDERILDI: 'GONDERILDI',
  RAPORSONUC: 'RAPORSONUC',
  CH_ID: 'CH_ID'
});

exports.Prisma.SmsayarlariScalarFieldEnum = makeEnum({
  id: 'id',
  aciklama: 'aciklama',
  smsfirmakodu: 'smsfirmakodu',
  apiKey: 'apiKey',
  token: 'token',
  orginator: 'orginator',
  kullaniciadi: 'kullaniciadi',
  sifre: 'sifre',
  bayikodu: 'bayikodu',
  musterikodu: 'musterikodu',
  aktif: 'aktif',
  kalankontor: 'kalankontor',
  uyarilimiti: 'uyarilimiti',
  uyariperiyodu: 'uyariperiyodu',
  sonalarmzamani: 'sonalarmzamani'
});

exports.Prisma.SmscihazlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ADI: 'ADI',
  COM: 'COM',
  BAUD: 'BAUD',
  PARITY: 'PARITY',
  DATABIT: 'DATABIT',
  STOPBIT: 'STOPBIT',
  FLOWCONTROL: 'FLOWCONTROL',
  AKTIF: 'AKTIF',
  PCNO: 'PCNO',
  YUKLENENKONTOR: 'YUKLENENKONTOR',
  KULLANILANKONTOR: 'KULLANILANKONTOR',
  KALANKONTOR: 'KALANKONTOR',
  TOPLAMKULLANILANKONTOR: 'TOPLAMKULLANILANKONTOR'
});

exports.Prisma.SmsgenelayarlarScalarFieldEnum = makeEnum({
  id: 'id',
  smsaraci: 'smsaraci',
  smskreditakibi: 'smskreditakibi',
  abn_bitim_uyari_gun: 'abn_bitim_uyari_gun',
  abn_bitim_uyari_periyod: 'abn_bitim_uyari_periyod',
  abn_bit_alr_saati: 'abn_bit_alr_saati',
  aynismsbeklemesuresi: 'aynismsbeklemesuresi',
  yenismsbeklemesuresi: 'yenismsbeklemesuresi',
  smskaraktersiniri: 'smskaraktersiniri'
});

exports.Prisma.SmssablonlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  KOD: 'KOD',
  SABLON: 'SABLON',
  POSTWEBLIK: 'POSTWEBLIK',
  ACIKLAMA: 'ACIKLAMA',
  TIP: 'TIP',
  SONUCTIPI: 'SONUCTIPI',
  SONUCBAS: 'SONUCBAS',
  SONUCBIT: 'SONUCBIT',
  BASARILIDEGERI: 'BASARILIDEGERI',
  BASARILIIDBAS: 'BASARILIIDBAS',
  BASARILIIDBIT: 'BASARILIIDBIT',
  BASARISIZIDBAS: 'BASARISIZIDBAS',
  BASARISIZIDBIT: 'BASARISIZIDBIT',
  VeyaBASARILIDEGERI: 'VeyaBASARILIDEGERI'
});

exports.Prisma.SmssonuctanimlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  SABLONID: 'SABLONID',
  KODU: 'KODU',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.SonsmslerScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  MESAJTIPI: 'MESAJTIPI',
  ZAMAN: 'ZAMAN',
  TELNO: 'TELNO'
});

exports.Prisma.SorumlukodlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  SORUMLUKODU: 'SORUMLUKODU',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.StokkartiScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ADI: 'ADI',
  ACIKLAMA: 'ACIKLAMA',
  RENGI: 'RENGI',
  MARKA: 'MARKA',
  URUNGRUBU: 'URUNGRUBU',
  RESIM: 'RESIM',
  BIRIM: 'BIRIM',
  GIRENMIKTAR: 'GIRENMIKTAR',
  CIKANMIKTAR: 'CIKANMIKTAR',
  MEVCUTMIKTAR: 'MEVCUTMIKTAR',
  BARKODU: 'BARKODU',
  abn_sms: 'abn_sms',
  abn_eposta: 'abn_eposta',
  abn_IVR: 'abn_IVR',
  abn_mobil: 'abn_mobil',
  abn_web: 'abn_web',
  abn_tatil_Takip: 'abn_tatil_Takip',
  DOVIZ_TIPI: 'DOVIZ_TIPI'
});

exports.Prisma.StokozeldurumScalarFieldEnum = makeEnum({
  ID: 'ID',
  urunkodu: 'urunkodu',
  SINYALTIPI: 'SINYALTIPI',
  ALARM: 'ALARM',
  SMS: 'SMS',
  EPOSTA: 'EPOSTA',
  IVR: 'IVR',
  PUSHMESSAGE: 'PUSHMESSAGE'
});

exports.Prisma.StoksatisfiyatlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  ISIM: 'ISIM',
  FIYAT: 'FIYAT',
  STOK_ID: 'STOK_ID',
  FIYAT_ISIM_ID: 'FIYAT_ISIM_ID'
});

exports.Prisma.SunucukomutlariScalarFieldEnum = makeEnum({
  id: 'id',
  sn: 'sn',
  zaman: 'zaman',
  komutid: 'komutid',
  gonderildi: 'gonderildi',
  sianame: 'sianame',
  cidname: 'cidname',
  gelencevap: 'gelencevap',
  sifre: 'sifre',
  skomut: 'skomut',
  freecmd: 'freecmd',
  password: 'password'
});

exports.Prisma.SunucukomuttanimlariScalarFieldEnum = makeEnum({
  id: 'id',
  komuttanimi: 'komuttanimi',
  cihazno: 'cihazno',
  state: 'state',
  num: 'num',
  command: 'command',
  type: 'type',
  ttl: 'ttl',
  schemaname: 'schemaname',
  OTM_MODULID: 'OTM_MODULID'
});

exports.Prisma.TahsilatturleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  tahsilatturu: 'tahsilatturu',
  bayiborclandir: 'bayiborclandir'
});

exports.Prisma.TarihceScalarFieldEnum = makeEnum({
  ID: 'ID',
  ABONEID: 'ABONEID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  UNVANI: 'UNVANI',
  BASLAMATARIHI: 'BASLAMATARIHI',
  BITISTARIHI: 'BITISTARIHI',
  BAGLAYANFIRMA: 'BAGLAYANFIRMA',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.TatilmeslekgrupScalarFieldEnum = makeEnum({
  ID: 'ID',
  MESLEKGRBID: 'MESLEKGRBID',
  TATILGUNID: 'TATILGUNID'
});

exports.Prisma.TelcevirmeayarScalarFieldEnum = makeEnum({
  ID: 'ID',
  TELNO: 'TELNO',
  CEVIR: 'CEVIR'
});

exports.Prisma.TerminallerScalarFieldEnum = makeEnum({
  ID: 'ID',
  IPADRESI: 'IPADRESI',
  TERMINALADI: 'TERMINALADI'
});

exports.Prisma.ToplutahsilatScalarFieldEnum = makeEnum({
  id: 'id',
  tarih: 'tarih',
  fisno: 'fisno',
  tahsilatiyapan: 'tahsilatiyapan',
  aciklama: 'aciklama'
});

exports.Prisma.ToplutahsilatdetayScalarFieldEnum = makeEnum({
  id: 'id',
  fisid: 'fisid',
  cariid: 'cariid',
  fistipi: 'fistipi',
  tarih: 'tarih',
  aciklama: 'aciklama',
  odemetipi: 'odemetipi',
  vadetarihi: 'vadetarihi',
  b_a: 'b_a',
  tutar: 'tutar'
});

exports.Prisma.UlkelerScalarFieldEnum = makeEnum({
  ID: 'ID',
  ULKEKODU: 'ULKEKODU',
  ULKE: 'ULKE'
});

exports.Prisma.UrungruplariScalarFieldEnum = makeEnum({
  ID: 'ID',
  KODU: 'KODU',
  ACIKLAMA: 'ACIKLAMA'
});

exports.Prisma.User_logScalarFieldEnum = makeEnum({
  ID: 'ID',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  KULLANICI: 'KULLANICI',
  TABLO: 'TABLO',
  ALANLAR: 'ALANLAR',
  DEGERLER: 'DEGERLER',
  ISLEM: 'ISLEM',
  TARIH: 'TARIH'
});

exports.Prisma.UserpushtokenScalarFieldEnum = makeEnum({
  id: 'id',
  mustid: 'mustid',
  token: 'token',
  takip: 'takip',
  cihaz: 'cihaz'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  salt: 'salt',
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  roles: 'roles',
  created_at: 'created_at',
  updated_at: 'updated_at',
  provider: 'provider',
  provider_data: 'provider_data',
  provider_data_plus: 'provider_data_plus',
  provider_ids: 'provider_ids',
  reset_password_token: 'reset_password_token',
  reset_password_expires: 'reset_password_expires',
  email_verification_token: 'email_verification_token',
  email_verified: 'email_verified'
});

exports.Prisma.VideofiedScalarFieldEnum = makeEnum({
  id: 'id',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SERI: 'SERI',
  camcount: 'camcount',
  FPV: 'FPV',
  REF: 'REF',
  CNXTYPE: 'CNXTYPE'
});

exports.Prisma.Videofied_camlistScalarFieldEnum = makeEnum({
  id: 'id',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SERI: 'SERI',
  CAMINDEX: 'CAMINDEX',
  CAMNAME: 'CAMNAME'
});

exports.Prisma.Videofied_cmdlistScalarFieldEnum = makeEnum({
  id: 'id',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SERI: 'SERI',
  CMDINDEX: 'CMDINDEX',
  CMDNAME: 'CMDNAME'
});

exports.Prisma.Videofied_logsScalarFieldEnum = makeEnum({
  id: 'id',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  SERI: 'SERI',
  EDATE: 'EDATE',
  LOGDATE: 'LOGDATE',
  LOGDETAIL: 'LOGDETAIL'
});

exports.Prisma.WebmenuScalarFieldEnum = makeEnum({
  id: 'id',
  adi: 'adi',
  ustid: 'ustid',
  sira: 'sira',
  icon: 'icon',
  varsayilan: 'varsayilan',
  kodu: 'kodu'
});

exports.Prisma.WebtaleplerScalarFieldEnum = makeEnum({
  ID: 'ID',
  TARIH: 'TARIH',
  F_KODU: 'F_KODU',
  PARTNO: 'PARTNO',
  KONU: 'KONU',
  DETAY: 'DETAY',
  AKTIF: 'AKTIF'
});

exports.Prisma.YazilimservisleriScalarFieldEnum = makeEnum({
  ID: 'ID',
  serviskodu: 'serviskodu',
  Servisaciklamasi: 'Servisaciklamasi',
  sonaktiflikzamani: 'sonaktiflikzamani',
  aktif: 'aktif',
  servisdisisuresi: 'servisdisisuresi',
  server1activetime: 'server1activetime',
  server2activetime: 'server2activetime',
  Server1Alarm: 'Server1Alarm',
  Server2Alarm: 'Server2Alarm'
});

exports.Prisma.YetkitanimlariScalarFieldEnum = makeEnum({
  ID: 'ID',
  KATAGORIID: 'KATAGORIID',
  KATEGORI: 'KATEGORI',
  BOLUMID: 'BOLUMID',
  BOLUM: 'BOLUM',
  EKLE: 'EKLE',
  SIL: 'SIL',
  GOR: 'GOR',
  DUZELT: 'DUZELT',
  SORGU: 'SORGU'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  evolutions: 'evolutions',
  abonealarmdurumlari: 'abonealarmdurumlari',
  abonecarihareketler: 'abonecarihareketler',
  abonehatkontrolleri: 'abonehatkontrolleri',
  abonelikborclari: 'abonelikborclari',
  abonelikler: 'abonelikler',
  abonelikler_: 'abonelikler_',
  abonemevcutsmskredidurumu: 'abonemevcutsmskredidurumu',
  aboneozeldurum: 'aboneozeldurum',
  abonepartlar: 'abonepartlar',
  abonetatilleri: 'abonetatilleri',
  abonetatilleri_: 'abonetatilleri_',
  abonetelnolari: 'abonetelnolari',
  abonetipleri: 'abonetipleri',
  aboneuzakkullanicilari: 'aboneuzakkullanicilari',
  aboneyuklenensmskredileri: 'aboneyuklenensmskredileri',
  abonezamanlar: 'abonezamanlar',
  abonezamanlar_: 'abonezamanlar_',
  abonezamanlar_copy: 'abonezamanlar_copy',
  accounts: 'accounts',
  alarmbolgetanimlari: 'alarmbolgetanimlari',
  alarmmerkezleri: 'alarmmerkezleri',
  anlasmatipleri: 'anlasmatipleri',
  arizalisinyaller: 'arizalisinyaller',
  at_altolaykodlari: 'at_altolaykodlari',
  at_altolaykodlari_: 'at_altolaykodlari_',
  at_olaykodlari: 'at_olaykodlari',
  at_olaykodlari_: 'at_olaykodlari_',
  bayi_teknisyenler: 'bayi_teknisyenler',
  bayi_teknisyenler_: 'bayi_teknisyenler_',
  bayiabonelikhizmetpaketleri: 'bayiabonelikhizmetpaketleri',
  bayicari: 'bayicari',
  bayihesaplari: 'bayihesaplari',
  bayiler: 'bayiler',
  bayiler_: 'bayiler_',
  bayimailbolgeleri: 'bayimailbolgeleri',
  bayimailmeslekler: 'bayimailmeslekler',
  bayimailsinyaltipleri: 'bayimailsinyaltipleri',
  birimtanimlari: 'birimtanimlari',
  bolgeler: 'bolgeler',
  carifistipleri: 'carifistipleri',
  carikartlar: 'carikartlar',
  cihazdurumlari: 'cihazdurumlari',
  cihazsmskomutlari: 'cihazsmskomutlari',
  degerlendirilmeyeceksinyaller: 'degerlendirilmeyeceksinyaller',
  degerlendirmesonuclari: 'degerlendirmesonuclari',
  dovizkurisimleri: 'dovizkurisimleri',
  email_emirleri: 'email_emirleri',
  email_giden: 'email_giden',
  email_giden_arizali: 'email_giden_arizali',
  email_gonderilen: 'email_gonderilen',
  emailayarlari: 'emailayarlari',
  ertelenenmesajlar: 'ertelenenmesajlar',
  fatura: 'fatura',
  faturadetay: 'faturadetay',
  firmayetkilileri: 'firmayetkilileri',
  fotograflar: 'fotograflar',
  gecersizaboneler: 'gecersizaboneler',
  gelensinyaller: 'gelensinyaller',
  genel_onemlitelefonlar: 'genel_onemlitelefonlar',
  geneltatiller: 'geneltatiller',
  gunler: 'gunler',
  haberverilecekler: 'haberverilecekler',
  haberverilecekler_: 'haberverilecekler_',
  hamsinyaller: 'hamsinyaller',
  hesaptipleri: 'hesaptipleri',
  hizlinotlar: 'hizlinotlar',
  ikguncelleme: 'ikguncelleme',
  ilceler: 'ilceler',
  ilceler_copy: 'ilceler_copy',
  iller: 'iller',
  ip_meslekleri: 'ip_meslekleri',
  ivr_gelenarama: 'ivr_gelenarama',
  ivr_gidenarama: 'ivr_gidenarama',
  ivr_isim: 'ivr_isim',
  ivr_kuyruk: 'ivr_kuyruk',
  ivr_voip: 'ivr_voip',
  kameraayarlari: 'kameraayarlari',
  kameralar: 'kameralar',
  koordinasyon: 'koordinasyon',
  kurum: 'kurum',
  linekartlar: 'linekartlar',
  mailtipleri: 'mailtipleri',
  malzemeler: 'malzemeler',
  malzemeler_: 'malzemeler_',
  markatanimlari: 'markatanimlari',
  mesajlar: 'mesajlar',
  mesajnotlar: 'mesajnotlar',
  meslekgrup: 'meslekgrup',
  mstgrup_teknisyenler: 'mstgrup_teknisyenler',
  mstgruphesaplari: 'mstgruphesaplari',
  mstgrupmailbolgeleri: 'mstgrupmailbolgeleri',
  mstgrupmailsinyaltipleri: 'mstgrupmailsinyaltipleri',
  mstgrupmeslekler: 'mstgrupmeslekler',
  musteri: 'musteri',
  musteri_: 'musteri_',
  mustericari: 'mustericari',
  musterigruplari: 'musterigruplari',
  musterinotlar: 'musterinotlar',
  musterinotlar_copy: 'musterinotlar_copy',
  nottipleri: 'nottipleri',
  operatoraboneleri: 'operatoraboneleri',
  operatorbolgeyetkileri: 'operatorbolgeyetkileri',
  operatorhaklari: 'operatorhaklari',
  operatorinout: 'operatorinout',
  operatormesajlari: 'operatormesajlari',
  operators: 'operators',
  operatorsinyaltipleri: 'operatorsinyaltipleri',
  otmcihazdurumlari: 'otmcihazdurumlari',
  otmgelensinyaller: 'otmgelensinyaller',
  otmgiriscikisdurumlari: 'otmgiriscikisdurumlari',
  otomasyonanalogseviyeler: 'otomasyonanalogseviyeler',
  otomasyonentegrasyon: 'otomasyonentegrasyon',
  otomasyonmodulleri: 'otomasyonmodulleri',
  otomasyonporttipleri: 'otomasyonporttipleri',
  panel_modelleri: 'panel_modelleri',
  panelentegrasyon: 'panelentegrasyon',
  panelipcameralar: 'panelipcameralar',
  paneller: 'paneller',
  pdks: 'pdks',
  postakodlari: 'postakodlari',
  proseccihazayarlari: 'proseccihazayarlari',
  proseccihazyardim: 'proseccihazyardim',
  pushsender: 'pushsender',
  receiverformats: 'receiverformats',
  receivers: 'receivers',
  receivers_protokol: 'receivers_protokol',
  sabit_tablo_varsayilanlar: 'sabit_tablo_varsayilanlar',
  sabitler: 'sabitler',
  satisfiyatisimleri: 'satisfiyatisimleri',
  servis_alarm: 'servis_alarm',
  servis_haberverilecekler: 'servis_haberverilecekler',
  servis_musteri: 'servis_musteri',
  servisler: 'servisler',
  servissonuc: 'servissonuc',
  servistipleri: 'servistipleri',
  seskayitlari: 'seskayitlari',
  sessions: 'sessions',
  sinyabasliklari: 'sinyabasliklari',
  sinyaliletimturleri: 'sinyaliletimturleri',
  sinyaltipleri: 'sinyaltipleri',
  sinyaltipleri_: 'sinyaltipleri_',
  sinyalturleri: 'sinyalturleri',
  sinyalturleri_: 'sinyalturleri_',
  sistemkullanicilari: 'sistemkullanicilari',
  sistemkullanicilari_: 'sistemkullanicilari_',
  sms_emirleri: 'sms_emirleri',
  sms_giden: 'sms_giden',
  sms_giden_arizali: 'sms_giden_arizali',
  sms_giden_copy: 'sms_giden_copy',
  sms_gonderilen: 'sms_gonderilen',
  smsayarlari: 'smsayarlari',
  smscihazlari: 'smscihazlari',
  smsgenelayarlar: 'smsgenelayarlar',
  smssablonlari: 'smssablonlari',
  smssonuctanimlari: 'smssonuctanimlari',
  sonsmsler: 'sonsmsler',
  sorumlukodlari: 'sorumlukodlari',
  stokkarti: 'stokkarti',
  stokozeldurum: 'stokozeldurum',
  stoksatisfiyatlari: 'stoksatisfiyatlari',
  sunucukomutlari: 'sunucukomutlari',
  sunucukomuttanimlari: 'sunucukomuttanimlari',
  tahsilatturleri: 'tahsilatturleri',
  tarihce: 'tarihce',
  tatilmeslekgrup: 'tatilmeslekgrup',
  telcevirmeayar: 'telcevirmeayar',
  terminaller: 'terminaller',
  toplutahsilat: 'toplutahsilat',
  toplutahsilatdetay: 'toplutahsilatdetay',
  ulkeler: 'ulkeler',
  urungruplari: 'urungruplari',
  user_log: 'user_log',
  userpushtoken: 'userpushtoken',
  users: 'users',
  videofied: 'videofied',
  videofied_camlist: 'videofied_camlist',
  videofied_cmdlist: 'videofied_cmdlist',
  videofied_logs: 'videofied_logs',
  webmenu: 'webmenu',
  webtalepler: 'webtalepler',
  yazilimservisleri: 'yazilimservisleri',
  yetkitanimlari: 'yetkitanimlari'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
