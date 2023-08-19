export interface Participant {
    id?: number,
    name: string,
    phoneNumber?: string,
    instagram?: string,
    parentsContact?: string,
    age?: number,
    cpf?: string,
    rg?: string,
    wasPaid: boolean,
    valuePaid?: number,
    foodRestriction?: string,
    otherThings?: string
}