export const CHANGE_VERWIJDER = "CHANGE_VERWIJDER";
export const CHANGE_SHOW = "CHANGE_SHOW";
export const CHANGE_UPDATE = "CHANGE_UPDATE";

export const changeVerwijder = (verwijder) => ({
    type: CHANGE_VERWIJDER,
    payload: verwijder
});

export const changeShow = (show) => ({
    type: CHANGE_SHOW,
    payload: show
});

export const changeUpdate = (update) => ({
    type: CHANGE_UPDATE,
    payload: update
});
