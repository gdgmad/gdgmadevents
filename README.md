# What this is about
Perhaps you're excited about a new technology and just don't know what to build with it?
Ever had an idea for something but couldn't get up the motivation for it?
Let's Build together!

This project has within it, a firebase serverless api, that returns events that we've held at madmeetup.
Starting from a common base, the api url for our meetup:
1. Choose your technology
2. Reach out to join technology specifc groups, to build what you want from it.
3. If you have ideas, sound them out in the group, or help with any of the [issues](https://github.com/gdgmad/gdgmadevents/issues)
4. Suggest your own ideas and talk about them!
5. Currently we have iOS, react, firebase, react-native, native android, flutter, google assistant and more groups!

Here's the link to the api url https://us-central1-gdgmadevents.cloudfunctions.net/event/
Here's what the sample output looks like: If you want to get started on your own, scroll down to see how!
```
[
  {
    "desc": "Join us for our meetup, with three riveting talks, followed by our very first edition of Lets Build",
    "name": "GDGMAD November, 2018",
    "time": 1542997800000,
    "date": "24-11-2018",
    "venue": {
      "address": "Endurance International Group, Mumbai-400063",
      "link": "https://goo.gl/maps/MuPPtLuHVuL2"
    },
    "agenda": [
      {
        "name": "We build Empathy, not Just Models",
        "speaker": {"twitter": "@Avanish52111547", "name": "Avani Shah"},
        "start": "11:00 am", "end": "11:45 am"
      },
      {
        "name": "try! Swift",
        "speaker": {"twitter": "@_yogeshsingh","name": "Yogesh Singh"},
        "start": "11:45 am","end": "12:15 pm"
      },
      {
        "name": "PWAMP, the music of AMP+PWA",
        "start": "12:30 pm", "end": "01:15 pm",
        "speaker": {"twitter": "@technorajat","name": "Rajat Chowdhary"}
      }
    ]
  }
]
```

# How to get started
Welcome to the project for GDGMad's events tracker.
If you've come here for the workshop Let's Build, follow these steps:
1. Fork this repo
2. Clone it to your machine.
3. Open up the folder for whichever platform you've chosen to develop for, eg:
    Flutter
    React-Native
    Actions on Google
    iOS
4. You will find the url to call for the data in the README file within that folder.
5. Build what you want!
