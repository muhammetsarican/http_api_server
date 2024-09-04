import BaseService from "./BaseService.js";

class UserService extends BaseService {
    constructor() {
        super("users")
    }
}

export default new UserService();