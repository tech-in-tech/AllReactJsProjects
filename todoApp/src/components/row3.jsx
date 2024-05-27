function Row3(){
  let todoDate = '29/3/24'
  let todoName = 'Go to Gym'
  return   <div class="row">
  <div class="col-6">{todoName}</div>
  <div class="col-4">{todoDate}</div>
  <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
</div>
}

export default Row3;