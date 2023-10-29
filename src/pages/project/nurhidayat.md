---
title: "Nurhidayat Blog"
cover: /nurhidayat/cover.png
website: https://www.nurhidayat.web.id
type: Project
featured: true
---

Nurhidayat adalah website yang menyediakan informasi berupa artikel yang berkaitan dengan teknologi, terutama teknologi komputer. Salah satu konten yang dibahas adalah open source, pemrograman, blogging, website dan desain grafis.

## Teknologi yang Digunakan

### Next.js

Next.js dipilih karena dapat digunakan untuk rendering sisi server maupun sisi client. Selain itu, rendering Next.js juga sangat cepat.

### Supabase

Supabase dipilih sebagai backend dari Nurhidayat. Dengan supabase saya bisa menyelesaikan project lebih mudah karena tidak perlu perhatian khusus pada sisi backend. Selain itu, dengan Supabase website tersebut juga dapat diskalakan di masa depan.

### Cloudinary

Cloudinary dipilih sebagai penyimpanan konten gambar dan video. Dengan cloudinary, saya dapat mengubah ukuran, kualitas dan hal lainnya pada video maupun gambar melalui API yang tersedia.

### TipTap

Untuk mengedit konten artikel, saya menggunakan TipTap yang memiliki fitur lengkap untuk sebuah Editor modern dan terbilang mudah dikostumisasikan.

### Algolia

Karena kurangnya fitur pencarian pada backend Supabase, saya memutuskan untuk menggunakan Algolia pada halaman pencarian. Selain itu, fitur Algolia juga lengkap untuk metrik pencarian.

## Teknik Rendering

Pada website Nurhidayat, saya mencampurkan 4 teknik rendering. Dengan cara tersebut, saya dapat memaksimalkan kecepatan rendering website dan membuat pengunjung nyaman.

### Incremental Static Regeneration

Karena pada halaman yang menampilkan konten artikel tidak memerlukan pembaruan yang sering, saya menggunakan fitur dari Next.js yaitu ISR. Dimana setiap halaman artikel akan disajikan secara statis, namun ketika konten diperbarui maka saya dapat menginformasikan server bahwa halaman berubah dan diperbarui di belakan layar.

Teknik ini memiliki keuntungan diantaranya:

- Konten bisa dibaca meski backend down atau dalam pemeliharaan.
- Halaman dapat dimuat sangat cepat tidak berbeda dengan halaman statis.
- Mengatasi server kewalahan akibat pengguna membludak.

### Client Side Rendering

Ketika artikel yang difiturkan bertambah, maka pada halaman yang menggunakan teknik Static dan ISR, konten tersebut hanya menampilkan data lama. Untuk mengatasi ini saya membuat API yang bisa dipanggil dari sisi klien, sehingga artikel yan difiturkan menampilkan paling baru meski pada halaman static sekalipun.

Akan tetapi, rendering sisi client ini memungkinkan CLS (Cumulative Layout Shift) yang tinggi sehingga pengguna kurang nyaman. Namun, hal ini diatasi dengan menampilkan skeleton ketika data sedang dimuat.

### Server Side Rendering

Untuk halaman yang sering berubah seperti halaman utama dan index artikel, saya menggunakan teknik rendering sisi server. Sehingga setiap kali konten diperbarui, pengguna akan langsung melihat konten tersebut.

### Static Rendering

Untuk halaman yang hampir tidak diubah seperti halaman privacy policy, cookies policy dll saya menggunakan teknik static rendering. Meski sangat cepat dimuat namun, ketika halaman akan diperbarui memerlukan deploy ulang.

## Fitur Unggulan
