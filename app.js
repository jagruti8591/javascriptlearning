var arr=[1,2,3,4,5];
var max=0;
function getMax(arr)
{
   for(var i=0;i<=arr.length;i++)
{
    if(arr[i]>max)
    {
     max=arr[i];
    }
} 
return max;
}

console.log(getMax([10,30,100]));
