---
title: Novelindo Web App
cover: /novelindo/cover.png
website: https://www.novelindo.my.id
featured: true
type: Project
---

Novelindo adalah aplikasi web yang menyediakan konten berupa novel ringan dan anime. Selain itu, Novelindo juga berisi informasi mengenai tulisan.

## Teknologi yang Digunakan

### Next.js

Nextjs dipilih sebagai framework react untuk frontend karena fitur yang lengkap dan render web yang cepat.

## TailwindCSS

Untuk mempermudah proses pengaturan tata letak dan gaya, TailwindCSS dipilih karena selain mempercepat proses pengembangan juga membuat style yang telah ada dapat digunakan kembali.

## Contentlayer

Untuk mengelola konten, kami menggunakan Contentlayer dan markdown. Meski butuh sedikit penyesuaian untuk menguasainya namun Contentlayer dapat menghemat biaya karena tidak memerlukan server.

## Fitur-fitur

### Halaman Utama

Menampilkan daftar-daftar novel dan anime yang difiturkan.

### Navigasi dan Header

Mempermudah pengguna untuk melakukan navigasi pada halaman-halaman utama seperti home, novel, anime, blog dan bookmark. Sedangkan pada header, hanya menampilkan logo dan bilah pencarian.

### Halaman Novel dan Anime

Halaman Novel dan Anime terbagi menjadi beberapa bagian.

- **Index**: Menampilkan daftar semua novel atau Anime
- **Info**: Menampilkan informasi baik novel maupun anime, seperti sinopsis dan genre. Untuk halaman novel menampilkan daftar chapter, sedangkan halaman anime menampilkan daftar episode dan season.
- **Baca Chapter dan Tonton Anime**: Pada halaman membaca chapter tersedia pagination untuk chapter selanjutnya maupun sebelumnya dan terdapat tombol kembali keatas. Sedangkan pada halaman tonton anime berisi video yang dapat ditonton, pagination diganti dengan daftar chapter yang diberi highlight pada episode yang sedang ditonton.

### Halaman Blog

Terdapat dua bagian dimana ada index blog yang menampilkan semua artikel yang telah dipublikasikan. Sedangkan halaman baca artikel menampilkan konten artikel itu sendiri.

### Halaman Bookmark

Menampilkan konten yang disimpan baik berupa novel, anime dan artikel.

### Komentar

Setiap konten yang berupa novel, anime dan blog memiliki fitur komentar dari disqus kecuali halaman chapter dari novel.

### Halaman Error

Ketika halaman tidak ditemukan, pengguna akan mendapatkan informasi error dan tombol kembali ke halaman utama.
