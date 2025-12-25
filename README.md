# PERN Todo App Monorepo

Bu proje **PERN (PostgreSQL, Express, React, Node.js) stack** kullanılarak yapılmış bir **TODO uygulamasıdır**. Bu proje **monorepo** yapısında hem frontend hem backend'i içerir ve PostgreSQL ile veri yönetimini sağlar. Ayrıca veri doğrulama için **Zod**, ORM olarak **Prisma**, frontend tarafında **React + TypeScript** ve stil için **Material UI** kullanılmıştır.

---

## Teknolojiler

- **Frontend:** React, TypeScript, Material UI
- **Backend:** Node.js, TypeScript, Express
- **Veritabanı:** PostgreSQL
- **ORM:** Prisma
- **Veri doğrulama:** Zod
- **Lint & Format:** ESLint, Prettier
- **Monorepo yönetimi:** NPM Workspaces

---

## Gereksinimler

- **Node.js**: v20 veya üstü
- **NPM**: v9 veya üstü (monorepo için NPM Workspaces desteği)
- **PostgreSQL**: v14 veya üstü
- **TypeScript**: v5 veya üstü
- **Prisma CLI**: `npx prisma` ile kullanılabilir
- **Tarayıcı**: Modern bir tarayıcı (Chrome, Edge, Firefox)

> Not: `.env` dosyasında veritabanı bağlantısı (`DATABASE_URL`) ve frontend için API URL (`VITE_API_URL`) ayarlanmalıdır.

---

## Kurulum

1. Repository’i klonlayın:
   git clone <repo-url>
   cd <repo-folder>

2. Bağımlılıkları yükleyin:
   npm install veya yarn install

3. PostgreSQL’de bir veritabanı oluşturun ve `.env` dosyasında ayarlayın:  
   DATABASE_URL=postgresql://username:password@localhost:5432/tododb

4. Prisma için server paketinde migrate komutlarını çalıştırın:
   npx prisma migrate dev --name init
   npx prisma generate

5. Backend ve frontend’in kendi dizinlerinde bağımlılıkları yükleyin:  
   cd packages/server && npm install  
   cd packages/client && npm install

---

## Çalıştırma

Monorepo’da hem frontend hem backend’i aynı anda çalıştırmak için:
npm run dev

- Backend: `http://localhost:4000`
- Frontend: `http://localhost:5173` (Vite default port)

---

## Kullanım

- Görev ekleyin, tamamlayın, silin ve güncelleyin.
- Görev filtreleme (All / Active / Completed) özelliği mevcut.
- Güncellemeler API ile backend’e kaydedilir.

---

## Notlar

- ESLint ve Prettier projeye entegre edilmiştir. Her paket için ayrı olacak şekilde "npm run lint" ve "npm run format" komutlarıyla kontrol edebilirsiniz.
- Güncelleme işlemleri inline edit şeklinde React state ile yönetilmektedir.
