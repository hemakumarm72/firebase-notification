import express from 'express';
import { pushNotification } from './firebase.js';

const app = express();

app.use(express.json());

app.post('/send', async (req, res) => {
  try {
    const { title, body, navigate, tokenId, image, user, data } = req.body;

    const notification = {
      tokens: [tokenId],
      notification: {
        title: title ? title : 'Results Are Ready!',
        body: body ? body : 'Click here to view your results',
      },
      data: { score: '850', time: '2:45' },
      // data: {
      //   navigate: navigate ? navigate : 'Xray',
      //   image: image ? image : 'default',
      //   data: data ? data : null,
      // },
      // android: {
      //   smallIcon: 'logo_circle',
      //   channelId: 'default',
      //   importance: 4,
      //   pressAction: {
      //     id: 'default',
      //   },
      //   actions: [
      //     {
      //       title: 'Mark as Read',
      //       pressAction: {
      //         id: 'read',
      //       },
      //     },
      //   ],
      // },
    };
    await pushNotification.sendEachForMulticast(notification);
    return res.status(200).json({ succuss: true });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log('listening port 8000');
});
