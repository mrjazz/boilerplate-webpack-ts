import dayjs from 'dayjs'
import { sayHello } from "./greet";

function showHello(divName: string, name: string, date: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name, date);
}

showHello("content", "Denis", dayjs().format('YYYY-MM-DD'));
