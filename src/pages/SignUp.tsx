import { Icon, Input, Button, SocialMedia } from "@/components";
import { Auth as Layout } from "@/layouts";

export function SignUp() {
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

      <Button className="mt-6">Sign Up</Button>

      <div className="my-8 flex gap-4 justify-center">
        <SocialMedia>
          <Icon.Apple />
        </SocialMedia>

        <SocialMedia>
          <Icon.FaceBook />
        </SocialMedia>

        <SocialMedia>
          <Icon.Google />
        </SocialMedia>
      </div>

      <p className="space-x-2 ">
        <span>If you have an account?</span>

        <a href="#" className="text-primary underline">
          Sign In here
        </a>
      </p>
    </Layout>
  );
}
