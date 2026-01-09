// Tüm resimlere tıklama özelliği ekle
document.querySelectorAll('.konu-resmi, .image-container img').forEach(img => {
    img.style.cursor = 'zoom-in'; // Mouse üzerine gelince büyüteç çıksın
    img.onclick = function() {
        const modal = document.getElementById('image-zoom-modal');
        const zoomedImg = document.getElementById('zoomed-image');
        modal.style.display = 'flex';
        zoomedImg.src = this.src;
    };
});
// --- HAKKIMDA AÇ/KAPAT ---
function hakkimdaAc() {
    document.getElementById('hakkimda-modal').style.display = 'flex';
}

function hakkimdaKapat() {
    document.getElementById('hakkimda-modal').style.display = 'none';
}

// Pencere dışına tıklayınca kapatma
document.getElementById('hakkimda-modal').addEventListener('click', function(e) {
    if(e.target === this) hakkimdaKapat();
});
