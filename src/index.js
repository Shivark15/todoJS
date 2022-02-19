var task;
var arr=[];
var html='';
var t=-1;
var doneTask=[];
var html1='';
function push()
{   
    if(t==-1)
    {
    task=document.getElementById('new-task').value;
    arr.push(task);
    }
    else
    {   
        arr[t]=document.getElementById('new-task').value;
        t=-1;
        document.getElementById('addButton').innerHTML='Add';
    }
    display(arr);
}
function display(arr)
{
    
    //console.log(arr);
    html="";
    for(var i=0;i<arr.length;i++)
    {
        // var edit = document.createElement('input');
        // edit.type = 'button';
        // edit.value = 'edit';
        // edit.onClick = 'edit(i)';
        html+='<li><input type="checkbox"  onclick="done('+i+')" ><label>'+arr[i]+'</label><button onclick="edit('+i+')" class="edit">Edit</button><button onclick="delet('+i+')" class="delet">Delete</button></li>'
       
    // console.log(arr[i]); 
    }
    document.getElementById('incomplete-tasks').innerHTML=html;
}
function edit(i)
{
    t=-1;
    console.log(i);
    document.getElementById('addButton').innerHTML='Update';
    document.getElementById('new-task').value=arr[i];
    t=i;
}
function delet(i)
{
   // console.log('clicked');
    arr.splice(i,1);
    display(arr);
}
function done(i)
{
    doneTask.push(arr[i]);
    arr.splice(i,1);
    display(arr);
    displayComplete(doneTask);
    
}
function displayComplete(doneTask)
{

    html1="";
    for(var i=0;i<doneTask.length;i++)
    {
        // var edit = document.createElement('input');
        // edit.type = 'button';
        // edit.value = 'edit';
        // edit.onClick = 'edit(i)';
        html1+='<li><input type="checkbox" checked=true  ><label>'+doneTask[i]+'</label><button onclick="deleteDone('+i+')" class="delet">Delete</button></li>'
       
    // console.log(arr[i]); 
    }
    document.getElementById('completed-tasks').innerHTML=html1;

}
function deleteDone(i)
{
    doneTask.splice(i,1);
    displayComplete(doneTask);
}
