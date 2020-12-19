function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs1[i],div_sizes1[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs1[j],div_sizes1[j],"yellow");//Color update

            if(div_sizes1[j]<div_sizes1[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs1[index_min],div_sizes1[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs1[index_min],div_sizes1[index_min],"red");//Color update
            }
            else
            {
                div_update(divs1[j],div_sizes1[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes1[index_min];
            div_sizes1[index_min]=div_sizes1[i];
            div_sizes1[i]=temp;

            div_update(divs1[index_min],div_sizes1[index_min],"red");//Height update
            div_update(divs1[i],div_sizes1[i],"red");//Height update
            div_update(divs1[index_min],div_sizes1[index_min],"blue");//Color update
        }
        div_update(divs1[i],div_sizes1[i],"green");//Color update
    }
    div_update(divs1[i],div_sizes1[i],"green");//Color update

    enable_buttons();

}
