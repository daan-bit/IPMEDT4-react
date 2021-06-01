export const CREATE_ONDERZOEK = "CREATE_ONDERZOEK";


export const createOnderzoek = (onderzoek) => ({
    type: CREATE_ONDERZOEK,
    payload: onderzoek
});