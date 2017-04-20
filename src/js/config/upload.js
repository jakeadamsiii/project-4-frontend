// Upload.upload({
//     url: 'https://angular-file-upload.s3.amazonaws.com/wdildnproject2', //S3 upload url including bucket name
//     method: 'POST',
//     data: {
//         key: file.name, // the key to store the file on S3, could be file name or customized
//         AWSAccessKeyId: <YOUR AWS AccessKey Id>,
//         acl: 'private', // sets the access to the uploaded file in the bucket: private, public-read, ...
//         policy: $scope.policy, // base64-encoded json policy (see article below)
//         signature: $scope.signature, // base64-encoded signature based on policy string (see article below)
//         "Content-Type": file.type != '' ? file.type : 'application/octet-stream', // content type of the file (NotEmpty)
//         filename: file.name, // this is needed for Flash polyfill IE8-9
//         file: file
//     }
// });
