import { MutableRefObject, useEffect} from 'react';
import { debounce } from 'lodash';
import { useRefMb, useStateMb } from '../../hooks/mayBeHooks';
import { Maybe } from '../../models/monads/Maybe';



type SetRect = (rect: DOMRectReadOnly) => void;
type DebSetRect = (setRect: SetRect, rect: DOMRectReadOnly) => void;

const debSetRect = debounce<DebSetRect>((setRect, rect) => setRect(rect), 200);

const createObserver = (setRect: SetRect) =>
    new ResizeObserver(entries => {
        entries
            .filter((el, i) => i === entries.length - 1)
            .forEach(el => {
                debSetRect(setRect, el.contentRect);
            });
    });

export type SquareRect = Maybe<DOMRectReadOnly>
export type SquareRef = MutableRefObject<HTMLElement>
export const useSquare = ():[SquareRef, SquareRect] => {
    const [rect, setRect] = useStateMb<DOMRectReadOnly>();
    const [resMb, ref] = useRefMb<HTMLElement>();

    useEffect(() => {
        const ro = createObserver(setRect);
        resMb.map(res =>
            ro.observe(res, {
                box: 'border-box'
            })
        );
        return () => ro.disconnect();
    }, [resMb]);

    return [ref, rect]
};
