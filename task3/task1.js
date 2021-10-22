let i = 2 , j , k

while (i < 100){
    j = 2
    k = 0
    while ( j <= i / 2){
        if ( i % j === 0 )
            k++
        j++
    }
    if (k === 0 )
        console.log( i )
    i++
}
