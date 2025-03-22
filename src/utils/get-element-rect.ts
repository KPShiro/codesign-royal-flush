export function getElementRect(element: Element | string | null) {
    let _element = element;

    if (typeof _element === 'string') {
        _element = document.querySelector(_element);
    }

    if (!_element) {
        throw new Error('Element is not defined!');
    }

    return _element.getBoundingClientRect();
}
