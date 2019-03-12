import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";

chai.use(chaiHttp);

describe("Test Todos", () => {
  let token;
  before(done => {
    chai
      .request(app)
      .post("/api/v1/users/login")
      .send({ email: "test@gmail.com", password: "testpassword" })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  describe("Create Todo", () => {
    const result = {};
    before(done => {
      chai
        .request(app)
        .post("/api/v1/todo")
        .send({ title: "newtesttodo", content: "content in todo" })
        .set("Authorization", token)
        .end((err, res) => {
          result.status = res.status;
          result.body = res.body;
          done();
        });
    });

    it("Should return the correct status", () => {
      expect(result.status).to.equal(201);
    });

    it("Should return the correct body content", () => {
      expect(result.body.Message).to.equal("Todo created successfully");
      expect(result.body)
        .to.have.property("newTodo")
        .that.is.a("object");
    });
  });
});
