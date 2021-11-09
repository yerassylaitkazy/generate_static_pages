import { fromEvent, interval } from 'rxjs';
import { scan } from 'rxjs/operators';

const getFormattedNow = () => `Сегодня ${(new Date()).toLocaleString()}`;

const displayEl = document.getElementById("display");


fromEvent(window, 'load')
    .subscribe(() => {
        interval(1000)
            .pipe(
                scan(() => getFormattedNow(), getFormattedNow()),
            )
            .subscribe(now => {
                console.log('asdasd');
                displayEl.innerText = now;
            })
    });