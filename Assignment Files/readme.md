<p>To turn the server on:<br> 
docker run -d -p 8080:80 --name my-website-container my-website <br><br>

To access the website:<br>
localhost:8080/index.html<br><br>

To turn the server off and remove it:<br> 
docker stop my-website-container<br>
docker rm my-website-container<br>
docker rmi my-website<br>
</p>
