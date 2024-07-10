function biletFiyati() {
    var adultInput = parseFloat(document.getElementById("adult").value)
    var studentInput = parseFloat(document.getElementById("student").value)
    
    var sayi1= parseFloat(adultInput) || 0;
    var sayi2= parseFloat(studentInput) || 0;

    var adultTicket = 5;
    var studentTicket = 3;

    var adultFee = sayi1 * adultTicket;
    var studentFee = sayi2 * studentTicket;

    var fiyat = adultFee + studentFee;

    document.getElementById("fiyat").innerText = "Toplam Ücret: " + fiyat + " TL";

}