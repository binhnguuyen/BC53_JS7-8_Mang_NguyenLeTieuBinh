// Câu 1
// Global variable
var arrNumber = [];
var arrIntegerNumber = [];

function addNumToArr() {
    var indexOffArr = +document.getElementById("indexOffArr").value;
    var result1 = document.getElementById("result1");

    arrNumber.push(indexOffArr);

    resContent =
        `
    <div>
        Dãy của bạn hiện giờ là: ${arrNumber}
    </div> 
    `;

    result1.innerHTML = resContent;
}


// Câu 2
function countPosNum() {
    var result2 = document.getElementById("result2");
    var cnt = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            cnt++;
        }
    }


    resContent =
        `
    <div>
        Có tất cả: ${cnt} số dương trong dãy này
    </div> 
    `;

    result2.innerHTML = resContent;
}


// Câu 3
function findMinNum() {
    var result3 = document.getElementById("result3");

    var minIndex = findIndexMin(arrNumber);

    resContent =
        `
    <div>
        Số nhỏ nhất trong mảng là: ${arrNumber[minIndex]}
    </div> 
    `;

    result3.innerHTML = resContent;
}

// Câu 4
function findMinPosNum() {
    var result4 = document.getElementById("result4");

    var minPosIndex = findIndexPosMin(arrNumber);


    resContent =
        `
    <div>
        Số dương nhỏ nhất trong mảng là: ${arrNumber[minPosIndex]}
    </div> 
    `

    result4.innerHTML = resContent;
}


// Câu 5
function findLastEvenNum() {
    var result5 = document.getElementById("result5");

    var lastMinPosIndex = 0;
    var cnt = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        if ((arrNumber[i] % 2 == 0) && (arrNumber[i] != 0)) {
            lastMinPosIndex = i;
        }
        else {
            cnt++;
            if (cnt == arrNumber.length) {
                lastMinPosIndex = -1;
            }
        }
    }

    if (lastMinPosIndex != -1) {
        resContent =
            `
    <div>
        Số chẵn cuối cùng trong mảng là: ${arrNumber[lastMinPosIndex]}
    </div> 
    `;
    }
    else {
        resContent =
            `
    <div>
        Mảng này ko có số chẵn
    </div> 
    `;
    }

    result5.innerHTML = resContent;
}



// Câu 6
function exchangePosNum() {
    var result6 = document.getElementById("result6");
    var num1 = +document.querySelector("#numToChange1").value;
    var num2 = +document.querySelector("#numToChange2").value;

    // Có nhiều cách
    // C1:
    // [arrNumber[num1], arrNumber[num2]] = [arrNumber[num2], arrNumber[num1]];

    // C2:
    arrNumber[num2] = arrNumber.splice(num1, 1, arrNumber[num2])[0];

    resContent =
        `
    <div>
        Mảng hiện giờ là: ${arrNumber}
    </div> 
    `
        ;

    result6.innerHTML = resContent;
}


// Câu 7
function sortInAscending() {
    var result7 = document.getElementById("result7");
    var result;


    var result = arrNumber.sort(function (pt1, pt2) {
        // return về số dương thì giữ nguyên, return về số âm thì nó hoán vị
        // if (pt2 > pt1) {
        //     return -1;
        // }
        // return 1;
        return pt1 - pt2;
    });
    // console.log('result: ', result);


    resContent =
        `
    <div>
        Mảng hiện giờ là: ${result}
    </div> 
    `
        ;

    result7.innerHTML = resContent;
}


// Câu 8
function findPrimeNum() {
    var result8 = document.getElementById("result8");
    var primeNumArr = [];
    var result;

    for (var i = 0; i < arrNumber.length; i++) {
        primeNumArr.push(findPrimeNumMethod(arrNumber[i]));
    }

    for (i = 0; i <= primeNumArr.length; i++) {
        var index = i;
        if (primeNumArr[i] == -1) {
            primeNumArr.splice(i, 1);
            // khi i tăng 1 nấc nhưng độ dài của mảng bị giảm 1 bật thì tới 1 lúc nào đó sẽ có sự bất khớp về độ dài và 1 phần tử trong mảng sẽ bị bỏ qua ko đc xét nên mỗi lần bỏ 1 phần tử thì xét lại index ngày từ trước đó bước 
            i = index - 1;
        }
    }

    if (primeNumArr.length == 0) {
        result = -1;
    }

    if (result == -1) {
        resContent =
            `
            <div>
                Kết quả: ${result}
                <br>
                Không có số nguyên tố nào trong mảng.
            </div> 
            `;
    }
    else {
        resContent =
            `
            <div>
                Các số nguyên tố trong mảng tìm được là: ${primeNumArr}
                <br>
                Số nguyên tố đầu tiên là: ${primeNumArr[0]}
            </div> 
            `;
    }
    result8.innerHTML = resContent;
}


// Câu 9
function addIntNumToArr() {
    var integerNum = +document.getElementById("integerNum").value;
    var result9 = document.getElementById("result9");
    arrIntegerNumber.push(integerNum);

    resContent =
        `
            <div>
                Dãy của bạn nhập là: ${arrIntegerNumber}
            </div> 
        `;

    result9.innerHTML = resContent;
}

function findIntegerNum() {
    var result10 = document.getElementById("result10");
    var intNumArr = [];


    // C1: nhân cho 10 rồi chia lại cho 10 để kiểm tra phần dư
    for (var i = 0; i < arrIntegerNumber.length; i++) {
        var IntegerNumberx10 = arrIntegerNumber[i] * 10;
        if (IntegerNumberx10 % 10 == 0) {
            intNumArr.push(arrIntegerNumber[i]);
        }
        else {
            // do nothing
        }
    }

    // C2: làm tròn xuống rồi xem số vừa làm tròn có giống với số nguyên bản hay ko (ở đây ko làm)


    resContent =
        `
            <div>
            Các số nguyên trong mảng tìm được là: ${intNumArr}
            <br>
            Do đó ta có ${intNumArr.length} số nguyên trong dãy
            </div> 
        `;

    result10.innerHTML = resContent;

}


// Câu 10
function compareNum() {
    var result11 = document.getElementById("result11");
    var plusNum = [];
    var minusNum = [];
    var plusNumCnt = 0;
    var minusNumCnt = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            plusNum.push(arrNumber[i]);
            plusNumCnt++;
        }
        else if (arrNumber[i] < 0) {
            minusNum.push(arrNumber[i]);
            minusNumCnt++;
        }
        else {
            // do nothing
        }
    }

    if (plusNumCnt > minusNumCnt) {
        resContent1 =
            `
                <div>
                Vì số dương có ${plusNumCnt} số và số âm có ${minusNumCnt} số nên số lượng số dương sẽ nhiều hơn
                </div>
            `
    }
    else if (plusNumCnt < minusNumCnt) {
        resContent1 =
            `
                <div>
                Vì số dương có ${plusNumCnt} số và số âm có ${minusNumCnt} số nên số lượng số âm sẽ nhiều hơn
                </div>
            `
    }
    else {
        resContent1 =
            `
                <div>
                Vì số dương có ${plusNumCnt} số và số âm có ${minusNumCnt} số nên số lượng số dương và số lượng số âm bằng nhau
                </div>
            `
    }

    resContent =
        `
            <div>
            Xét mảng ${arrNumber} thì:
            <br>
            Các số dương trong mảng là ${plusNum}
            <br>
            Các số âm trong mảng là ${minusNum}
            </div> 
        `;


    result11.innerHTML = resContent + resContent1;

}
