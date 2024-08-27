import admin from 'firebase-admin';
import serviceAccount from '../test-app-74048-firebase-adminsdk-kucax-0823674084.json' assert { type: 'json' };
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const pushNotification = admin.messaging();

export { pushNotification };
