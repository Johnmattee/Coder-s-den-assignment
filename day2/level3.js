//number one
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let count = sentence.match(/love/gi);
console.log(count.length);

//number two
let word = 'You cannot end a sentence with because because because is a conjunction';

let times = word.match(/because/g);
times.length;

//number three
const sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.';

let newSent = sent.replace(/[%$&@#]/g, '');