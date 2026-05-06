CREATE DATABASE IF NOT EXISTS siaga_ispa;
USE siaga_ispa;

CREATE TABLE IF NOT EXISTS materi (
  id INT AUTO_INCREMENT PRIMARY KEY,
  kategori VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS kuis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pertanyaan TEXT NOT NULL,
  opsi_a VARCHAR(255) NOT NULL,
  opsi_b VARCHAR(255) NOT NULL,
  opsi_c VARCHAR(255) NOT NULL,
  opsi_d VARCHAR(255) NOT NULL,
  jawaban CHAR(1) NOT NULL
);

INSERT INTO materi (kategori, title, content) VALUES
('pengertian', 'Pengertian ISPA', 'Infeksi Saluran Pernapasan Akut (ISPA) adalah infeksi yang menyerang saluran pernapasan, seperti hidung, tenggorokan, hingga paru-paru. Penyakit ini sering terjadi pada balita karena daya tahan tubuh anak masih belum sempurna. ISPA dapat disebabkan oleh virus maupun bakteri dan mudah menular melalui percikan batuk, bersin, atau kontak dengan penderita. Sebagian besar ISPA bersifat ringan, namun bila tidak ditangani dengan baik dapat berkembang menjadi pneumonia atau infeksi paru yang berbahaya.'),
('penyebab', 'Penyebab ISPA', 'Penyebab utama ISPA adalah infeksi virus dan infeksi bakteri. Faktor yang meningkatkan risiko ISPA: paparan asap rokok, polusi udara, lingkungan berdebu, daya tahan tubuh menurun, kontak dengan orang yang sedang batuk/pilek, dan kurang menjaga kebersihan tangan.'),
('faktor_risiko', 'Faktor Risiko', 'Faktor yang meningkatkan risiko ISPA pada balita meliputi paparan asap rokok, polusi udara, lingkungan berdebu, daya tahan tubuh menurun, kontak dengan orang yang sedang batuk/pilek, dan kebersihan tangan yang kurang terjaga.'),
('tanda_gejala', 'Tanda dan Gejala', 'Gejala ISPA pada balita dapat berupa batuk, pilek, demam, tenggorokan sakit, nafsu makan menurun, anak tampak lemas, napas cepat, dan sesak napas.'),
('klasifikasi_tanda_bahaya', 'Klasifikasi dan Tanda Bahaya', 'Anak usia 2-59 bulan: Bukan Pneumonia bila tidak ada tarikan dinding dada bagian bawah ke dalam dan frekuensi napas usia 2-11 bulan kurang dari 50 kali/menit atau usia 12-59 bulan kurang dari 40 kali/menit. Pneumonia bila napas cepat (usia 2-11 bulan >= 50 kali/menit, usia 12-59 bulan >= 40 kali/menit) tanpa tarikan dinding dada bagian bawah. Pneumonia Berat bila napas cepat, ada tarikan dinding dada bagian bawah ke dalam, dan anak tampak sesak. Anak usia kurang dari 2 bulan: Bukan Pneumonia bila frekuensi napas kurang dari 60 kali/menit dan tidak ada tarikan dinding dada. Pneumonia Berat bila frekuensi napas >= 60 kali/menit dan ada tarikan dinding dada bagian bawah ke dalam.'),
('perawatan', 'Cara Perawatan', 'Sebagian besar ISPA ringan dapat dirawat di rumah dengan pemantauan yang baik. Berikan anak minum lebih banyak (air putih sedikit tetapi sering, tetap beri ASI, berikan sup hangat), tetap berikan makan dan ASI, pastikan anak cukup istirahat, pantau suhu tubuh (normal 36,5-37,5°C; waspadai bila >= 38°C lebih dari 3 hari, sesak, atau kejang), pantau napas cepat (usia 2-11 bulan >= 50 kali/menit, usia 12-59 bulan >= 40 kali/menit), dan hindari paparan asap rokok.'),
('pencegahan', 'Pencegahan', 'Pencegahan ISPA meliputi cuci tangan dengan sabun, terapkan etika batuk dan bersin, gunakan masker saat sakit, hindari paparan asap rokok, lengkapi imunisasi anak, berikan makanan bergizi seimbang, serta jaga kebersihan rumah dan ventilasi.');

INSERT INTO kuis (pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, jawaban) VALUES
('ISPA adalah infeksi pada?', 'Kulit', 'Saluran pernapasan', 'Ginjal', 'Mata', 'b'),
('Penyebab ISPA dapat berupa?', 'Virus/bakteri', 'Cedera', 'Kurang tidur', 'Cuaca panas', 'a'),
('Tanda bahaya ISPA adalah?', 'Bibir kebiruan', 'Bermain aktif', 'Nafsu makan baik', 'Tidur nyenyak', 'a'),
('Upaya pencegahan ISPA?', 'Asap rokok', 'Cuci tangan', 'Rumah tertutup', 'Tidak imunisasi', 'b'),
('Self screening bertujuan?', 'Diagnosis pasti', 'Keputusan awal', 'Resep antibiotik', 'Ganti dokter', 'b');
