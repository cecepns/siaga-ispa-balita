export const materiSectionOrder = [
  'pengertian',
  'penyebab',
  'faktor_risiko',
  'tanda_gejala',
  'klasifikasi_tanda_bahaya',
  'perawatan',
  'pencegahan',
  'cuci_tangan',
  'etika_batuk',
];

export const materiStatis = [
  {
    kategori: 'pengertian',
    title: 'Pengertian ISPA',
    paragraphs: [
      'Infeksi Saluran Pernapasan Akut (ISPA) adalah infeksi yang menyerang saluran pernapasan, mulai dari hidung, tenggorokan, hingga paru-paru.',
      'Menurut Kementerian Kesehatan RI, ISPA merupakan salah satu penyakit yang paling sering dialami anak balita dan menjadi penyebab utama kunjungan pelayanan kesehatan. Penyakit ini sering terjadi pada balita karena sistem kekebalan tubuh anak masih belum berkembang secara sempurna. Sebagian besar ISPA bersifat ringan, namun apabila tidak ditangani dengan baik dapat berkembang menjadi pneumonia atau infeksi paru yang berbahaya.',
    ],
    sumber: [
      'Kementerian Kesehatan RI. Pedoman Pencegahan dan Pengendalian ISPA.',
      'World Health Organization, 2024.',
    ],
  },
  {
    kategori: 'penyebab',
    title: 'Penyebab ISPA',
    subsections: [
      {
        title: 'Virus dan Bakteri',
        paragraphs: [
          'ISPA terjadi ketika kuman masuk ke saluran pernapasan melalui percikan batuk atau bersin dari orang lain, kemudian menyebabkan peradangan pada hidung, tenggorokan, atau paru-paru. Akibatnya, anak dapat mengalami batuk, pilek, demam, atau sesak napas. Balita lebih mudah terkena ISPA karena daya tahan tubuhnya masih belum sempurna.',
        ],
      },
    ],
    sumber: ['World Health Organization, 2022.'],
  },
  {
    kategori: 'faktor_risiko',
    title: 'Faktor Risiko',
    paragraphs: [
      'Faktor yang meningkatkan risiko ISPA pada balita meliputi paparan asap rokok, polusi udara, lingkungan berdebu, daya tahan tubuh menurun, kontak dengan orang yang sedang batuk/pilek, dan kebersihan tangan yang kurang terjaga.',
    ],
    sumber: ['Kementrian Kesehatan RI, 2023.', 'World Health Organization, 2022.'],
  },
  {
    kategori: 'tanda_gejala',
    title: 'Tanda dan Gejala',
    paragraphs: [
      'Gejala ISPA pada balita dapat berupa batuk, pilek, demam, tenggorokan sakit, nafsu makan menurun, anak tampak lemas, napas cepat, dan sesak napas.',
    ],
    sumber: ['World Health Organization, 2022.'],
  },
  {
    kategori: 'klasifikasi_tanda_bahaya',
    title: 'Klasifikasi dan Tanda Bahaya',
    subsections: [
      {
        title: 'Anak usia 2-59 bulan',
        list: [
          'ISPA ringan bila tidak ada tarikan dinding dada bagian bawah ke dalam dan frekuensi napas usia 2-11 bulan kurang dari 50 kali/menit atau usia 12-59 bulan kurang dari 40 kali/menit.',
          'ISPA sedang bila napas cepat (usia 2-11 bulan lebih dari 49 kali/menit, usia 12-59 bulan lebih dari 39 kali/menit) tanpa tarikan dinding dada bagian bawah.',
          'ISPA Berat bila napas cepat, ada tarikan dinding dada bagian bawah ke dalam, dan anak tampak sesak.',
        ],
      },
      {
        title: 'Anak usia kurang dari 2 bulan',
        list: [
          'ISPA ringan bila frekuensi napas kurang dari 60 kali/menit dan tidak ada tarikan dinding dada.',
          'ISPA berat bila frekuensi napas lebih dari 60 kali/menit dan ada tarikan dinding dada bagian bawah ke dalam.',
        ],
      },
    ],
    sumber: [
      'Kementerian Kesehatan Republik Indonesia. Pedoman Peningkatan Penerapan Manajemen Terpadu Balita Sakit (MTBS). 2015.',
    ],
  },
  {
    kategori: 'perawatan',
    title: 'Cara Perawatan',
    paragraphs: ['Sebagian besar ISPA ringan dapat dirawat di rumah dengan pemantauan yang baik.'],
    list: [
      'Berikan anak minum lebih banyak (air putih sedikit tetapi sering atau berikan sup hangat)',
      'Tetap berikan makan dan ASI',
      'Pastikan anak cukup istirahat',
      'Pantau suhu tubuh (normal 36,5 - 37,5 C). Waspadai bila lebih dari 38 C, lebih dari 3 hari, dan disertai sesak atau kejang',
      'Pantau napas cepat (usia 2-11 bulan lebih dari 49 kali/menit, usia 12-59 bulan lebih dari 39 kali/menit)',
      'Hindari paparan asap rokok',
    ],
    sumber: [
      'World Health Organization, 2014',
      'Kementrian Kesehatan RI. Pedoman Peningkatan Penerapan Manajemen Terpadu Balita Sakit (MTBS). 2015',
    ],
  },
  {
    kategori: 'pencegahan',
    title: 'Pencegahan',
    list: [
      'Cuci tangan dengan sabun',
      'Terapkan etika batuk dan bersin',
      'Gunakan masker saat sakit',
      'Hindari paparan asap rokok',
      'Lengkapi imunisasi anak',
      'Berikan makanan bergizi seimbang',
      'Jaga kebersihan rumah dan ventilasi',
    ],
    sumber: [
      'World Health Organization, 2014',
      'Kementrian Kesehatan RI. Pedoman Peningkatan Penerapan Manajemen Terpadu Balita Sakit (MTBS). 2015',
    ],
  },
  {
    kategori: 'cuci_tangan',
    title: 'Cuci Tangan 6 Benar',
    list: [
      'Basahi dan beri sabun pada kedua telapak tangan lalu ratakan.',
      'Ratakan sabun pada punggung tangan kanan dan kiri secara bergantian.',
      'Bersihkan sela-sela jari dengan saling mengaitkan jari.',
      'Bersihkan punggung jari dengan posisi jari saling mengunci.',
      'Putar dan bersihkan ibu jari dengan tangan lainnya.',
      'Putar ujung jari dan kuku pada telapak tangan.',
    ],
    sumber: ['World Health Organization. Hand Hygiene Guidelines. 2009'],
  },
  {
    kategori: 'etika_batuk',
    title: 'Etika Batuk',
    list: [
      'Tutup mulut dan hidung saat batuk menggunakan tisu atau lengan atas bagian dalam.',
      'Gunakan tisu sekali pakai lalu segera buang ke tempat sampah.',
      'Cuci tangan dengan sabun setelah batuk atau bersin.',
      'Gunakan masker jika sedang batuk agar tidak menularkan ke orang lain.',
      'Jaga jarak dari orang lain saat batuk atau flu.',
    ],
    sumber: ['World Health Organization.', 'Centers for Disease Control and Prevention. 2024'],
  },
];

export const kuisStatis = [
  {
    id: 1,
    pertanyaan: 'ISPA paling sering menyerang bagian?',
    opsi_a: 'Kulit',
    opsi_b: 'Pencernaan',
    opsi_c: 'Saluran pernapasan',
    opsi_d: 'Tulang',
    jawaban: 'c',
  },
  {
    id: 2,
    pertanyaan: 'Salah satu pencegahan ISPA adalah?',
    opsi_a: 'Kurang tidur',
    opsi_b: 'Cuci tangan',
    opsi_c: 'Asap rokok',
    opsi_d: 'Tidak imunisasi',
    jawaban: 'b',
  },
  {
    id: 3,
    pertanyaan: 'Jika bibir anak membiru, tindakan tepat?',
    opsi_a: 'Pantau saja',
    opsi_b: 'Beri camilan',
    opsi_c: 'Segera ke fasilitas kesehatan',
    opsi_d: 'Tunggu besok',
    jawaban: 'c',
  },
  {
    id: 4,
    pertanyaan: 'Penyebab ISPA bisa berupa?',
    opsi_a: 'Virus/Bakteri',
    opsi_b: 'Cedera',
    opsi_c: 'Alergi makanan saja',
    opsi_d: 'Kurang minum saja',
    jawaban: 'a',
  },
  {
    id: 5,
    pertanyaan: 'Self screening berfungsi untuk?',
    opsi_a: 'Mengganti diagnosis dokter',
    opsi_b: 'Bantu keputusan awal',
    opsi_c: 'Menentukan antibiotik',
    opsi_d: 'Menjamin sembuh',
    jawaban: 'b',
  },
];
