# Frontend Ödevi

Aşağıdaki ödevde, sana verilen REST API'yi (arka uç) kullanarak bir frontend (ön yüz) uygulaması geliştirmeni istiyoruz.

---

## 1. Amaç

- Kullanıcıların kayıt olabileceği ve giriş yapabileceği,
- Giriş yaptıktan sonra kullanıcı, ASM ve çanta (bag) verilerini görüntüleyip ekleyebileceği, güncelleyebileceği ve silebileceği
- Basit ve anlaşılır bir web arayüzü oluşturmak.

---

## 2. Kullanılacak Teknolojiler (**Zorunlu**)

**Bu ödevde aşağıdaki teknolojileri kullanman ZORUNLUDUR:**

- [Vue 3](https://vuejs.org/) (modern Vue sürümü)
- [TailwindCSS](https://tailwindcss.com/) (arayüz tasarımı için)

> Başka framework veya CSS kütüphanesi kullanma. Sadece Vue 3 ve TailwindCSS ile yapmalısın.

API istekleri için `fetch` veya `axios` kullanabilirsin.

---

## 3. Yapılacaklar

### a) Kayıt ve Giriş Ekranı

- Kullanıcıdan ad, soyad, e-posta, şifre ve rol bilgisi alıp `/register` endpointine POST isteği at.
- Giriş ekranında e-posta ve şifre alıp `/login` endpointine POST isteği at.
- Giriş başarılı olursa dönen token'ı sakla (localStorage veya değişkende).

### b) Ana Sayfa (Girişten Sonra)

- Kullanıcı, ASM ve çanta (bag) listelerini ayrı sekmelerde veya sayfalarda göster.
- Her veri türü için:
  - Listeleme (GET)
  - Ekleme (POST)
  - Güncelleme (PUT)
  - Silme (DELETE)
- Tüm isteklerde Authorization header'ına `Bearer TOKEN` eklemeyi unutma.

### c) Kullanıcı Deneyimi

- Hataları ve başarılı işlemleri kullanıcıya göster.
- Basit ama anlaşılır bir arayüz yap.
- Tüm arayüzü **TailwindCSS** ile tasarla.

---

## 4. Ekstra (Zorunlu Değil)

- Responsive (mobil uyumlu) tasarım yapabilirsin.
- Kendi eklediğin kullanıcıyla giriş yapıp, sadece kendi bilgilerini görebileceğin bir alan ekleyebilirsin.

---

## 5. Teslim

- Projeni bir klasöre koy.
- Kullandığın teknolojileri ve çalıştırma adımlarını anlatan kısa bir README.md ekle.
- Klasörü zipleyip teslim et.

---

## Notlar

- API'nin nasıl kullanılacağını anlamak için ana klasördeki `README.md` dosyasını dikkatlice oku.
- Takıldığında mentoruna veya ekip arkadaşlarına sorabilirsin.
- Kodunun çalıştığından emin ol.

---

**Önemli:**  
Bu ödevde sadece **Vue 3** ve **TailwindCSS** kullanmalısın. Başka bir framework veya CSS kütüphanesi kullanırsan ödevin geçersiz sayılır.

Kolay gelsin!
