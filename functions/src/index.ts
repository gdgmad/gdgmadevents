import * as functions from 'firebase-functions';
import { event } from './mock'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const bot = functions.https.onRequest((request, response) => {
    response.send(event);
})
