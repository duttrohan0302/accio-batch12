function swap(arr,x,y){
    let temp = arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

function shuffle(arr){

    const n = arr.length;

    for(let i=0;i<n;i+=2){
        // if current even positioned element is smaller than previous odd positioned element
        if(i>0 && arr[i-1]>arr[i]){
            swap(arr,i-1,i)
        }
        // if current even positioned element is smaller than next odd positioned element
        if(i<n-1 && arr[i]<arr[i+1]){
            swap(arr,i,i+1)
        }
    }
    return arr;
}

const questionArr = [10,50,2,1,9,30]

const answerArr = shuffle(questionArr);

console.log(answerArr)

//Time Complexity - O(n)
// Space Complexity - O(1)

// function customFunc(strArray){


//     // don't edit after this line
//     return strArray[0];
// }