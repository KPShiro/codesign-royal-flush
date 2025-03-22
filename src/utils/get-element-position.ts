import { getElementRect } from './get-element-rect';

export function getElementPosition(element: Element | string | null, center: boolean = false) {
    const rect = getElementRect(element);

    let position = {
        x: rect.x + window.scrollX,
        y: rect.y + window.scrollY,
    };

    if (center) {
        position = {
            x: position.x + rect.width / 2,
            y: position.y + rect.height / 2,
        };
    }

    return position;
}
