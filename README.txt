Bu paket, Firebase ile çalışan iki sayfalı başlangıç yapısıdır.

Dosyalar:
- index.html  → ziyaretçi sayfası
- admin.html  → giriş yapılınca yönetim paneli
- firebase-config.js → kendi Firebase bilgilerinizi buraya yazın
- firestore.rules
- storage.rules

Yönetim panelinden yapılabilenler:
- giriş
- yeni derslik ekleme
- kampüs / bina / kat / tür / kapasite / özellik bilgileri girme
- çoklu görsel yükleme
- mevcut kaydı düzenleme
- kaydı silme

Kurulum:
1) Firebase Console'da Authentication > Sign-in method > Email/Password açın.
2) Firestore Database oluşturun.
3) Storage oluşturun.
4) Bu paketteki firestore.rules ve storage.rules içeriklerini ilgili kurallara yapıştırın.
5) firebase-config.js içine kendi proje bilgilerinizi yazın.
6) Dosyaları GitHub Pages'e veya Firebase Hosting'e yükleyin.

Not:
- Yönetim panelinde yüklenen görseller Firebase Storage'a gider.
- Görsel URL'leri ve diğer alanlar Firestore'da classrooms koleksiyonuna kaydedilir.
