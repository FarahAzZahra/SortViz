
function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);
    // enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes2[start] ;//make the first element as pivot element.
    div_update(divs2[start],div_sizes2[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes2[ j ] < piv)
            {
                div_update(divs2[j],div_sizes2[j],"yellow");//Color update

                div_update(divs2[i],div_sizes2[i],"red");//Color update
                div_update(divs2[j],div_sizes2[j],"red");//Color update

                var temp=div_sizes2[i];
                div_sizes2[i]=div_sizes2[j];
                div_sizes2[j]=temp;

                div_update(divs2[i],div_sizes2[i],"red");//Height update
                div_update(divs2[j],div_sizes2[j],"red");//Height update

                div_update(divs2[i],div_sizes2[i],"blue");//Height update
                div_update(divs2[j],div_sizes2[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs2[start],div_sizes2[start],"red");//Color update
    div_update(divs2[i-1],div_sizes2[i-1],"red");//Color update
    
    var temp=div_sizes2[start];//put the pivot element in its proper place.
    div_sizes2[start]=div_sizes2[i-1];
    div_sizes2[i-1]=temp;

    div_update(divs2[start],div_sizes2[start],"red");//Height update
    div_update(divs2[i-1],div_sizes2[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs2[t],div_sizes2[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
}
