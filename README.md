# Admin UI
- You work at a startup that is building an interface for admins to see and delete users. The users will be provided via an API. Your job is to build out a working UI.

### These are the requirements :
- Column titles must stand out from the entries.
- There should be a search bar that can filter on any property.
- You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
- You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
- You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
- Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

### Instructions to Pass Automated Correctness Check
- Search box placeholder text should start with Search.
- Search icon/button should have class as search-icon OR trigger search on ENTER.
- Action element must be a button with a specific class name like edit, delete, save.
- Navigation elements must be a div/button, and should have class name as first-page, previous-page, next-page and last-page and page numbers should be mentioned accordingly.
- On clicking edit action in a row, it should be editable in the row itself.
- Bottom delete button must have text Delete Selected.
- Avoid using libraries like material UI and bootstrap for basic html components like buttons, checkboxes, textbox etc.

### Live Link
- https://geektrust-adminui-react.netlify.app/
