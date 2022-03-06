import {
  Button,
  Dialog,
  LoadingOverlay,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import validator from "validator";

import { useForm } from "@mantine/hooks";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Art from "./../bottomspikes.svg?component";
import { checkStudentRollNumber } from "../Util/RollValidation";
import WavesDown from "./../wavesdown.svg?component";

import AboutEvent from "./AboutEvent";
import { unstable_batchedUpdates } from "react-dom";

export default function Form() {
  const [opened, setOpened] = useState(false);

  const [openedSucc, setOpenedSucc] = useState(false);
  const [msg, setMsg] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      roll: "",
      phone: "",
      branch: "",
    },
    validationRules: {
      email: (value) => validator.isEmail(value),
      name: (value) => validator.isAlpha(value, ["en-IN"],{ignore:' '}) && value.length >= 3,
      roll: (value) => checkStudentRollNumber(value),
      phone: (value) => validator.isMobilePhone(value, ["en-IN"]),
    },
    errorMessages: {
      email: "Enter a valid email address",
      name: "Name should be of atleast 3 characters and should contain only alphabet",
      phone: "Invalid mobile number",
      roll: "Invalid roll number",
    },
  });

  const submit = async () => {
    try {
      if (form.validate()) {
        const coll = collection(db, "users");
        const q1 = query(coll, where("roll", "==", form.values.roll));
        const q2 = query(coll, where("email", "==", form.values.email));
        const q3 = query(coll, where("phone", "==", form.values.phone));
        const [r1, r2, r3] = await Promise.all([
          getDocs(q1),
          getDocs(q2),
          getDocs(q3),
        ]);
        if (r1.docs.length > 0) {
          unstable_batchedUpdates(() => {
            setMsg("Roll Number already registered.");

            setOpenedSucc(true);
          });
        } else if (r2.docs.length > 0) {
          unstable_batchedUpdates(() => {
            setMsg("Email already registered.");

            setOpenedSucc(true);
          });
        } else if (r3.docs.length > 0) {
          unstable_batchedUpdates(() => {
            setMsg("Mobile number already registered.");

            setOpenedSucc(true);
          });
        } else {
          unstable_batchedUpdates(() => {
            setMsg("Registered successfully.");
            // form.reset();
            setOpened(true);
          });
        }
      }
    } catch (error) {
      console.log(error);
      unstable_batchedUpdates(() => {
        setMsg("An error occured while registering. Try again later.");
        setOpenedSucc(true);
      });
    }
  };

  return (
    <div
      id="form"
      className="relative md:grid-cols-2 min-h-screen md:gap-8 lg:gap-16  grid-cols-1 place-content-center	 w-full py-[5rem]  bg-[#f5e8f7] grid z-20"
    >
      <div className="absolute w-full z-[-1]">
        <WavesDown />
      </div>
      <AboutEvent />
      <div className="shadow-xl md:w-[95%] lg:w-[90%] xl:w-[65%]  w-[90%] mx-auto  md:ml-0 md:mr-auto bg-white h-max p-8">
        <span className="text-[2.2rem]">Register</span>

        <form
          className="mt-6 grid gap-3 relative z-30 "
          onSubmit={async (e) => {
            e.preventDefault();
            await submit();
          }}
        >
          <TextInput
            icon={<span className="material-icons">face</span>}
            required
            label="Name"
            variant="filled"
            placeholder="John"
            error={form.errors.name}
            onBlur={() => form.validateField("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            icon={<span className="material-icons">numbers</span>}
            required
            onBlur={() => form.validateField("roll")}
            label="Roll Number"
            variant="filled"
            placeholder="18P61A0***"
            {...form.getInputProps("roll")}
          />
          <TextInput
            icon={<span className="material-icons">alternate_email</span>}
            required
            label="Email"
            variant="filled"
            onBlur={() => form.validateField("email")}
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            icon={<span className="material-icons">smartphone</span>}
            required
            label="Mobile"
            onBlur={() => form.validateField("phone")}
            variant="filled"
            placeholder="970414xxxx"
            {...form.getInputProps("phone")}
          />
          <Select
            icon={<span className="material-icons">school</span>}
            label="Branch"
            placeholder="CSE"
            searchable
            required
            variant="filled"
            nothingFound="No options"
            data={[
              { value: "ce", label: "CE" },
              { value: "csb", label: "CSB" },
              { value: "csc", label: "CSC" },
              { value: "csd", label: "CSD" },
              { value: "cse", label: "CSE" },
              { value: "csm", label: "CSM" },
              { value: "ece", label: "ECE" },
              { value: "eee", label: "EEE" },
              { value: "it", label: "IT" },
              { value: "me", label: "ME" },
            ]}
            {...form.getInputProps("branch")}
          />
          <Button
            type="submit"
            size="md"
            className="bg-purple-600 mt-[2rem]  hover:bg-purple-800 shadow-md"
          >
            Submit
          </Button>
        </form>
      </div>
      <Dialog
        opened={openedSucc}
        withCloseButton
        position={{ top: 20, right: 20 }}
        onClose={() => setOpenedSucc(false)}
        size="lg"
        radius="md"
      >
        <DialogMessage setOpenedSucc={setOpenedSucc} msg={msg} />
      </Dialog>
      {/* <Modal
        opened={openedSucc}
        centered
        onClose={() => setOpenedSucc(false)}
        title="All Done!"
        
      >
        <span className="text-lg" >{msg}</span>
      </Modal> */}
      <Modal
        opened={opened}
        centered
        onClose={() => setOpened(false)}
        title="Almost there !"
      >
        <Questions
          form={form}
          setOpened={setOpened}
          setOpenedSucc={setOpenedSucc}
        />
      </Modal>
      <div className="absolute w-full h-max bottom-0 opacity-[0.60] z-[15]">
        <Art />
      </div>
    </div>
  );
}

const Questions = ({ form, setOpened, setOpenedSucc }) => {
  const [q1, setQ1] = useState("");
  const [error, setError] = useState({ q1: "", q2: "" });
  const [q2, setQ2] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <LoadingOverlay
        visible={visible}
        loaderProps={{ size: "sm", color: "pink", variant: "bars" }}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
      />
      <Textarea
        placeholder="Start here"
        required
        error={error.q1}
        variant="filled"
        onChange={(e) => {
          if (e.target.value.length >= 50) setError({ q1: "", q2: error.q2 });
          setQ1(e.target.value);
        }}
        label="Do you have any programming experience?"
        autosize
        maxLength={300}
        className="mb-4"
        minRows={3}
      />
      <Textarea
        placeholder="Start here"
        required
        error={error.q2}
        maxLength={300}
        onChange={(e) => {
          if (e.target.value.length >= 50) setError({ q2: "", q1: error.q1 });
          setQ2(e.target.value);
        }}
        variant="filled"
        label="Why do you want to participate in cs.Init(); ?"
        autosize
        minRows={3}
      />
      <Button
        type="submit"
        size="md"
        onClick={async () => {
          if (q1.length < 50) {
            setError({
              q1: "Please enter atleast 50 characters",
              q2: error.q2,
            });
          } else if (q2.length < 50) {
            setError({
              q2: "Please enter atleast 50 characters",
              q1: error.q2,
            });
          } else {
            await setDoc(doc(db, "users", form.values.roll), {
              q1: q1,
              q2: q2,
              ...form.values,
            });
            unstable_batchedUpdates(() => {
              setOpened(false);
              setOpenedSucc(true);
              setVisible(false)
              form.reset();
            });
          }
        }}
        className="bg-purple-600 mt-[1rem] ml-auto w-full  hover:bg-purple-800 shadow-md"
      >
        Submit
      </Button>
    </div>
  );
};

const DialogMessage = ({ setOpenedSucc, msg }) => {
  useEffect(() => {
    setTimeout(() => {
      setOpenedSucc(false);
    }, 2500);
  }, []);
  return <span className="text-lg">{msg}</span>;
};
