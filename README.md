# NodeJS-Backend-Mastery

Proje Hakkında
Bu projede, Express.js kullanarak bir Node.js uygulaması geliştirdim. Express.js, minimal ve esnek bir Node.js web uygulama çatısıdır ve basit web uygulamalarından gelişmiş API'lere kadar birçok farklı proje için ideal bir çözümdür.

Kurulum
Bu projeyi yerel bilgisayarınıza klonlayarak kullanabilirsiniz. Aşağıdaki adımları izleyerek projeyi başlatın:

Bu repoyu klonlayın:
git clone https://github.com/kullaniciadi/proje-adi.git


Proje dizinine gidin:
cd proje-adi


Gerekli bağımlılıkları yükleyin:
npm install


Uygulamayı başlatın:
npm start


Tarayıcınızda projeyi görüntülemek için http://localhost:3000 adresine gidin.

Proje Yapısı
Bu Express.js projesinin dosya yapısı aşağıdaki gibidir:

├── app.js               # Uygulama giriş noktası


├── /bin


│   └── www              # Sunucunun başlatıldığı dosya


├── /routes              # Uygulama yönlendirme (routes) dosyaları


│   ├── index.js         # Ana route dosyası


│   └── users.js         # Kullanıcılar için route dosyası


├── /public              # Statik dosyalar (CSS, JavaScript, Resimler)


├── /views               # Görüntü dosyaları (EJS, Pug gibi)


├── /node_modules        # Bağımlılıklar


└── package.json         # Proje bağımlılıkları ve betikleri


Ana Dosyalar:
app.js: Uygulamanın temel ayarlarının yapıldığı dosyadır. Middleware'ler ve route'lar burada tanımlanır.


routes/: Uygulamanın farklı URL'leri için yönlendirme (routing) dosyaları.


views/: Sunucu tarafından render edilen sayfalar burada bulunur.


public/: Statik dosyalar (resimler, CSS, JavaScript dosyaları) bu klasörde saklanır.


Kullanılan Teknolojiler


Bu projede aşağıdaki teknolojiler kullanılmıştır:

Node.js: Sunucu tarafında JavaScript çalıştırmak için kullanılan bir platform.


Express.js: Minimal ve esnek bir Node.js web uygulama çatısı.


EJS: Sunucu taraflı render edilen sayfalar için şablon motoru.


Nodemon: Geliştirme sırasında sunucuyu otomatik yeniden başlatmak için kullanılır.


Yardım ve Katkıda Bulunma


Projeyle ilgili geri bildirim veya önerileriniz varsa lütfen bir Issue açın ya da Pull Request gönderin.

