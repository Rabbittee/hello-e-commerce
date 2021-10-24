import { Icon, Input, Button } from "@/components";
import { Auth as Layout } from "@/layouts";

export function SignIn() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          icon={<Icon.Mail />}
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          icon={<Icon.Lock />}
        />
      </div>

      <div className="my-6">
        <a href="#">Forgot Password</a>
      </div>

      <Button>Sign In</Button>

      <p className="space-x-2 my-6">
        <span>Didn't have any account?</span>

        <a href="#" className="text-primary underline">
          Sign Up here
        </a>
      </p>
    </Layout>
  );
}
