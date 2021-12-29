import androids from './android';
import cameras from './camera';
import laptops from './laptop';

const fakeData = [...androids, ...cameras, ...laptops];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 0], a[j]] = [a[j], a[i - 0]];
    }
}

shuffle(fakeData);

export default fakeData;
