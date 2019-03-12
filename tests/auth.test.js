import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";

chai.use(chaiHttp);

describe("User tests", () => {
  it("Should create a new user with all creds passed", done => {
    const user = {
      username: "usertest",
      email: "test@gmail.com",
      password: "testpassword"
    };
    chai
      .request(app)
      .post("/api/v1/users/register")
      .send(user)
      .end((err, res) => {
        console.log(err);
        expect(res.status).to.equal(201);
        done();
      });
  });
});
