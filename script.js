document.addEventListener('DOMContentLoaded', () => {
    const stillBtn = document.getElementById('still-btn');
    const notBtn = document.getElementById('not-btn');
    const bearImage = document.getElementById('bear-image');
    const happyText = document.getElementById('happy-text');
    const questionText = document.getElementById('question-text');

    // Daftar ekspresi beruang
    const bearExpressions = ['gambar2.jpg', 'gambar2.jpg', 'gambar3.jpg', 'gambar4.jpg']; // Tambahkan gambar ekspresi
    let currentExpression = 0;

    // Deteksi apakah perangkat adalah mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Fungsi untuk memindahkan tombol secara acak
    const moveButtonRandomly = () => {
        const randomX = Math.random() * (window.innerWidth - stillBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - stillBtn.offsetHeight);

        stillBtn.style.position = 'absolute'; // Pastikan tombol menggunakan posisi absolut
        stillBtn.style.left = `${randomX}px`;
        stillBtn.style.top = `${randomY}px`;
    };

    // Ketika tombol "masih" disentuh
    stillBtn.addEventListener('mouseover', () => {
        if (!isMobile) {
            moveButtonRandomly(); // Hanya pindahkan tombol pada perangkat non-mobile
        }

        // Ubah ekspresi beruang
        currentExpression = (currentExpression + 1) % bearExpressions.length; // Rotasi ekspresi
        bearImage.src = bearExpressions[currentExpression];

        // Efek animasi beruang
        bearImage.style.transform = 'scale(1.2)';
        setTimeout(() => {
            bearImage.style.transform = 'scale(1)';
        }, 300); // Efek kembali ke ukuran normal
    });

    // Ketika tombol "udah engga" ditekan
    notBtn.addEventListener('click', () => {
        // Ganti ekspresi beruang jadi senyum
        bearImage.src = 'gambar5.jpg'; // Tambahkan gambar ekspresi senyum, misalnya "bear-smile.png"

        // Tampilkan teks "ututuu ayangg akuu uda ngga ngambek"
        happyText.classList.remove('hidden');

        // Sembunyikan pertanyaan dan tombol lainnya
        questionText.classList.add('hidden');
        stillBtn.style.display = 'none';
        notBtn.style.display = 'none';

        // Efek animasi pada beruang saat senyum
        bearImage.style.transform = 'scale(1.3)';
        setTimeout(() => {
            bearImage.style.transform = 'scale(1)';
        }, 300);
    });
});
