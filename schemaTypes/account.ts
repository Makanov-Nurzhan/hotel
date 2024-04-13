import { defineField } from "sanity";

const account = {
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
        defineField({
            name: 'provederType',
            type: 'string',
        }),
        defineField({
            name: 'provederId',
            type: 'string',
        }),
        defineField({
            name: 'provederAccountId',
            type: 'string',
        }),
        defineField({
            name: 'refreshToken',
            type: 'string',
        }),
        defineField({
            name: 'accessToken',
            type: 'string',
        }),
        defineField({
            name: 'accessTokenEcpires',
            type: 'number',
        }),
        defineField({
            name: 'user',
            title: 'user',
            type: 'reference',
            to: { type: 'user' },
        }),
    ]
}

export default account