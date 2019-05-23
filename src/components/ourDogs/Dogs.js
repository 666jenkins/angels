import OurDogsObj from "../../entities/OurDogsObj";


let dog = [];

dog.push(new OurDogsObj(
    dog.length,
    'Golub',
    'male',
    'cavalier',
    'https://via.placeholder.com/500',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

))

dog.push(new OurDogsObj(
    dog.length,
    'Boban',
    'male',
    'cavalier',
    'https://via.placeholder.com/500',
    'Boban Opis'

))

dog.push(new OurDogsObj(
    dog.length,
    'Vanja',
    'female',
    'amstaff',
    'https://via.placeholder.com/500',
    ` is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
))


dog.push(new OurDogsObj(
    dog.length,
    'Izzy',
    'female',
    'cavalier',
    'https://via.placeholder.com/500',
    'Izzy Opis'
))
dog.push(new OurDogsObj(
    dog.length,
    'Pasa',
    'male',
    'amstaff',
    'https://via.placeholder.com/500',
    'Pasa Opis'
))




export default dog