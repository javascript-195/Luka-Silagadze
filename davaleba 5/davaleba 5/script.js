let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
function nomeri1(arr){
    for(let i = 2; i<arr.length; i+=3){
        console.log(arr[i]);
    }
}
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
function nomeri2(arr){
    for(let i = 9; i>=0; i--){
        console.log(arr[i]);
    }
}
// მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
function nomeri3(){
    let names = ['John', 'Nick', 'Mary', 'Bob', 'Sue', 'Ann'];
    for(let i = 0;  i<=names.length; i++){
        if(names[i] === "Bob"){
            names.splice(i, 1);
        }
    }
    console.log(names);
    
}
// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.
function nomeri4(num, pwr){
    let result = 1;
    for(let i = 0; i<pwr; i++){
        result*=num;
    }
    console.log(result);
}
// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
function nomeri5(){
    for(let i = 1; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
            continue;
        }
        if(i%3===0){
            console.log("FIZZ")
            continue;
        }
        if(i%5===0){
            console.log("BUZZ")
            continue;
        }
        
        else console.log(i);
    }
}
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 
function nomeri6(num){
    let result = 1;
    for(let i = 1; i<=num; i++){
        result*=i;
    }
    console.log(result);
}
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
function nomeri7(word){
    word = word[0].toUpperCase() + word.slice(1);
    console.log(word);
}
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
function nomeri8(word){
    if(word.trim() === "") console.log("this string is blank");
    else console.log("this string is not blank");
}
// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
function nomeri9(str){
    let arr = str.split(" ");
    console.log(arr);
}
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
function nomeri10(email){
    const start = email.indexOf(".");
    const end = email.indexOf("@");
    const secured = ".".repeat(end - start);
    const securedEmail = email.slice(0, start) + secured + email.slice(end, email.length);

    console.log(securedEmail);
}
// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
function nomeri11(str){
    let words = str.split(" ");
    let longest = "";

    for(let word of words){
        if(word.length > longest.length) longest = word;
    }

    console.log(longest);
}

// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით
function nomeri12(){
    const calculator = {
        num1: 10,
        num2: 5,

        add(){return this.num1 + this.num2},
        subtract(){return this.num1 - this.num2},
        multiply(){return this.num1 * this.num2},
        divide(){return this.num1 / this.num2}
    }
    console.log(calculator.add());
    console.log(calculator.subtract());
    console.log(calculator.multiply());
    console.log(calculator.divide());
}


