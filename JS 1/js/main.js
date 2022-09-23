//DATA TYPES- Primitive / Non-primitive


// Primitive tipler: deyeri birbasa qebul edir, asagidakilardir:

//var-variable-deyisen
//ad(soyad,..)-deyisken
//tek ve ya cut dirnaq yaza bilersen ferqi yoxdur
//her setirden sonra ; qoya da bilersen qoymaya da

var ad = "Gulay";  //string tipi(text)
console.log(ad);  //consoleda adi goster
//console.error(ad);  qirmizi gosterir error cixarmaq istesek istifade edirik
//console.warn(ad);  xeberdarliq kimi cixardir  
alert(ad);  //xeberdarliq
document.write(ad); //html hisseye "ad"i yaz

var yas = 20;  //number tipi (dirnaqda olsa string)
console.log(yas);

var unvan="";  //null(bosluq)(deyeri yazilmir)

var telebedir=true;  //boolean(bool tipi 2deyeri var:true,false)

//TYPEOF
console.log(typeof telebedir);

var soyad;  //undefined(mueyyen edilmemis, teyin olunmayan)





//OOP(opi)-Object Oriented Programming(obyekt yonlu proqramlasdirma)-1is gormek ucun obyektin olmalidir 



//Non-primitive tipler: deyeri bilevasite qebul edir, birbasa qebul ede bilmir bulara aiddir:

//Class-Object-daxilinde Method, Property -ler olur.
//Property-xususiyyet
//Method-hereket,funksiya

//Obyekt yaradaq:

/*
var Person = {  //obyekt
    name: "Gulay",  //Property bele yazilir, 2hisseye bolunur: key(acar sozu, adi), value(propertynin deyeri)
    age:20,
    height:155,
     
    //Obyektlerin tevelludunu gosteren metod yazaq:

    birthDate:function(){
        return new Date().getFullYear() - this.age
    }

}

alert(Person.birthDate());   //cavabda bunu goster
*/



//PRINT TO SCREEN (ekrana yazdirmaq) -console/ alert/ document.write
//inspect-console- errorun olsa gosterir, ozunun metodlari var



//ARRAYS(MASSIVLER) - 1deyiskenin icerisinde coxlu deyerler saxyala bilersen:
var markalar=["bmw", 'audi', 'mercedes', 'kia'];  //array ozu de bir obyektdir-markalar
console.log(markalar);
console.log(markalar[0]);   //saymaga 0dan baslanir markalar arrayinin 0-ci elementi bmw, 1ci audi,...  
//AMMA ARRAYI UZUNLUGU DEYENDE 1DEN BASLAYIB SAYIRIQ- arrayin uzunlugu 4

console.log(typeof markalar);


//DATE (vaxt demekdir,obyektdir metodlari var-GET ve SET)
//GET-GETIRMEK,MOVCUD BIR SEYI GETIR
//SET- ELAVE ETMEK, OZ MELUMATLARINI DAXIL ETMEK 
//YENI OBYEKT YARADANDA NEW SOZUNDEN ISTIFADE OLUNUR ve ();
 var vaxt= new Date();
 alert(vaxt);

 //GET METODLARI:

 var vaxt= new Date().getFullYear();
 alert(vaxt);

 var vaxt= new Date().getDate();
 alert(vaxt);

 var vaxt= new Date().getMonth();  //SAYMAGA 0-DAN BASLAYIR
 alert(vaxt);

 var vaxt= new Date().getHours();
 alert(vaxt);

 var vaxt= new Date().getMinutes();
 alert(vaxt);

 var vaxt= new Date().getTime();  //1Yanvar 1971 den indiye kimi kecen saniye
 alert(vaxt);

 //SET METODLARI:
/*
 setDate()	
setFullYear()	
setHours()	
setMilliseconds()	
setMinutes()	
setMonth()	
setSeconds()	
setTime()
*/

var vaxt= new Date().setFullYear(2010);   //2010dan buyana kecen vaxti gosterir
alert(vaxt);

var vaxt= new Date().setDate("10-10-2010");
alert(vaxt);

//JS DATE FORMATS(vaxt yaziislarinin 3cur formati var:  ISO DATE(ayzo deyt)(The International Standard-beynelxalq yazilis), SHORT DATE, LONG DATE)


//OPERATORS- emeliyyatlar ucun simbollar(+, -, *,...) novleri:

/*
Aritmetic Operators  (hesab)
Assignment Operators  (tapsiriq)
Comparison Operators  (muqayise)
Logical Operators  (mentiqi)
Conditional Operators  (serti)
Type Operators  (nov)
*/

var reqem1 = 20;
var reqem2 = 10;
var cem = reqem1 + reqem2;
var hasil = reqem1 * reqem2;
var ferq = reqem1 - reqem2;
var bolme = reqem1 / reqem2;

console.log(cem,hasil,ferq,bolme);


var firstname = "Gulay";
var lastname = "Bahramova";
var fullName = firstname + " " + lastname;
console.log(fullName);

alert("Welcome " + fullName);



//CONDITION- veziyyet,SERT - novleri: IF ELSE // SWITCH CASE

var ad = "BBBBBB";
if(ad == "Gulay"){
    alert("Welcome " + ad);
}
else{
    alert("Ad yanlisdir");
}


if(10>9){
    alert("Boyukdur");
}
else{
    alert("Kicikdir");
}


var x = 10;
var y = "10";

if(x == y){          //salam
    alert("Salam"); 
}
else{
    alert("Sagol");
}

if(x === y){          //sagol  //3BERABERDE HEM DEYER HEM DE TIP BERABER OLMALIDIR AMA BURDA TIPI FERQLIDIR
    alert("Salam"); 
}
else{
    alert("Sagol");
}

//VE && sertin ikisi de odenmelidir; VE YA || sertin biri odense qebul edir

var saat = new Date().getHours();

if(saat>6 && saat<=12){
    alert("Good Morning!");
}
else if(saat>12 && saat<18){   //bir nece else if yaza bilersen
    alert("Good Afternoon");
}
else{
    alert('Good Night');
}

//CONDITION-da If mutleq olmalidir, else if,else yazmasanda olar ama if mutleq olmalidir
//if, else if-sert veririk; else- eksidi sert vermirik