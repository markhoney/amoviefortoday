# Movie Days / Filmanac

## Install

Run the following in order:

- `git clone --single-branch https://github.com/markhoney/amoviefortoday.git` to just download the Master branch
- `cd amoviefortoday`
- `yarn install` to install dependencies
- `yarn extras` to install non NPM Git packages

Next create a file called `.env` in the root of the repo, looking like this:

```ini
GoogleAPIKey=XXXXXXX-XXXXXXXXXXXXXXXXXXXX-XXXXXXXXXX
GoogleSheetID=XXXXXXXXXXXXXXXXXXXXXXXXXX-XXXXXXXXXX-XXXXXX
OMDBAPIKey=XXXXXXXX
FanartTVKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TheMovieDBKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Finally, to download and cache all required files, run:

- `yarn scrape`

## Run

- `yarn dev` to start a local dev server at `http://localhost:8080`
- `yarn deploy` to build a set of static files and push them to GitHub

## To Do

- Components
  - ~~Movie card view~~
    - ~~Use for categories~~
  - ~~Event card view~~
    - ~~Use for Days~~
  - ~~Movie full screen view~~
    - ~~Single Movie~~
    - Show actors, directors, etc
  - Movie cover view
    - Genres, Studios, etc
      - Split by month with headers?
    - All movies?
  - Timeline view
    - All movies?
  - ~~Ratings~~
  - ~~Actors~~
  - ~~Director~~
  - ~~Rated~~
  - Two Line View
    - Movie name, Event description
    - Use for dates
  - Poster view
    - Genres
  - Next movie view
    - Includes year
  - Fix movie card
    - Use poster view instead?
  - VueX
    - Global dark mode variable
      - Invert icon colour based on mode
        - Used both in movies/events, and on category pages

- Layout
  - ~~Red curtain~~
    - ~~Curtain overlay on red title?~~
  - ~~Dark body~~

- Stats
  - Google Analytics

## Crowd Sourcing form

[https://docs.google.com/forms/d/e/1FAIpQLScHIrrdLHayB8kvMgS_tQhxLZXNacMnwxNiOD0vfYDODDT8Wg/viewform](https://docs.google.com/forms/d/e/1FAIpQLScHIrrdLHayB8kvMgS_tQhxLZXNacMnwxNiOD0vfYDODDT8Wg/viewform)
