import SignUpPage from "@/app/auth/signup/page";
import { appRender, screen, userEvent, waitFor } from "@/testing/testUtils";

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

describe("SignUp Page", () => {
  it("should sign up the user into the dashboard", async () => {
    await appRender(<SignUpPage />);

    const idInput = screen.getByLabelText(/ID/i);

    const nameInput = screen.getByLabelText(/名前/i);

    const passwordInput = screen.getByLabelText(/password/i);

    const submitButton = screen.getByRole("button", {
      name: /log in/i,
    });

    const credentials = {
      id: "user1",
      name: "user1",
      password: "password",
    };

    userEvent.type(idInput, credentials.id);

    userEvent.type(nameInput, credentials.name);

    userEvent.type(passwordInput, credentials.password);

    userEvent.click(submitButton);

    await waitFor(() =>
      expect(router.replace).toHaveBeenCalledWith("/auth/login")
    );
  });
});
