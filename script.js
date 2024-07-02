<!-- HTML Codes by Quackit.com -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text Example</title>
    <style>
        div.container {
            background-color: #1fce1c;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 400px;
            margin: 20px auto;
        }
        div.container p {
            text-align: center;
            font-family: Georgia;
            font-size: 22px;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            text-transform: capitalize;
            color: #000000;
            background-color: #23e51f;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

<div class="container">
    <p>Name: Henry Kumah </p>
    <p>Username: Henry Kumah </p>
    <p>Email: slypee1881@gmail.com</p>
    <p></p>
    <p>HNG Internship and contain a link to <a href="https://hng.tech" id="internship-link">https://hng.tech</a></p>
    <p></p>
    <p>Assignment Zero done.</p>
</div>

<script>
    // JavaScript code
    // Add functionality to open HNG Internship link in a new tab
    var link = document.getElementById('internship-link');
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action (opening the link)
        var url = this.getAttribute('href'); // Get the href attribute of the link
        window.open(url, '_blank'); // Open the URL in a new tab
    });
</script>

</body>
</html>

