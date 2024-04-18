import { useState, useEffect, useRef, useCallback } from "react";
import { Form, useNavigate, useFetcher, useActionData } from "@remix-run/react";
import * as Dialog from "@app/components/dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { User } from "@domain/user";
import { Project } from "@domain/project";
import { ActionData as ProjectActionData } from "@app/routes/__main/projects/add-institute";
import { useUserStore } from "@app/store/user.store";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";
import { Title } from "@app/components/title";
import { Description } from "@app/components/description";
import { Kbd } from "@app/components/kbd-placeholder";
import { AddInstitutePanelHeader } from "./add-institute";

export const AddInstitutePanelView = ({
  project,
  users,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const actionData = useActionData() as ProjectActionData;
  const { user: loggedUser } = useUserStore();

  const postData = useCallback(
    (formTarget: HTMLFormElement) => {
      const formData = new FormData(formTarget);
      formData.set("_action", "upsert");

      fetcher.submit(formData, {
        method: "post",
      });
    },
    [fetcher]
  );

  const handleProgrammaticSubmit = useCallback((): void => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);

  const handleProgrammaticClose = (): void => {
    setIsOpen(false);
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );

  useEffect(() => {
    const isErrors =
      actionData?.errors && Object.keys(actionData?.errors).length > 0;

    if (isErrors) {
      document
        .getElementById("project-panel-overlay")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [actionData]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => navigate("/projects"), 300);
    }
  }, [isOpen, navigate]);

  return (
    <>
      <Dialog.Root open={true}>
        <Dialog.Portal container={portalContainer}>
          <Dialog.Overlay
            id="project-panel-overlay"
            className={isOpen ? "" : "bg-opacity-0"}
          >
            <Dialog.Content
              onEscapeKeyDown={handleProgrammaticClose}
              onPointerDownOutside={handleProgrammaticClose}
              className={cx(
                "max-w-[600px]",
                !isOpen && "translate-y-[10px] opacity-0"
              )}
            >
              <AddInstitutePanelHeader
                id={project?.id || "Add New Institute"}
              />
              <Form method="post" ref={formRef}>
                <div className="mb-6">
                  <Dialog.Title className="-ml-3 mb-8 mt-5">
                    <Title
                      initTitle={project?.name || ""}
                      maxLength={30}
                      error={actionData?.errors?.name}
                      placeholder="Write Name of Institute"
                    />
                  </Dialog.Title>
                  <p className="font-primary-black">Description</p>
                  <div className="-ml-3 mb-5">
                    <Description initDescription={project?.description || ""} />
                  </div>
                  {/* <Button className="mb-4">Generate Credentials</Button> */}
                  {/* <p className="font-primary-black">Credentials</p>
                  <div className="mb-8 grid grid-cols-2">
                    <span>Username</span>
                    <span>fajkdafjlafd</span>
                    <span>Password</span>
                    <span>fajaff;ad;da;</span>
                  </div> */}
                </div>
                <div className="mt-6 grid grid-cols-3 items-end justify-center">
                  <span className="font-primary-light text-2xs text-font-subtlest text-opacity-80">
                    Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to accept
                  </span>
                  <div className="flex justify-center">
                    <Button
                      color="primary"
                      type="submit"
                      name="_action"
                      value="upsert"
                      className="w-fit gap-2 px-8 py-2 font-primary-bold text-lg"
                      disabled={fetcher.state !== "idle"}
                      aria-label="Accept changes"
                    >
                      {fetcher.state !== "idle" ? (
                        <>
                          Submmiting
                          <Spinner />
                        </>
                      ) : (
                        "Add"
                      )}
                    </Button>
                  </div>
                  <span className="justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80">
                    Press <Kbd>Esc</Kbd> to close
                  </span>
                </div>
              </Form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
      {/* To avoid hydration issues because a missmatch with the server*/}
      <div
        ref={setPortalContainer}
        className="fixed left-0 top-0 z-50 h-full w-full"
      />
    </>
  );
};

interface Props {
  project?: Project;
  users: User[];
}

const Spinner = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="fill-grey-600 mr-2 inline-block h-5 w-5 animate-spin"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentBaseColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);
