Secret Santa
============

This is me having a go at making a Secret Santa app, that hopefully will have
good enough UX to be shared with non-developers once I deploy it. Development
guide is as follows.

A single instance of this server can be used to run more than one instance of a
secret santa (with or without overlap in the participants) but it is not
designed to scale at all so don't push it too far.

## The Stack
- React for the frontend
    - Typescript
    - Hooks and pure functional components everywhere I can put them
- Rust for the backend
    - Rocket (unreleased 0.5 version)
    - SQLite for data storage
- Other services
    - [Twilio](https://twilio.com) for help with authentication on the backend
    - [TinyMCE](https://tiny.cloud) (served via their cloud) for creating wish lists
    
## The Scripts
To run the app in development, run the following commands (and leave them both
running).

```shell script
# In /frontend
$ yarn start

# In /backend
$ cargo run
```

The frontend code will auto-reload when necessary, the backend code will need
restarting.

To build the app for production, run the following commands.

```shell script
# In /frontend
$ yarn build

# In /backend
$ cargo build --release
```

From the directory `backend`, run the binary `./target/release/santa` to start
the app.