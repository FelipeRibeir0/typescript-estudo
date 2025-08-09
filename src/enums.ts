enum UserStatus {
    Admin = 1,
    Editor = 2,
    User = 3
}


function checkStatus(status: number): void {
  switch (status) {
    case UserStatus.Admin:
      console.log("É admin");
      break;

    case UserStatus.Editor:
      console.log("É editor");
      break;

    case UserStatus.User:
      console.log("É user normal");
      break;
  }
}

checkStatus(2)