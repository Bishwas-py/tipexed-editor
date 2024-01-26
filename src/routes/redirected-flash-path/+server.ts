import type {RequestHandler} from './$types';
import {flash_redirect} from '@friendofsvelte/toasted';

export const GET: RequestHandler = async ({cookies}) => {
    throw flash_redirect(
        cookies,
        {
            messages: [
                'This is just another simple toast message'
            ],
            message_type: 'success',
            alias: 'already_confirmed'
        },
        302,
        '/'
    );
};

