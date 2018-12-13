export const required = (input: string) : boolean => {
    return !input;
}

export const validPostalCode = (input: string) : boolean => {
    const regex = /[a-zA-Z]\d[a-zA-Z]\s?\d[a-zA-Z]\d/;
    return regex.test(input);
}