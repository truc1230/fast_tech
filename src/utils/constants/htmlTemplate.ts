export const emailContactTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
        <style>
          * {
            font-family: Arial, sans-serif;
            box-sizing: border-box;
          }
         
        </style>
      </head>
      <body>
        <div class="container">
          <h2><%= content.subject %></h2>
          <p><strong>Name:</strong><%= content.name %></p>
          <p><strong>Email:</strong><%= content.email %></p>
          <p><strong>Address:</strong><%= content.address %></p>
          <p><strong>Request:</strong> <%= content.request %></p>
        </div>
      </body>
    </html>`
export const emailCVTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
        <style>
          * {
            font-family: Arial, sans-serif;
            box-sizing: border-box;
          }
         
        </style>
      </head>
      <body>
        <div class="container">
          <h2><%= content.subject %></h2>
          <p><strong>Name:</strong><%= content.name %></p>
          <p><strong>Email:</strong><%= content.email %></p>
          <p><strong>Introduce:</strong> <%= content.introduce %></p>
        </div>
      </body>
    </html>`
