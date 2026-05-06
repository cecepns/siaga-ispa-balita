import { useState } from 'react';
import { toast } from 'react-toastify';
import { kuisStatis } from '../data/staticContent';

export default function QuizPage() {
  const quiz = kuisStatis;
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const onAnswer = (id, option) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
    const question = quiz.find((q) => q.id === id);
    if (!question) return;
    if (question.jawaban === option) toast.success('Jawaban Benar!');
    else toast.error('Jawaban Salah!');
  };

  const hitungSkor = () => {
    if (Object.keys(answers).length < quiz.length) {
      toast.warning('Jawab semua pertanyaan terlebih dahulu.');
      return;
    }

    const total = quiz.reduce((acc, item) => acc + (answers[item.id] === item.jawaban ? 1 : 0), 0);
    setScore(total);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-blue-700">Kuis ISPA Balita</h1>
      {quiz.map((q) => (
        <div key={q.id} className="card">
          <p className="mb-3 font-semibold">{q.id}. {q.pertanyaan}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {['a', 'b', 'c', 'd'].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onAnswer(q.id, opt)}
                className={`rounded-xl border p-2 text-left ${answers[q.id] === opt ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                {opt.toUpperCase()}. {q[`opsi_${opt}`]}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={hitungSkor} className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
        Lihat Skor
      </button>

      {score !== null && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center text-green-700">
          <p className="text-xl font-bold">Skor Anda: {score} / {quiz.length}</p>
        </div>
      )}
    </div>
  );
}
