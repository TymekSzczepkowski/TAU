const pactum = require("pactum");

describe("Get data for user with ID 1", () => {
  it("should give HTTP status code 200", async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users/1").expectStatus(200);
  });
  it('should give Content-Type header containing value "application/json"', async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users/1").expectHeaderContains("content-type", "application/json");
  });
  it('should give "name" JSON body element with value "Leanne Graham"', async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users/1").expectJsonMatch("name", "Leanne Graham");
  });
  it('should give "Gwenborough" as the city within the address', async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users/1").expectJsonMatch("address.city", "Gwenborough");
  });
});
describe("Get data for user with ID 3", () => {
  it('should give "name" JSON body element with value "Clementine Bauch"', async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users/3").expectJsonMatch("name", "Clementine Bauch");
  });
  it('should give "McKenziehaven" as the city within the address', async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users/3").expectJsonMatch("address.city", "McKenziehaven");
  });
});
describe("Get all user data", () => {
  it("should give a list of 10 users", async () => {
    await pactum.spec().get("http://jsonplaceholder.typicode.com/users").expectJsonLength(10);
  });
});

describe("Posting a new post item", () => {
  it("should give HTTP status code 201", async () => {
    let new_user = {
      first_name: "John",
      last_name: "Doe",
      e_mail: "johndoe@gmail.com",
    };

    await pactum.spec().post("http://jsonplaceholder.typicode.com/posts").withJson(new_user).expectStatus(201);
  });
});
