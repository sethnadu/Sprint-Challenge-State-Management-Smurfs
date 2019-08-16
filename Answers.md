1. What problem does the context API help solve?

It helps to keep state in one place and allows you to add it to any component without having to pass it through other components that will not use it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        Action: An action is a payload of info is sent from your application to your store. It is the only way store can get info.
		Reducers:  Reducers specifiy how the state will change after it recieves the data from an action, which all takes place in the store.
		Store:  The Store holds all of your state as well as how it will be affected by payloads. It is the only place this can happen, which is why it is known as the single source of truth. 



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is global while component is local. Basically use component when it is only affected in that component, use application when you want to take that data and use it across many components


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that basically allows you to “pause” in a way the procedure of redux. It goes between the action and reducer and allows you to be more specific to what you want it to do. Axios get calls can be performed here. For Action-creators, it can change the state that the action would then take and use.


1. What is your favorite state management system you've learned and this sprint? Please explain why!


I really like Redux in general. It does seem like a lot more other files and folders, but I can see exactly where everything belongs, and it keeps the UI application code separated from all of the state changes. Though having a middleware and a place where you can have all you get axios calls is also awesome! Helps to not crowd up all the code!