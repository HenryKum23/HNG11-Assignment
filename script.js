<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text Example</title>
    <style>
        /* CSS styles */
        div.container {
            background-color: #71f9b3;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 20px auto;
        }
        
        div.container p {
            text-align: center;
            font-family: Georgia, serif;
            font-size: 18px;
            font-weight: bold;
            text-transform: capitalize;
            color: #383333;
            background-color: #5cf094;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<div class="container">
    <p>Name: Henry Kumah</p>
    <p>Username: Henry Kumah</p>
    <p>Email: slypee1881@gmail.com</p>
    <p>HNG Internship, <a href="https://hng.tech">https://hng.tech</a></p>
    <p>Assignment Zero done.</p>
</div>

<script>
    // JavaScript code
    // Function to change the background color of container on click
    function changeBackgroundColor() {
        var container = document.querySelector('.container');
        container.style.backgroundColor = '#f9d671'; // Change to a different color
    }

    // Attach event listener to the container for demonstration
    var container = document.querySelector('.container');
    container.addEventListener('click', changeBackgroundColor);
</script>

</body>
</html>
