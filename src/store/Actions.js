export const CHANGE_VERWIJDER = "CHANGE_VERWIJDER";
export const CHANGE_SHOW = "CHANGE_SHOW";
export const CHANGE_UPDATE = "CHANGE_UPDATE";
export const CHANGE_MODALNAAM = "CHANGE_MODALNAAM";
export const CHANGE_VRAGENOVERZICHT = "CHANGE_VRAGENOVERZICHT";
export const ADD_ANSWER = "ADD_ANSWER";

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

export const changeModalNaam = (modalNaam) => ({
    type: CHANGE_MODALNAAM,
    payload: modalNaam
});

export const changeVragenOverzicht = (onderzoekVragenId) => ({
    type: CHANGE_VRAGENOVERZICHT,
    payload: onderzoekVragenId
})

export const addAnswer = payload => ({
    type: ADD_ANSWER,
    payload
})

