Thinking in React at scale contains three major concepts.

1. Composing components from smaller components.
2.  Transforming the state you have into the state if you need.  
3. Managing state

These concepts may seem obvious and over-simplistic but are too often ignored. I've reviewed over 1,000,000 lines of code in my 30-year career and too often see verbose, overly complicated code that is difficult to grok or change. Short, simple alternatives are preferred.


Here is the screen we are going to build:
![Alt text](doc-img/raw.png)
-----------------------
### Step 1: Break down your screen into components 
This page has 3 sections, header, body and footer.
![Alt text](doc-img/App.png)
Each section can be further broken into smaller components:
![Alt text](doc-img/Header.png)
![Alt text](doc-img/Body.png)
![Alt text](doc-img/Footer.png)

There is no one way to break apart the screen and I often change my mind when I learn more during implementation.  The important thing is to avoid large monolithic components.  

-------------------
### Step two: Assemble static components with hard coded values.
Next we build the content of our components without worrying about interactivity or the source of data. In writing you this would be like building your outline.


It is not necessary to build all the rows.  Here we cover both cases, checked and unchecked.
```
function Body() {
  return (
    <section className="inline">
      <ul>
        <Task name="Learn JavaScript" isCompleted={true} />
        <Task name="Learn React Fundamentals" isCompleted={true} />
        <Task name="Learn Thinking in React Fundamentals" isCompleted={false} />
      </ul>
    </section>
  );
}
```

Task uses the hard coded values supplied by props
```
function Task(props) {
  const { name, isCompleted, onClick } = props;

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onClick} />
        {name}
      </label>
    </li>
  );
}
```

App follows 3 section layout discovered in step one. 
```
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
```

The app on [code sandbox](https://codesandbox.io/p/github/afrievalt/thinking-samples/step2).  


------------
### Step 3: Identify the minimum state.

From the hard coded values discovered in the previous step, build the minimal state.

In our example, we have a list of tasks:
```
const initialState = [
    { id: 1, name: "Learn JavaScript", isCompleted: true },
    { id: 2, name: "Learn React Fundamentals", isCompleted: true },
    …
```

And a string filter that can be one of "All", "Completed" or "Active"

```
const [tasks, setTasks] = useState(initialState);
const [filter, setFilter] = useState("All");
```

Notice some dynamic values appear on the screen that are not in the minimum state.  These values are derived from our minimum state.  Misidentifying derived values is a common mistake to watch out for.   
![Alt text](doc-img/DerivedState.png)

---
### Step 4: Transform the state you have into the values you need.

First we will apply our filters to our task list.