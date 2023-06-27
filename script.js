// complete the given function

function palindrome(str){
	let edited=str.replaceAll(/[^A-Za-z0-9]/g, "");
	let start=0;
	let end=edited.length-1;
	while(start<=end)
		{
			if(edited[start] !=edited[end])
			{
				return false;
			}
			start++;
			end--;
		}
	return true;
	

}
module.exports = palindrome
