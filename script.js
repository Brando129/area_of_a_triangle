// Create a function that is able to tell us what the area of a triangle will be

function find_area(base, height){
    var base = base/2
    var height = height
    var area = Math.round(base * height)

    return area
}

console.log(find_area(12, 5))