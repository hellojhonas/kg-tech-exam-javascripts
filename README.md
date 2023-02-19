
## JavaScript Quizzes

### JavaScript Blocks: Max Frog Distance

    Problem:

    - Two frogs want to jump away from each other as far as possible.
    - The distance between blocks is computed as K - J + 1, where J <= K.
    - The frogs can only jump up and to an adjacent block of equal or greater height.

    Technical specifications:

    - Create a function called max_frog_distance that takes a list of blocks as input.
    - Find the optimal starting block for each frog by keeping track of the minimum and maximum block that each frog can jump to using two pointers that move from left to right and right to left.
    - Iterate through the blocks to calculate the maximum distance between the optimal starting blocks for each frog.
    - Return the maximum distance between the two frogs.
    - The function assumes that there are at least two blocks in the row.

    Output:
    ![kg-tech-exam-max-frog-distance](https://user-images.githubusercontent.com/91439231/219934525-b4b85043-4bd7-4999-9aa4-b6168ea66d49.PNG)


### Sales Problem
Go through a sales profit data of multiple products and return the product with:

    1. Highest sales profit
    2. Lowest sales profit
    3. Profit nearest to 0

    Implement the functions:

    - topProduct() to return the product name having the highest sales profit
    - bottomProduct() to return the product name having the lowest sales profit
    - zeroProfitProduct() to return the product name having a sales profit closest to 0 in a given array of key-value pair productProfitArray

    Input & Conditions:

    - If productProfitArray is empty returnn "No Data"
    - If two products' sales profit are as close to 0, consider the positive profit as the one closest to zero (eg. Product A: -100, Product B: 100, return Product B)

    Output:
    ![kg-tech-exam-sales](https://user-images.githubusercontent.com/91439231/219934538-6bf00f79-d350-4637-a383-7f419980872f.PNG)


### Longest Dynasty
Given a chronological list of dynasties and their respective end of reign in roman numerals (MCMLXXIX), identify the longest reigning dynasty.

    Implement the functions:

    - longestDynasty() to return the name of the dynasty which reigns the longest in an array of key-value pair dynastyReign
    - convertYear() to translate given year in roman numerals to integer

    Conditions:

    - Starting year is year 1000 (M in roman numerals)
    - The end of reign of one dynasty is the start of reign of another
    - Remove entries with invalid roman numerals (year of end of reign)
    - If passed roman number in convertYear() is invalid, return the word "Invalid" instead of the year
    - If dynastyReign is empty return "No Data"

    Output:
    ![kg-tech-exam-longest-dynasty](https://user-images.githubusercontent.com/91439231/219934548-6ad9f5ed-60b9-409e-8067-69398935746f.PNG)

    
