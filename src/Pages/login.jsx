import { Label, TextInput, Button, Card } from "flowbite-react";

const Login = () => {
  return (
    <>
      <main>
        <div className="p-3 my-36 lg:my-44">
          {/* <Card> */}
          <h1 className="font-bold">ADMIN - UMKM</h1>
          <h3>Login</h3>
          <form className="mx-10 mt-3 sm:mx-36 lg:mx-56 flex text-start flex-col gap-4 ">
            <div>
              {/* <div className="mb-2 block">
                <Label className="s" htmlFor="email" value="Email" />
              </div> */}
              <TextInput
                id="email"
                type="email"
                placeholder="Masukkan email"
                required
                shadow
                addon="Username"
              />
            </div>
            <div className="">
              <TextInput
                id="password"
                type="password"
                placeholder="Masukkan password"
                required
                shadow
                addon="Password"
              />
            </div>

            <Button className="mx-16 bg-gray-200 text-black" type="submit">
              Login
            </Button>
          </form>
          {/* </Card> */}
        </div>
      </main>
    </>
  );
};

export default Login;
