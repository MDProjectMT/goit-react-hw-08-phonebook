export const selectContacts = (state) => state.contacts.contacts;

export const selectError = (state) => state.contacts?.error;

export const selectLoading = (state) => state.contacts.loading;
