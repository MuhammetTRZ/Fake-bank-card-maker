var İnputKartAdı=document.querySelector(".inputKartName");
var kartAdı =document.querySelector(".kartname");

var kartNo=document.querySelector(".kartNumara")
var İnputKartNo=document.querySelector(".inputKartNo");

var gün=document.querySelector(".sktGün")
var İnputgün=document.querySelector(".inputgun");

var yıl=document.querySelector(".sktYıl");
var İnputYıl=document.querySelector(".inputYıl");

var isim_soyİsim=document.querySelector(".ad_soyad");
var İnputAdSoyad=document.querySelector(".input_isimSoyisim");

var input_random=document.querySelector(".input_random");

let tarih = new Date();
let sonKullanmaGünü=tarih.getDate();
let sonKullanmaYılı=(tarih.getFullYear()%1000)+5;
//let randomKartNo = Math.floor(Math.random() * 9e15) + 1e15; gereksiz şuan


//!------------------------------
//todo ayın günü-yıl-cvv-kart no
input_random.addEventListener("click",function(){
    yıl.textContent=sonKullanmaYılı;
});

input_random.addEventListener("click",function(){
    gün.textContent=sonKullanmaGünü;
});
input_random.addEventListener("click",function(){
    let randomCvv = Math.floor((Math.random() * 900)+100); // 0 ile 899 arasında tam sayı
    cvv.textContent=randomCvv;
});

input_random.addEventListener("click", function () {
    // Rastgele 16 basamaklı bir sayı oluştur
    let randomKartNo = Math.floor(Math.random() * 9e15) + 1e15;

    // Sayıyı her 4 basamaktan sonra boşluk ekleyerek formatla
    let formattedKartNo = randomKartNo.toString().replace(/(\d{4})(?=\d)/g, '$1 ');

    // Formatlanmış sayıyı ekrana yazdır
    kartNo.textContent = formattedKartNo;
});


//!------------------------------
document.querySelector(".inputKartName").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ ]/g, ''); // Sadece harflere izin verir
});
İnputKartAdı.addEventListener("input",function(){
    kartAdı.textContent=İnputKartAdı.value;
});
//!-------------
document.querySelector(".inputKartNo").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Sadece 0-9 arası rakamlara izin verir
});

İnputKartNo.addEventListener("input",function(){
    kartNo.textContent=İnputKartNo.value;
});
//!-------------
document.querySelector(".inputgun").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Sadece 0-9 arası rakamlara izin verir
});

İnputgün.addEventListener("input",function(){
    gün.textContent=İnputgün.value;
});
//!-------------

document.querySelector(".inputYıl").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Sadece 0-9 arası rakamlara izin verir
});

İnputYıl.addEventListener("input",function(){
    yıl.textContent=İnputYıl.value;
});
//!-------------

document.querySelector(".input_isimSoyisim").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ ]/g, ''); // Sadece harflere izin verir
});

İnputAdSoyad.addEventListener("input",function(){
    isim_soyİsim.textContent=İnputAdSoyad.value;
});
//!-------------
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', () => {
    cardContainer.classList.toggle('flip');
});
//?arka taraf js

var cvv = document.querySelector(".arka_cvv_value")
var İnputCvv = document.querySelector(".inputCvv");

document.querySelector(".inputCvv").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Sadece 0-9 arası rakamlara izin verir
});

İnputCvv.addEventListener("input",function(){
    cvv.textContent = İnputCvv.value;
});


document.getElementById('inputPhoto').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Kullanıcının seçtiği dosyayı al
    const previewContainer = document.getElementById('çerçeve');
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // Resmi yükle ve önizlemeyi göster
        previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
      };
      reader.readAsDataURL(file); // Resmi base64 formatında yükle
    } else {
      previewContainer.innerHTML = ''; // Seçim iptal edilirse alanı temizle
    }
  });

  // Kart numarası input alanını seç
var inputKartNo = document.getElementById("kartNumarasi");
var kartNumaraDiv = document.querySelector(".kartNumara");

// Kart numarasını her 4 karakterde bir boşluk ekleyerek formatla
inputKartNo.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\s+/g, ""); // Mevcut boşlukları kaldır
  value = value.replace(/(\d{4})(?=\d)/g, "$1 "); // Her 4 karakterden sonra boşluk ekle
  e.target.value = value; // Giriş alanına geri yaz

  // .kartNumara div'ine formatlı değer aktar
  kartNumaraDiv.textContent = value || "--------------"; // Eğer değer yoksa default olarak çizgiler
});
//?------------------------------


document.querySelector('.card-container').addEventListener('click', function() {
    const yönKontrol = document.querySelector('.yönKontrol');

    // Eğer .yönKontrol yeşilse kırmızıya, kırmızıysa yeşile döndür
    if (yönKontrol.style.backgroundColor === 'green') {
        yönKontrol.style.backgroundColor = 'red'; // Rengi kırmızıya değiştir
    } else {
        yönKontrol.style.backgroundColor = 'green'; // Rengi yeşile döndür
    }
});

document.getElementById('buton').addEventListener('click', () => {

    const yönKontrol = document.querySelector('.yönKontrol');
    const frontElement = document.getElementById('card-fronId');
    const backElement = document.getElementById('card-backId');



    if(yönKontrol.style.backgroundColor==='green'){
        alert("lütfen kartı çevir");
    }else{

        // Arka yüzü geçici olarak görünür yap
        backElement.style.visibility = 'visible';
        backElement.style.transform = 'rotateY(0deg)'; // Arka yüzü doğru yönlendirin
            // Ön yüzü kaydet
        html2canvas(frontElement).then(canvas => {
        const link = document.createElement('a');
        link.download = 'kartOn.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Arka yüzü kaydet
        html2canvas(backElement).then(canvas => {
            const backLink = document.createElement('a');
            backLink.download = 'kartArka.png';
            backLink.href = canvas.toDataURL('image/png');
            backLink.click();

            // Arka yüzün görünürlüğünü tekrar gizle
            backElement.style.transform = 'rotateY(180deg)'; // Arka yüzü orijinal pozisyona geri getir
        });
    });
    }

});

