## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

    
## Link to the website here:
    https://codex503.github.io/web-optimization-project/

## List of tasks performed to improve site performance:

    * Removed <<<HEAD ==== >>>> Master in index.html lines 31 - 35
    * Set google analytics script to async in index.html line 25
    * added media query to print.css line 14 index.html
    * commented font line out line 11 index.html
    * added css properties inlline line 15-42 index.html
    * re-sized views/images/pizzeria.jpg
    * re-sized views/images/pizza.png
    * added meta viewport tag in pizza.html line 4
    * Set css inline in index.html
    * minified js file using GULP JS
    * Moved movingPizzas1 div out of container line 10 and 11 pizza.html
    * changed range in for loop in main.js line 527 from 200 to 12
    * changed variable s equal to 12 instead of 256 line 528 in main.js
    * created pizza_Resize value outside of loop line 453 in main.js
    * moved dx and newwidth variables outside of for loop lines 454 455 main.js
    