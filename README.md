# Jaya Berkah Kontraktor (JBK) — Static Next.js App

Proyek ini adalah website company profile/portofolio statis untuk *Jaya Berkah Kontraktor (JBK)*.

Tech stack:
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

Folder project dibuat di `/workspace/jbk-website`.

Instalasi & pengembangan lokal:

```bash
cd /workspace/jbk-website
npm install
npm run dev
```

Build & jalankan produksi:

```bash
npm run build
npm start
```

Deploy ke Vercel (gratis):
1. Buat repository GitHub dan push seluruh folder `/workspace/jbk-website` ke repo.
2. Daftar/login ke https://vercel.com dan pilih "Import Project" → Hubungkan GitHub → pilih repo Anda.
3. Vercel mendeteksi Next.js otomatis. Klik Deploy. Tidak perlu environment variable.

Catatan:
- Semua konten statis disimpan di `data/services.ts` dan `data/projects.ts`.
- Gambar placeholder ada di `public/images/`.
