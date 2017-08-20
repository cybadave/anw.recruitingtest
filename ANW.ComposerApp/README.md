++Notes to the reviewer++

This project represents a next-best solution.

First prize would have been a https://reactjs.net/ solution with server-side rendering,
but my c# proved too rusty to tackle bundling via Cassette.

Allowing .Net to pass the data to react via a serializer is the next-best option in terms of performance for our 
thousands of users. (Only one server call per user session to browse the entire data set)

++Objectives:++

Complete the following two user stories:

==1.As a user I want to see a list of composers==
++Acceptance criteria:++
* I can see a list of all composers
* I can see full name 
* I can see the total number of composers returned


==2.As a user I want to see details about a composer==
++Acceptance criteria:++
* I can navigate to this view from the list of composers
* I can see full name, title and awards


++Notes:++
* You can imagine this is a production grade application for thousands of users. Code as you would in one.
* The data in this test are provided by a static class in the path ./App_Data/ComposerRepo.cs
* The visual design is all up to you, but do not spend too much time on it, as long as it works. 
* Bootstrap is already included in the solution if you want it.
* Feel free to structure the solution projects and subfolders as you see fit.
* The solution is .net MVC but feel free to extend it in whatever language you are comfortable with. 
* React is already setup in the solution under ./Scripts/react-composer-app if you want it.
