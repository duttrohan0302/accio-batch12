function swap(arr,x,y){
    let temp = arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

// function compare(a,b){
//     return a-b;
// }

const arrtemp = [
    {
        age:25,
        name:"Rohan"
    },
    {
        age:36,
        name:"Satyaki"
    },
    {
        age:100,
        name:"Surya"
    }
]
arrtemp.sort((a,b)=>a.age-b.age)

function shuffle(arr){

    const n = arr.length;
    arr.sort((a,b)=>a-b)
    // .sort() any array & it does lexicographic sorting
    // If we just do arr.sort()
    // 25 and 100 ..25>100
    // custom comparator

    // wave for arr[0]<=arr[1]>=arr[2]<=arr[3] & so on
    // for(let i = 1;i<n-1;i+=2){
    //     swap(arr,i,i+1)
    // }

    // wave for arr[1]>=arr[1]<=arr[2]>=arr[3] & so on
    for(let i = 0;i<n-1;i+=2){
        swap(arr,i,i+1)
    }

    return arr;
}

const questionArr = [2,1,5,3,11,7]

const answerArr = shuffle(questionArr);

console.log(answerArr)

//Time Complexity - O(nlogn)
// Space Complexity - O(1)


// const arrtemp1 = ["10:00AM-12:00PM","9:00AM-11:00PM"]
/*
1. Iterate over the array
2. Split using ("-")
3. store the earliest starting time

// Equivalent to finding the min & max in an array with some tweaks
2 iterations - O(n)
*/

// arrtemp1[0].split("-")

/*
ax+b=c
x = (c-b)/a
12x+1=4
a = 12, b=1, c=4 => x = 0.25

x=3/12=0.25

12*0+1 = x => a=1, b = 0, c=1

*/