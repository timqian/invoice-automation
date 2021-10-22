# Invoice-automation

## Why

I have to edit a googlesheet every month, export as a PDF and then send it to Kristin every month. This process cost around 3 minutes every month. So I decided to spend some time to automate it. And maybe other people in the company will find it useful too.

## What does this repo do

Currently
- A script will update the googlesheet every month. So you can download the latest invoice PDF in one click when you need it.


Goal
- A nodejs script will update google sheet and download a PDF version
- A GitHub action workflow used to run the script and then email this PDF to Kristin

## How to use this project

1. Fork this repo
2. Add 3 secrets to your repo `SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`

A script will be ran every month and update the google sheet. So that you can export the PDF by one click (https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=pdf )

## Note

You may need to share the google sheet with the email address of your `google service account` e.g. thomasapp@appname-201813.iam.gserviceaccount.com 
Otherwise you will see a [403] error from google

ref: https://stackoverflow.com/a/49965912/4674834

## Thanks

- [theoephraim/node-google-spreadsheet](https://github.com/theoephraim/node-google-spreadsheet)
- [Send email Action](https://github.com/marketplace/actions/send-email)
