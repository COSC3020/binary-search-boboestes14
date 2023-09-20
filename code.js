function binarySearch(list, element) {
    i = 0;
    while(i<list.length){
        if(list[i] == element)
            return i;

        if(list[i+2] <= element){
            i = ((i*2)+2);
        }
        else{
            i = (i*2)+1;
        }
    }
    return -1;
}
