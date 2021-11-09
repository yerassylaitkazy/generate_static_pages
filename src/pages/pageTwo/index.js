import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

const getFormattedNow = () => `Сегодня ${(new Date()).toLocaleString()}`;

const displayEl = document.getElementById("display");


fromEvent(document, 'click')
    .pipe(
        throttleTime(1000),
        scan(() => getFormattedNow(), getFormattedNow()),
    )
    .subscribe(now => {
        console.log('now', now);
        displayEl.innerText = now;
    });