# timeman

This is a React based simple tool to log daily activities. 

It has the following features:
1. Log an activity manually
2. Start and activity and run timer in the background while you work on something else

# Future updates:
- [ ] UI upgrades
  * [x] Manual time setting feature at start.
  * [x] Manual time setting feature even after stop.
  * [ ] Reordering list
  * [x] Total productive hours display
  * [x] Submit button for full logs
- [ ] Dark mode and Light Mode for UI
- [x] Implementation of React redux to allow for scalability
- [ ] Store today's data persistently in the browser.
- [ ] Allow to store daily data on server (expressjs/adonisjs)
- [ ] Dashboard for metrics for week
- [x] Other pages using React Router
  * [ ] About Page
  * [ ] User Page
  * [ ] Submit Page
- [x] Welcome quote on main page


# Issues:
~~- [x] Total Hours does not get added correctly~~

# Design Considerations:
- Timer has local state rather than Redux. Since this is rapidly changing value, and no other compoenent other than ElapsedTime require it, it is better to be placed in local state than Redux.