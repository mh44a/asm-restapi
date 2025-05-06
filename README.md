# REST API Kullanım Kılavuzu (Çok Basit Anlatım)

Merhaba! Bu dosya, bu projeyi nasıl çalıştıracağını ve kullanacağını sana adım adım anlatacak. Hiçbir şey bilmiyorsan bile buradaki adımları takip ederek projeyi çalıştırabilirsin.

---

## 1. Node.js Nedir ve Nasıl Kurulur?

Bu projeyi çalıştırmak için bilgisayarında **Node.js** adında bir program olmalı.

- Node.js, internette [https://nodejs.org/](https://nodejs.org/) adresinden indirilir.
- Açılan sayfada **LTS** yazan (sol taraftaki) yeşil butona tıkla ve indir.
- İndirdiğin dosyayı aç ve "Next" diyerek kurulumu tamamla. (Hiçbir ayarı değiştirmene gerek yok.)

---

## 2. Proje Klasörüne Nasıl Girilir?

- Bu klasörü bilgisayarında bir yere kaydet.
- **Başlat Menüsü**'nden "**Komut İstemi**" veya "**Terminal**" yazıp aç.
- Açılan siyah ekranda, bu projenin olduğu klasöre gitmelisin.
- Örneğin, masaüstündeyse şunu yaz:
  ```
  cd Desktop\restapi
  ```
  ve **Enter**'a bas.

---

## 3. Gerekli Dosyaları Yükleme

- Terminalde şu komutu yaz:
  ```
  npm install
  ```
- Bu komut, proje için gerekli olan dosyaları otomatik olarak indirir. (Biraz sürebilir.)

---

## 4. Projeyi Başlatma

- Terminalde şunu yaz:
  ```
  node server.js
  ```
- Eğer hata yoksa şöyle bir yazı görürsün:
  ```
  API hazır: http://localhost:3000
  ```

---

## 5. API Nedir ve Nasıl Kullanılır?

- API, başka programların veri alıp göndermesini sağlayan bir sistemdir.
- Bu projede kullanıcı, ASM ve çanta bilgilerini yönetebilirsin.
- API'ye istek göndermek için [Postman](https://www.postman.com/downloads/) gibi bir program kullanabilirsin.

---

## 6. Kayıt Olma ve Giriş Yapma

### Kayıt Olmak İçin

- Postman'da yeni bir **POST** isteği oluştur.
- Adres kısmına şunu yaz:
  ```
  http://localhost:3000/register
  ```
- "Body" kısmında "raw" ve "JSON" seçili olsun.
- Şunu yaz:
  ```json
  {
    "name": "Adın",
    "surname": "Soyadın",
    "email": "mail@example.com",
    "password": "şifre",
    "role": "rol"
  }
  ```
- "Send" butonuna bas.

### Giriş Yapmak İçin

- Yeni bir **POST** isteği oluştur.
- Adres: 
  ```
  http://localhost:3000/login
  ```
- "Body" kısmına şunu yaz:
  ```json
  {
    "email": "mail@example.com",
    "password": "şifre"
  }
  ```
- "Send" butonuna bas.
- Dönen cevapta `"token"` diye bir şey göreceksin. Bunu kopyala.

---

## 7. Diğer İşlemler (Kullanıcı, ASM, Çanta)

- Diğer işlemler için her isteğe **Authorization** başlığı eklemen gerekir.
- Postman'da "Headers" kısmına şunu ekle:
  ```
  Key: Authorization
  Value: Bearer BURAYA_TOKEN_YAPIŞTIR
  ```
- "BURAYA_TOKEN_YAPIŞTIR" kısmına az önce aldığın token'ı yapıştır.

### Örnek: Tüm Kullanıcıları Listele

- **GET** isteği gönder:
  ```
  http://localhost:3000/users
  ```

### Örnek: Yeni ASM Ekle

- **POST** isteği gönder:
  ```
  http://localhost:3000/asm
  ```
- Body:
  ```json
  {
    "name": "ASM Adı",
    "code": "ASM001",
    "address": "Adres",
    "phone": "Telefon"
  }
  ```

---

## 8. Sık Sorulan Sorular

- **Hata alırsan:** Terminalde çıkan yazıyı dikkatlice oku. Eksik bir şey yaptıysan tekrar adımları kontrol et.
- **Yardım gerekirse:** Mentoruna veya ekip arkadaşına sorabilirsin.

---

## 9. Ek Bilgiler

- Tüm veriler `data.json` dosyasında saklanır.
- Şifreler güvenli şekilde kaydedilir.
- Token olmadan çoğu işlemi yapamazsın.

---

Her adımı dikkatlice uygula, takıldığında tekrar bu dosyaya bakabilirsin. Kolay gelsin!
