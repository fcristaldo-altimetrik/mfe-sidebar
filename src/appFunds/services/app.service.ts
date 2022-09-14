export class AppService {
  currentEmail: String = '';
  currentRole: String = '';

  setCurrentEmail(email: String) {
    this.currentEmail = email;
  }

  getCurrentEmail(): String {
    return this.currentEmail;
  }

  setCurrentRole(role: String) {
    this.currentRole = role;
  }

  getCurrentRole(): String {
    return this.currentRole;
  }
}
