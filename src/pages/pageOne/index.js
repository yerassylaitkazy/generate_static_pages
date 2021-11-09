import { Observable } from 'rxjs';

const countToThree = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});

countToThree.subscribe({
    next: x => console.log(x)
});