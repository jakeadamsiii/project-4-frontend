//for editing and deleting profile
angular
  .module('fundraiser')
  .controller('ProfileCtrl', ProfileCtrl)
  .controller('EditCtrl', EditCtrl);

ProfileCtrl.$inject = ['User','$stateParams', '$http', '$state', '$auth'];
function ProfileCtrl(User, $stateParams, $http, $state, $auth){
  const vm = this;

  // vm.allUserItems = [];
  //
  // function getUsersItems(){
  //   Item.query()
  //   .$promise
  //   .then((items)=>{
  //     items.forEach((item)=>{
  //       if(item.createdBy.id === vm.user.id){
  //         vm.allUserItems.push(item);
  //       }
  //     });
  //   });
  // }

//defines all functions that is going be interact directly with the UI
// Grabs Request info from back end
  vm.user = User.get($stateParams, ()=>{
    console.log(vm.user.imageSRC);
    if(!vm.user.imageSRC) vm.user.imageSRC = vm.user.image;
    // getUsersItems();
  }); // vm.user is the current user's userpage rendering


  $http.get('/api/profile')
  .then((response)=> {
    vm.activeUser = response.data.user; // ActiveUser is the one being logged in
    });

    vm.delete= profileDelete;

  function profileDelete() {
    console.log('gone');
    $auth.logout();
    vm.user
      .$remove()
      .then(() => $state.go('landing'));
  }
}

EditCtrl.$inject = ['User', '$state', '$stateParams'];
function EditCtrl(User, $state, $stateParams){
  //gets the user from the profile passed in
  const vm = this;

  vm.update= updateUser;
  vm.user = User.get($stateParams);
//updates the user
  function updateUser(){
    console.log('cool');

    User
      .update({id: vm.user.id, user: vm.user })
      .$promise
      .then((user) => $state.go('profile', { id: vm.user.id }));

  }

}
