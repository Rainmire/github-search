Github-Search is a coding challenge made for Sabre

## What do you like about you solution?

I was able to incorporate both keyboard and mouseover selection and have it behave in a logical manner. To prevent clashing errors such as multiple highlighted items, I bound event listeners for keyboard and mouse when `user_search_index` mounts and have them modify the state to change selections, instead of using the hover selector in CSS.

## What do you dislike about your solution?

My styling could probably use a bit more brushing up. Also, the `searchResults` slice of state could be reduced to less data.

## If you had a full day more to work on this, what would you improve?

I would spend more time on CSS to make it more visually appealing. I've also thought about implementing another slice of state that prevents excessive queries to the Github API. After a query is sent, an action would be dispatched to set that slice to `busy`, as well as a `setTimeOut` function to then set it to `clear` after a short interval. Queries can only be sent if the state is not `busy`.

## If you would start from scratch now, what would you do differently?

I would have done it all in one sitting to spend less time re-gathering my thoughts.