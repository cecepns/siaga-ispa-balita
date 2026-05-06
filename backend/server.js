const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const fallbackMateri = [
  {
    id: 1,
    kategori: 'pengertian',
    title: 'Pengertian ISPA',
    content:
      'Infeksi Saluran Pernapasan Akut (ISPA) adalah infeksi yang menyerang saluran pernapasan, seperti hidung, tenggorokan, hingga paru-paru. Penyakit ini sering terjadi pada balita karena daya tahan tubuh anak masih belum sempurna. ISPA dapat disebabkan oleh virus maupun bakteri dan mudah menular melalui percikan batuk, bersin, atau kontak dengan penderita. Sebagian besar ISPA bersifat ringan, namun bila tidak ditangani dengan baik dapat berkembang menjadi pneumonia atau infeksi paru yang berbahaya.',
  },
  {
    id: 2,
    kategori: 'penyebab',
    title: 'Penyebab ISPA',
    content:
      'Penyebab utama ISPA adalah infeksi virus dan infeksi bakteri. Faktor yang meningkatkan risiko ISPA: paparan asap rokok, polusi udara, lingkungan berdebu, daya tahan tubuh menurun, kontak dengan orang yang sedang batuk/pilek, dan kurang menjaga kebersihan tangan.',
  },
  {
    id: 3,
    kategori: 'faktor_risiko',
    title: 'Faktor Risiko',
    content:
      'Faktor yang meningkatkan risiko ISPA pada balita meliputi paparan asap rokok, polusi udara, lingkungan berdebu, daya tahan tubuh menurun, kontak dengan orang yang sedang batuk/pilek, dan kebersihan tangan yang kurang terjaga.',
  },
  {
    id: 4,
    kategori: 'tanda_gejala',
    title: 'Tanda dan Gejala',
    content:
      'Gejala ISPA pada balita dapat berupa batuk, pilek, demam, tenggorokan sakit, nafsu makan menurun, anak tampak lemas, napas cepat, dan sesak napas.',
  },
  {
    id: 5,
    kategori: 'klasifikasi_tanda_bahaya',
    title: 'Klasifikasi dan Tanda Bahaya',
    content:
      'Anak usia 2-59 bulan: Bukan Pneumonia bila tidak ada tarikan dinding dada bagian bawah ke dalam dan frekuensi napas usia 2-11 bulan kurang dari 50 kali/menit atau usia 12-59 bulan kurang dari 40 kali/menit. Pneumonia bila napas cepat (usia 2-11 bulan >= 50 kali/menit, usia 12-59 bulan >= 40 kali/menit) tanpa tarikan dinding dada bagian bawah. Pneumonia Berat bila napas cepat, ada tarikan dinding dada bagian bawah ke dalam, dan anak tampak sesak. Anak usia kurang dari 2 bulan: Bukan Pneumonia bila frekuensi napas kurang dari 60 kali/menit dan tidak ada tarikan dinding dada. Pneumonia Berat bila frekuensi napas >= 60 kali/menit dan ada tarikan dinding dada bagian bawah ke dalam.',
  },
  {
    id: 6,
    kategori: 'perawatan',
    title: 'Cara Perawatan',
    content:
      'Sebagian besar ISPA ringan dapat dirawat di rumah dengan pemantauan yang baik. Berikan anak minum lebih banyak (air putih sedikit tetapi sering, tetap beri ASI, berikan sup hangat), tetap berikan makan dan ASI, pastikan anak cukup istirahat, pantau suhu tubuh (normal 36,5-37,5°C; waspadai bila >= 38°C lebih dari 3 hari, sesak, atau kejang), pantau napas cepat (usia 2-11 bulan >= 50 kali/menit, usia 12-59 bulan >= 40 kali/menit), dan hindari paparan asap rokok.',
  },
  {
    id: 7,
    kategori: 'pencegahan',
    title: 'Pencegahan',
    content:
      'Pencegahan ISPA meliputi cuci tangan dengan sabun, terapkan etika batuk dan bersin, gunakan masker saat sakit, hindari paparan asap rokok, lengkapi imunisasi anak, berikan makanan bergizi seimbang, serta jaga kebersihan rumah dan ventilasi.',
  },
];

const fallbackKuis = [
  { id: 1, pertanyaan: 'ISPA adalah infeksi pada?', opsi_a: 'Kulit', opsi_b: 'Saluran pernapasan', opsi_c: 'Ginjal', opsi_d: 'Mata', jawaban: 'b' },
  { id: 2, pertanyaan: 'Penyebab ISPA dapat berupa?', opsi_a: 'Virus/bakteri', opsi_b: 'Cedera', opsi_c: 'Kurang tidur', opsi_d: 'Cuaca panas', jawaban: 'a' },
  { id: 3, pertanyaan: 'Tanda bahaya ISPA adalah?', opsi_a: 'Bibir kebiruan', opsi_b: 'Bermain aktif', opsi_c: 'Nafsu makan baik', opsi_d: 'Tidur nyenyak', jawaban: 'a' },
  { id: 4, pertanyaan: 'Upaya pencegahan ISPA?', opsi_a: 'Asap rokok', opsi_b: 'Cuci tangan', opsi_c: 'Rumah tertutup', opsi_d: 'Tidak imunisasi', jawaban: 'b' },
  { id: 5, pertanyaan: 'Self screening bertujuan?', opsi_a: 'Diagnosis pasti', opsi_b: 'Keputusan awal', opsi_c: 'Resep antibiotik', opsi_d: 'Ganti dokter', jawaban: 'b' },
];

function screeningLogic(jawaban) {
  const yesCount = Object.values(jawaban).filter(Boolean).length;
  if (jawaban.q4 || jawaban.q1) {
    return { hasil: 'TANDA_BAHAYA', keterangan: 'Segera ke fasilitas kesehatan' };
  }
  if (yesCount >= 2) {
    return { hasil: 'PERLU_PEMERIKSAAN', keterangan: 'Periksa ke dokter atau puskesmas untuk evaluasi lebih lanjut' };
  }
  return { hasil: 'RISIKO_RENDAH', keterangan: 'Lanjutkan pemantauan dan perawatan di rumah' };
}

app.get('/materi', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, kategori, title, content FROM materi ORDER BY id ASC');
    return res.json({ data: rows });
  } catch (error) {
    return res.json({ data: fallbackMateri, fallback: true });
  }
});

app.post('/screening', (req, res) => {
  const { usia, jawaban } = req.body || {};

  if (!usia || !jawaban || typeof jawaban !== 'object') {
    return res.status(400).json({ message: 'Input tidak valid. Isi usia dan jawaban.' });
  }

  return res.json(screeningLogic(jawaban));
});

app.get('/kuis', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, jawaban FROM kuis ORDER BY id ASC'
    );
    return res.json({ data: rows });
  } catch (error) {
    return res.json({ data: fallbackKuis, fallback: true });
  }
});

app.get('/', (_req, res) => {
  res.send('API Website Siaga ISPA Balita aktif');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
