    "use strict";//uses modern JS


    let name = "Alex";
    let surname = "Mocanu";
    let year = 2018;
    console.log(name);
    console.log(year);
    let info = `${name} ${surname} este nascut in anul ${year}`;
    console.log(info);

    const elev = {
        nume: "Alex" ,
        prenume: "Ionescu" ,
        age: 18 , 
        anuInvatamant: 3
    };
    console.log(typeof testObj);

    let nums = ['1' , '2' , '3' , '4'];
    console.log(nums);
    console.log(nums[2]);

    const dataBase = [
        {
            firUserName: 'George',
            firUserAge: 30,
            firUserEmail: "email@gmail.com"
        },
        {
            secUserName: "Alex",
            secUserAge: 27,
            secUserEmail:"email2@gmail.com"
        }
    ];
    console.log(dataBase[0].firUserEmail);
    console.log(dataBase[1].secUserAge);
    dataBase[2] = {
        secUserName: "Florin",
        secUserAge: 57,
        secUserEmail:"email3@gmail.com"
    };
    console.log(dataBase[2].secUserAge);

    console.log(nums instanceof Array);
    console.log(nums instanceof Number);
    console.log("Lungimea sirului (array) nums este:", nums.length);//lungimea unui sir
    console.log(nums.indexOf("2"));//cauta aparitia unui element in cadrul unui sir si returneaza index ul acelui element , iar daca sunt mai multe , se returneza prima sa aparitie  -1 daca nu este ceea ce cautam in sir
    console.log(nums.indexOf("5"));


    //push baga un element la finalul sirului
    nums.push("6");
    console.log("Noul sir format:" , nums , ", iar in sir a fost inserat caracterul: " , nums[nums.length-1]);
    console.log(nums.length);

    //unshift baga un element in sir , dar la inceput
    console.log("Sirul initial", nums);
    nums.unshift("0");
    console.log("Noul sir format:" , nums , " iar caracterul inserta este :" , nums[0]);

    //pop elimina ultimul elem din sir si-l afiseaza
    let test1 = nums.pop();
    console.log(test1);
    console.log("Sirul devine dupa pop : " , nums);

    //shift elimina primul caracter din sir
    let test2 = nums.shift();
    console.log("Sirul ramas" , nums);
    console.log("Elementul sters: " , test2); 

    //revers inverseaza sirul , adica primul element devine ultimul , al doilea penultimul si tot asa
    nums.reverse();
    console.log(nums);

    //slice , returneaza un subsir din sirul inital , fara al afecta , functia poate primi parametri cum ar fi index-ul de unde incepe si unde se sfarseste , daca nu este mentionata a doua , functia returnaza sirul pana la final
    let test4 = nums.slice(2);
    console.log("Slice de la 2: ", test4);
    let test5 = nums.slice(1,4);
    console.log("Slice de la 1 la 4 " , test5);

    //concat - concateneaza sirurile , fara a le afecta elemenele

    const letters = ['a','b','c'];
    let test6 = nums.concat(letters);
    console.log("Sirul nums:" , nums);
    console.log("Sirul letters: " , letters)
    console.log("Concatenarea lor:" , test6);