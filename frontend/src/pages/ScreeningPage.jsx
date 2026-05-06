import { useMemo, useState } from 'react';
import { AlertCircle, Info, Stethoscope } from 'lucide-react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';

const questionsByAge = {
  '<2': [
    { id: 'q1', text: 'Apakah bayi mengalami batuk atau pilek?' },
    {
      id: 'q2',
      text: 'Apakah napas anak cepat (60 kali/menit atau lebih)?',
      hint: 'Hitung gerakan dada bayi naik turun selama 1 menit penuh saat bayi tenang atau tidur.',
    },
    {
      id: 'q3',
      text: 'Apakah terdapat tarikan dinding dada ke dalam saat bernapas?',
      hint: 'Contoh: bagian bawah dada tampak masuk ke dalam saat bayi menarik napas.',
    },
    { id: 'q4', text: 'Apakah bayi sulit menyusu atau tidak mau minum ASI?' },
    { id: 'q5', text: 'Apakah bayi tampak sangat lemas?' },
    { id: 'q6', text: 'Apakah bayi mengalami demam?' },
  ],
  '2-59': [
    { id: 'q1', text: 'Apakah anak mengalami batuk atau pilek?' },
    {
      id: 'q2',
      text: 'Apakah napas anak cepat?',
      hint: 'Hitung gerakan dada anak selama 1 menit saat anak tenang. Napas cepat: usia 2-11 bulan >= 50 kali/menit, usia 12-59 bulan >= 40 kali/menit.',
    },
    {
      id: 'q3',
      text: 'Apakah terdapat tarikan dinding dada ke dalam saat anak bernapas?',
      hint: 'Contoh: bagian bawah dada tampak masuk ke dalam saat anak menarik napas.',
    },
    { id: 'q4', text: 'Apakah anak mengalami demam?' },
    { id: 'q5', text: 'Apakah anak sulit makan atau minum?' },
    { id: 'q6', text: 'Apakah anak tampak sangat lemas?' },
    { id: 'q7', text: 'Apakah anak mengalami kejang?' },
  ],
};

const resultStyles = {
  RISIKO_RENDAH: 'border-green-200 bg-green-50 text-green-700',
  PERLU_PEMERIKSAAN: 'border-yellow-200 bg-yellow-50 text-yellow-700',
  TANDA_BAHAYA: 'border-red-200 bg-red-50 text-red-700',
};

const resultContent = {
  '<2': {
    RISIKO_RENDAH: {
      hasil: 'RISIKO_RENDAH',
      keterangan: 'Bayi belum menunjukkan tanda bahaya gangguan pernapasan dan masih dapat dipantau di rumah.',
      kondisi: 'Pemantauan rumahan masih memungkinkan dengan pengawasan orang tua.',
      tindakLanjut: [
        'Tetap berikan ASI sesering mungkin.',
        'Pastikan bayi cukup istirahat dan tetap hangat.',
        'Bersihkan lubang hidung bila mengganggu pemberian ASI.',
        'Jaga kebersihan tangan sebelum memegang bayi.',
        'Hindari paparan asap rokok.',
        'Pantau napas dan suhu tubuh bayi.',
      ],
      segeraKeFaskes: [
        'Napas bayi menjadi cepat.',
        'Bayi sulit menyusu.',
        'Muncul tarikan dinding dada ke dalam.',
      ],
    },
    TANDA_BAHAYA: {
      hasil: 'TANDA_BAHAYA',
      keterangan: 'Bayi menunjukkan tanda bahaya yang memerlukan penanganan segera.',
      kondisi: 'Ada gejala klinis yang perlu evaluasi tenaga kesehatan secepatnya.',
      tindakLanjut: [
        'Segera bawa bayi ke fasilitas kesehatan.',
        'Jangan menunda pemeriksaan.',
        'Tetap upayakan bayi mendapat ASI bila masih mampu menyusu.',
        'Hindari memberikan obat tanpa anjuran tenaga kesehatan.',
      ],
    },
  },
  '2-59': {
    RISIKO_RENDAH: {
      hasil: 'RISIKO_RENDAH',
      keterangan: 'Anak belum menunjukkan tanda bahaya ISPA dan masih dapat dirawat di rumah dengan pemantauan.',
      kondisi: 'Belum ada tanda bahaya berat, tetapi tetap perlu observasi harian.',
      tindakLanjut: [
        'Berikan anak minum lebih banyak.',
        'Pastikan anak cukup istirahat.',
        'Pantau suhu tubuh anak.',
        'Pantau napas anak.',
        'Hindari paparan asap rokok.',
        'Bersihkan hidung anak bila tersumbat.',
      ],
      segeraKeFaskes: ['Napas anak menjadi cepat.', 'Anak tampak sesak.', 'Demam tidak membaik.', 'Anak semakin lemas.'],
    },
    PERLU_PEMERIKSAAN: {
      hasil: 'PERLU_PEMERIKSAAN',
      keterangan: 'Anak menunjukkan tanda yang mengarah ke pneumonia sehingga perlu pemeriksaan tenaga kesehatan.',
      kondisi: 'Napas cepat terdeteksi tanpa tanda bahaya berat lain.',
      tindakLanjut: [
        'Segera bawa anak ke fasilitas kesehatan.',
        'Tetap berikan cairan dan makanan.',
        'Pantau kondisi anak selama perjalanan.',
        'Ikuti pengobatan sesuai anjuran tenaga kesehatan.',
        'Jangan memberikan antibiotik tanpa anjuran tenaga kesehatan.',
      ],
    },
    TANDA_BAHAYA: {
      hasil: 'TANDA_BAHAYA',
      keterangan: 'Anak menunjukkan tanda bahaya ISPA yang membutuhkan penanganan segera.',
      kondisi: 'Terdapat gejala kritis yang tidak boleh ditunda penanganannya.',
      tindakLanjut: [
        'Segera bawa anak ke rumah sakit atau fasilitas kesehatan terdekat.',
        'Jangan menunda pemeriksaan.',
        'Pastikan anak tetap mendapat cairan bila masih bisa minum.',
        'Hindari memberi obat tanpa anjuran tenaga kesehatan.',
      ],
    },
  },
};

const evaluateScreening = (age, answers) => {
  if (age === '<2') {
    if (answers.q2 || answers.q3 || answers.q4 || answers.q5) {
      return resultContent['<2'].TANDA_BAHAYA;
    }
    return resultContent['<2'].RISIKO_RENDAH;
  }

  if (answers.q3 || answers.q5 || answers.q6 || answers.q7) {
    return resultContent['2-59'].TANDA_BAHAYA;
  }
  if (answers.q2 && !answers.q3 && !answers.q5 && !answers.q6 && !answers.q7) {
    return resultContent['2-59'].PERLU_PEMERIKSAAN;
  }
  if (!answers.q2 && !answers.q3 && !answers.q4 && !answers.q5 && !answers.q6 && !answers.q7) {
    return resultContent['2-59'].RISIKO_RENDAH;
  }
  return resultContent['2-59'].PERLU_PEMERIKSAAN;
};

export default function ScreeningPage() {
  const [usia, setUsia] = useState('');
  const [jawaban, setJawaban] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = useMemo(() => (usia ? questionsByAge[usia] : []), [usia]);

  const onChangeAnswer = (id, value) => {
    setJawaban((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!usia) {
      toast.warning('Pilih usia anak terlebih dahulu.');
      return;
    }

    const allAnswered = questions.every((q) => typeof jawaban[q.id] === 'boolean');
    if (!allAnswered) {
      toast.warning('Semua pertanyaan harus diisi sebelum submit.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setResult(evaluateScreening(usia, jawaban));
      setLoading(false);
    }, 350);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-blue-700">Self Screening ISPA</h1>
      <div className="card space-y-3">
        <h2 className="flex items-center gap-2 text-lg font-bold text-blue-700">
          <Stethoscope className="h-5 w-5" /> Apa Itu Self-Screening ISPA?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Self-screening ISPA membantu orang tua mengenali tanda dan gejala ISPA pada anak secara mandiri di rumah
          dengan menjawab pertanyaan sesuai kondisi anak saat ini.
        </p>
        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm font-medium text-yellow-900">
          Hasil screening bukan untuk menggantikan pemeriksaan dokter, tetapi membantu orang tua menentukan apakah
          anak masih dapat dirawat di rumah atau perlu segera dibawa ke fasilitas kesehatan.
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <p className="mb-2 font-semibold">Petunjuk Pengisian</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Jawab pertanyaan sesuai kondisi anak saat ini.</li>
            <li>Pilih jawaban Ya atau Tidak.</li>
            <li>Pastikan anak dalam keadaan tenang saat mengamati napas anak.</li>
            <li>Hitung napas anak selama 1 menit penuh bila diperlukan.</li>
          </ol>
        </div>
      </div>

      <form onSubmit={onSubmit} className="card space-y-4">
        <div>
          <label className="mb-1 block font-medium">Usia Anak</label>
          <select
            value={usia}
            onChange={(e) => {
              setUsia(e.target.value);
              setJawaban({});
              setResult(null);
            }}
            className="w-full rounded-xl border border-slate-300 p-2"
          >
            <option value="">-- Pilih Usia --</option>
            <option value="<2">&lt; 2 bulan</option>
            <option value="2-59">2-59 bulan</option>
          </select>
        </div>

        {usia && <p className="text-sm font-semibold text-blue-700">Pertanyaan akan muncul sesuai usia anak yang dipilih.</p>}

        {questions.map((q, index) => (
          <div key={q.id} className="rounded-xl border border-slate-200 p-3">
            <p className="mb-2 font-medium">{index + 1}. {q.text}</p>
            {q.hint && (
              <div className="mb-2 flex items-start gap-2 rounded-lg bg-blue-50 p-2 text-xs text-blue-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{q.hint}</span>
              </div>
            )}
            <div className="flex gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={jawaban[q.id] === true}
                  onChange={() => onChangeAnswer(q.id, true)}
                />
                Ya
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={jawaban[q.id] === false}
                  onChange={() => onChangeAnswer(q.id, false)}
                />
                Tidak
              </label>
            </div>
          </div>
        ))}

        <button type="submit" className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          Submit Screening
        </button>
      </form>

      {loading && <LoadingSpinner text="Menghitung hasil screening..." />}

      {result && (
        <div className={`rounded-2xl border p-6 ${resultStyles[result.hasil] || 'border-slate-200 bg-white text-slate-700'}`}>
          <div className="mb-2 flex items-center gap-2 text-xl font-bold">
            <AlertCircle className="h-6 w-6" />
            {result.hasil.replace('_', ' ')}
          </div>
          <p className="text-base">{result.keterangan}</p>
          <p className="mt-2 text-sm"><span className="font-semibold">Kondisi:</span> {result.kondisi}</p>
          <div className="mt-3">
            <p className="mb-1 text-sm font-semibold">Tindak Lanjut</p>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {result.tindakLanjut?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {result.segeraKeFaskes?.length > 0 && (
            <div className="mt-3 rounded-xl bg-white/70 p-3 text-sm">
              <p className="font-semibold">Segera ke fasilitas kesehatan bila:</p>
              <ul className="list-disc space-y-1 pl-5">
                {result.segeraKeFaskes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
