//background images in array
let background = [
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/wallpaper-of-love-768x480.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/the-tree-of-love-559.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/nice-love-hearts-emotions-hd-wallpaper-768x480.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/love-wallpapers-13-768x480.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/love-inspirational-daily-768x576.jpeg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/love-hearts-carpet-wood-couple-macro-fullscreen-768x480.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/love-229a-768x576.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/love_matchsticks-wide-768x480.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/love-1-768x582.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/Images-of-love-16-768x576.jpg')",
	"url('http://www.loveimagesdownload.com/wp-content/uploads/2016/08/0_intro_love-100642565-orig.jpeg')"
];

//array of quotes and authors
let quoteArray = [
	{
		authorName: 'Dr. Seuss',
		quotemsg: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
	},

	{
		authorName: 'Sophocles',
		quotemsg: 'One word frees us of all the weight and pain of life: That word is love.'
	},

	{
		authorName: 'Nicholas Sparks',
		quotemsg: "Love is like the wind, you can't see it but you can feel it."
	},

	{
		authorName: 'Alfred Tennyson',
		quotemsg: "If I had a flower for every time I thought of you ... I could walk through my garden forever."
	},

	{
		authorName: 'Albert Einstein',
		quotemsg: 'Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.'
	},

	{
		authorName: 'Oscar Wilde',
		quotemsg: "You don't love someone for their looks, or their clothes or for their fancy car, but because they sing a song only you can hear."
	},

	{
		authorName: "Richard Bach",
		quotemsg: "True love stories never have endings."
	}, 

	{
		authorName: "Jack Kornfield",
		quotemsg: "In the end we discover that to love and let go can be the same thing."
	}

];


const backgroundColor = () =>{
	let randomNumber = Math.floor(Math.random() * background.length);
	document.getElementById('quoteApp').style.backgroundImage = background[randomNumber];
	document.getElementById('framy').style.backgroundImage = background[randomNumber];
}


const getQuote = ()=>{
	//get random array(quotes) index
		let randomNumber = Math.floor(Math.random() * quoteArray.length);

		//getting randomNumber quote message
		document.getElementById('viewSection').innerHTML = quoteArray[randomNumber].quotemsg;

		//getting randomNumber Author's name
		document.getElementById('viewSectionAuthor').innerHTML = quoteArray[randomNumber].authorName;

		backgroundColor();
}


let viewQuote = document.getElementById("findQuote").addEventListener("click", getQuote);


const createQuote = ()=>{
	//getting inputed value
	let authorName = document.getElementById("authName").value;
	let quotemsg = document.getElementById("quote").value;

	//variable object for new author's name and quote message
	let newQuote = {
		authorName,
		quotemsg
	};

	//sending new author's name and quote message to the Array
	quoteArray.push(newQuote);
	
	//resetting the form inputs
	document.getElementById("frm").reset();
	document.getElementById("close").click();
}


const searching = ()=>{
	let searchName = document.getElementById("finding").value;
	
	for(let i = 0; i<quoteArray.length; i++){
		//checking if author's name is equal to searched name.
		let searched = quoteArray[i].authorName === searchName;
		if(searched){
			document.getElementById('viewSection').innerHTML = quoteArray[i].quotemsg;
			document.getElementById('viewSectionAuthor').innerHTML = quoteArray[i].authorName;
		} 
	}

	//clearing search input field
	document.getElementById("finding").value = "";
}

