export function reducer(state, action) {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                isOpen: true,
                isDelay: true,
                isNotification: false,
            };
        case 'close':
            return {
                ...state,
                isOpen: false,
                isDelay: true,
            };
        case 'delay':
            return {
                ...state,
                isDelay: false,
            };
        case 'notification':
            if (state.isOpen) {
                return state;
            }

            return {
                ...state,
                isNotification: true,
            };
        default:
            return state;
    }
}
