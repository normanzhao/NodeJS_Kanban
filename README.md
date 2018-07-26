# React_Kanban

Rewrote my KanbanBoard originally done in plain JS using AJAX and PHP to ReactJS using AJAX,axios, .NET and Entity Framework.The core functionality of this app was to be able to drag and drop items into the three categories, and this was achieved using Javascript on the UI to have this functinality, React and AJAX on the frontend to hit the API to update the items' statuses, and .NET and Entity Framework to perform the actual data updates!

## Frontend
The entire frontend of this project was done in ReactJS and utilizes both vanilla AJAX and axios calls. The reason for this is that axios sometimes send preflight headers when sending POST and PUT requests. AJAX does not. CORS actively rejects requests using these preflight headers, so AJAX is used to send POST requests while axios is used for the GET requests. In lieu of using PUT requests to update the backend, a POST request is sent instead.





## Backend
The backend of this project is written entirely in C# using the .NET Framework. A database file is bound and accessed using the Entity Framework. Using EF's data models, the primary two models (projects and items) are bound to Data Transfer Objects for the API to retrieve and update. I also created a few addtional DTOs to limit the exposure of data. Method calls hitting the API request only the data needed, and nothing more. This is done by either limiting the fields being returned or updated by method calls, or by JOINing th two primary models and then only exposing the required fields. Depency Injection was also added in using a repository pattern. This enables me to change how data interacts with the rest of the backend at a later time while keeping both parts independent.





## UI
The UI of this project is mostly done using React JSX with sprinklings of both inline and imported CSS from styles.css. There's only two pages for this app, a main page and a history page. 


### Main Page

![Main Page](https://raw.githubusercontent.com/normanzhao/React_Kanban/master/images/main_page.png)

The main page consists of a header with 4 buttons, and 3 columns with the different statuses. These four buttons are:

Release: Releases a project and archives it. New items can no longer be added to this project. However, a project does not require all items to be closed before released.

History: Shows all released projects and their associated items. More on this later.

New Project: Adds a new project. The fields are name, acronym and description(optional)

New Item: Adds a new item and associate it to a project. The fields are type, priority, title, and description(optional).


### History Page

![History Page](https://raw.githubusercontent.com/normanzhao/React_Kanban/master/images/history_page.png)

Shows all released projects and their associated items in a nice, organized manner. The header row on top is fixed and will not scroll. The projects' details take up the same amount of row spans as the amount of items, so all of a project's associated items can easily be spotted.


### Drag n Drop

![Drag n Drop](https://raw.githubusercontent.com/normanzhao/React_Kanban/master/images/dragndrop.png)

The core concept of my Kanban board allows the user to drag and drop items to change their statuses. Starting a drag on an item saves the item's ID to a transfer object, and then releasing/dropping the item on a valid target( either of the other 2 columns) retrieves the item's ID and changes the status of the item on the backend.


### Modals

![Modals](https://raw.githubusercontent.com/normanzhao/React_Kanban/master/images/edit_modal.png)
Since the app only consists of two primary pages, modals are utilized to allow a user to enter data. Following ReactJS's use of states, the state of related modals are pushed up to a common parent(header owns the states for all 3 buttons that shows modals and Main owns the state of EditModal), and this state changes every time a user inputs affects a change. When a user submits the data, the state gets passed to the backend, ensuring the the data passes is the data entered, and that the primary main page can act as a single page app.
