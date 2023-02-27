//Question 1

function instagramPost( HandleOfAuthor, Content, ImageLink, NumberOfViews, NumberOfLikes ) {
    this.HandleOfAuthor = HandleOfAuthor;
    this.Content = Content;
    this.ImageLink = ImageLink;
    this.NumberOfViews = NumberOfViews;
    this.NumberOfLikes = NumberOfLikes;
}

//Question 2

const instagramPost1 = new instagramPost('Blessing', 'Peter Obi for President', 'www.arisenews.ng', 3000, 5000);

const instagramPost2 = new instagramPost('PremeQuotes', 'Everything will make sense eventually', 'www.wordscribbles.net', 1000, 1300);

console.log(instagramPost1);
console.log(instagramPost2);

//Question 3a

function createPerson( Name, Age, Location) {
    return{
        Name: Name,
        Age: Age,
        Location: Location,
    }
}

const musa = createPerson('Musa Dawodu', 19, 'Lekki-Lagos-Nigeria');
console.log(musa);

//Question 3b

function createJambScores(Eng, Govt, LIT, CRK) {
    return{
        Eng: Eng,
        Govt: Govt,
        LIT: LIT,
        CRK: CRK
    }
}

const musasJambScores = createJambScores(70, 85, 82, 94);
console.log(musasJambScores);

//Adding the object as a property to musa object

musa.musasJambScores = createJambScores(70, 85, 82, 94)
console.log(musa);

//Question 4
//Option 1 - Using Object.assign ()

const firstSchool = {
    Name: 'All Saints University',
    Location: 'Dominica',
    NumberOfStudents: 1000,
}

const secondSchool = Object.assign ( {}, firstSchool );
console.log(firstSchool);
console.log(secondSchool);

secondSchool.Name = 'Ross University';

console.log('After change of name of second school');
console.log(firstSchool);
console.log(secondSchool);

//Option 2 - Using spread syntax i.e, ...

const thirdSchool = { ...firstSchool};
thirdSchool.Name = 'St James University';
console.log({firstSchool});
console.log({thirdSchool});

//Option 3 - Using the method JSON.Parse(JSON.stringify ())

const fourthSchool = JSON.parse(JSON.stringify(firstSchool));
fourthSchool.Name = 'St Georges University';
console.log({firstSchool});
console.log({fourthSchool});

