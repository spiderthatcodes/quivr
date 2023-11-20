## Nov 17, 2023

Today, I worked on:

- 3/4 of the CRUD for Orders was working by EOD yesterday. Today I can only POST, but can not GET or PUT. THe code has not changed significanty. After troubleshooting this for hours, we discovered that because I had made a minor modification to one of the model attributes, the existing records in the DB were essentially corrupted. We had to drop the DB, then rebuild it, and voila. Full CRUD.

## Nov 16, 2023

Today, I worked on:

- Docker issues out the wazoo. Whatever that is. Doecker was not picking up our .env files, so we had to rename the files, discard all containers and images, then rebuild with the new file name. Then change the name back to .env and discard the image and containers, then rebuild again. Party.

## Nov 15, 2023

Today, I worked on:

- Writing out CRUD routes for Invoices and Orders

This is going to be a touch and go situation, as we are working purely from the docs, and have no previous experience with pyMongo.

9:15am: power is out, with PG&E estimating restoration in 3 hrs...

## Nov 14, 2023

Today, I worked on:

- Getting Docker up and running
- Getting an Invoice model written out

Using a combination of resources I was able to successfully get docker running and syncd up to the Atlas cloud db.

It was a reminder that docker is a wild and crazy place. We need to have docker running local volumes on each of our machines, as well as a SHARED db connection to the Atlas cloud.

Then I moved onto the Invoice model and was reminded that FastAPI, Pydantic, and PyMongo are new to this project. Giddyupppppppp
