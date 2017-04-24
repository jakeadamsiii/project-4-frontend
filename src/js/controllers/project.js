angular
  .module('fundraiser')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl)
  .controller('ProjectsNewCtrl', ProjectsNewCtrl)
  .controller('ProjectsShowCtrl', ProjectsShowCtrl)
  .controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'Category', 'filterFilter', 'orderByFilter', '$scope'];
function ProjectsIndexCtrl(Project, Category, filterFilter, orderByFilter, $scope){
  const vm = this;

  vm.all = [];

  function getProjects() {
    Project
      .query()
      .$promise
      .then((projects) => {
        vm.all = projects;
        filterItem();
        determineWidth();
      });
  }
  getProjects();

  vm.category = '';
  vm.categories = Category.query();

  function filterItem() {
    const params = { title: vm.q };
    vm.filtered = filterFilter(vm.all, params);
    vm.filtered = filterFilter(vm.filtered, { category:  { id: vm.category } });
  }

  $scope.$watchGroup([
    () => vm.q,
    () => vm.all.$resolved,
    () => vm.category
  ], filterItem);

  filterItem();

  function determineWidth(){
    for(var i =0; i< vm.all.length; i++)
    console.log(vm.all[i].percent);
    document.getElementsByClassName("bars").style.width = `${vm.all[i].percent}%`;
    }
  

}

ProjectsNewCtrl.$inject = ['Project', 'Category', 'User', '$state', '$uibModal', 'youtubeService'];
function ProjectsNewCtrl(Project, Category, User, $state, $uibModal, youtubeService) {
  const vm = this;
  vm.project = {};
  vm.users = User.query();
  vm.categories = Category.query();

  function submit(){
    vm.project.video = youtubeService.getCode(vm.project.video);
    Project
    .save({ project: vm.project })
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

ProjectsShowCtrl.$inject = ['Project', 'User', '$state','$stateParams'];
function ProjectsShowCtrl(Project, User, $state, $stateParams) {
  const vm = this;
  vm.users = User.query();

  Project
    .get($stateParams)
    .$promise
    .then(response =>{
      vm.project = response;
      determineWidth();

      function determineWidth(){
        let widthPercent = Math.floor((vm.project.current_amount/vm.project.target_amount)*100);
        if (widthPercent >= 100){
          widthPercent = 100;
        }
        document.getElementById("bar").style.width = `${widthPercent}%`;
        // document.getElementById("moving-amount").style.left = `${widthPercent}%`;
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

    Project
      .update({ id: vm.project.id, project: vm.project })
        .$promise
        .then(() => $state.go('projectsShow', $stateParams));
  }

  vm.update = projectsUpdate;

}
