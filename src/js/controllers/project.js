angular
  .module('fundraiser')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl)
  .controller('ProjectsNewCtrl', ProjectsNewCtrl)
  .controller('ProjectsShowCtrl', ProjectsShowCtrl)
  .controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'Category', 'filterFilter', 'orderByFilter', '$scope'];
function ProjectsIndexCtrl(Project, Category, filterFilter, orderByFilter, $scope){
  const vm = this;

  vm.all = Project.query();
  vm.categories = Category.query();

    function filterProjects() {
      const params =  { title: vm.q };
      vm.filtered = filterFilter(vm.all, vm.q, params);

      if(vm.category) params.category = vm.category;
    }

  // function filterProjects(){
  //   const params =  { title: vm.q };
  //   if(vm.catagory) params.catagory = vm.catagory;
  //   vm.filtered = filterFilter(vm.all, params);
  //   vm.filtered = orderByFilter(vm.filtered, vm.sort);
  // }

  $scope.$watchGroup([
    ()=> vm.catagory,
    ()=> vm.q
    // ()=> vm.sort
  ],filterProjects);
}

ProjectsNewCtrl.$inject = ['Project', 'Category', 'User', '$state', '$uibModal'];
function ProjectsNewCtrl(Project, Category, User, $state, $uibModal) {
  const vm = this;
  vm.project = {};
  vm.users = User.query();
  vm.categories = Category.query();

  function submit(){
    Project
    .save(vm.project)
    .$promise
    .then(()=> $state.go('projectsIndex'));
  }

  vm.submit = submit;

  function openModal() {
  $uibModal.open({
    templateUrl: 'js/views/partials/newModal.html',
    controller: 'ProjectsNewCtrl as projectsNew'
  });
  }

vm.open = openModal;

function closeModal() {
  $uibModalInstance.close();
}

vm.close = closeModal;
}

ProjectsShowCtrl.$inject = ['Project', '$state','$stateParams'];
function ProjectsShowCtrl(Project, $state, $stateParams) {
const vm = this;

Project
  .get($stateParams)
  .$promise
  .then(response =>{
    vm.project = response;
    determineWidth();

    function determineWidth(){
      const widthPercent = Math.floor((vm.project.current_amount/vm.project.target_amount)*100);
      document.getElementById("bar").style.width = `${widthPercent}%`;
      document.getElementById("moving-amount").style.left = `${widthPercent}%`;
      }

  });

vm.delete = projectsDelete;

  function projectsDelete() {
    console.log('cool');
    vm.project
      .$remove()
      .then(() => $state.go('projectsIndex'));
  }

}


ProjectsEditCtrl.$inject = ['Project', 'Category', '$stateParams', '$state'];
function ProjectsEditCtrl(Project, Category, $stateParams, $state) {
  const vm = this;

  Project
    .get($stateParams)
    .$promise
    .then((project) => {
      vm.project = project;
      vm.project.end_date = new Date(project.end_date);
    });

  vm.categories = Category.query();

  function projectsUpdate() {
    console.log(vm.project);
    // The vm.project gives us the full object user so I had to reassign the createdBy to an single Object.id inorder for the form to work because it only takes a Singledatavalue
    // vm.project.createdBy = vm.project.createdBy.id;

    Project
      .update({id: vm.project.id, project: vm.project })
      .$promise
      .then((project) => $state.go('projectsShow', { id: vm.project.id }));

  }

  vm.update = projectsUpdate;
}
