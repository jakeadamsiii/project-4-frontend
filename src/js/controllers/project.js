angular
  .module('fundraiser')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl)
  .controller('ProjectsNewCtrl', ProjectsNewCtrl)
  .controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'filterFilter', 'orderByFilter', '$scope'];
function ProjectsIndexCtrl(Project, filterFilter, orderByFilter, $scope){
  const vm = this;

  vm.all = Project.query();

    function filterProjects() {
      vm.filtered = filterFilter(vm.all, vm.q);
    }


  // Project.query().$promise.then((projects) => {
  //   vm.all = projects;
  //   filterProjects();
  // });
  //
  // function filterProjects(){
  //   const params =  { title: vm.q };
  //   if(vm.catagory) params.catagory = vm.catagory;
  //   vm.filtered = filterFilter(vm.all, params);
  //   vm.filtered = orderByFilter(vm.filtered, vm.sort);
  // }

  $scope.$watchGroup([
    // ()=> vm.catagory,
    ()=> vm.q
    // ()=> vm.sort
  ],filterProjects);
}

ProjectsNewCtrl.$inject = ['Project', 'Category', 'User', '$state'];
function ProjectsNewCtrl(Project, Category, User, $state) {
  const vm = this;
  vm.users = User.query();
  vm.categories = Category.query();

  function submit(){
    Project.save(vm.project)
    .$promise
    .then(()=> $state.go('projectsIndex'));
  }

  vm.submit = submit;
}

ProjectsShowCtrl.$inject = ['Project', '$state','$stateParams'];
function ProjectsShowCtrl(Project, $state, $stateParams) {
const vm = this;

Project
  .get($stateParams)
  .$promise
  .then(response =>{
    vm.project = response;
  });

vm.delete = projectsDelete;

  function projectsDelete() {
    console.log('cool');
    vm.project
      .$remove()
      .then(() => $state.go('projectsIndex'));
  }
}
