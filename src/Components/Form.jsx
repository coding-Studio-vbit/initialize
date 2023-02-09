import {
  Button,
  LoadingOverlay,
  Modal,
  NumberInput,
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
import { useNotifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [opened, setOpened] = useState(false);
  const notifications = useNotifications();
  const [visible, setVisible] = useState(false);
  const [teamSize, setTeamSize] = useState(1);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      college: "",
      roll: "",
      phone: "",
      branch: "",
      year: "",
      section: "",
    },
    validationRules: {
      email: (value) => validator.isEmail(value),
      name: (value) =>
        validator.isAlpha(value, ["en-IN"], { ignore: " " }) &&
        value.length >= 3,
      roll: (value) => checkStudentRollNumber(value),
      phone: (value) => validator.isMobilePhone(value, ["en-IN"]),
      year: (value) => validator.isNumeric(value),
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
        setVisible(true);
        const coll = collection(db, "users");
        console.log("in submit");
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
            notifications.showNotification({
              color: "#9333ea",
              title: "Roll Number already registered",
              autoClose: 5500,
            });
          });
        } else if (r2.docs.length > 0) {
          unstable_batchedUpdates(() => {
            notifications.showNotification({
              color: "#9333ea",
              title: "Email already registered.",
              autoClose: 5500,
            });
          });
        } else if (r3.docs.length > 0) {
          unstable_batchedUpdates(() => {
            notifications.showNotification({
              color: "#9333ea",
              title: "Mobile number already registered.",
              autoClose: 5500,
            });
          });
        } else {
          unstable_batchedUpdates(() => {
            // form.reset();
            setOpened(true);
          });
        }
      }
    } catch (error) {
      console.log(error);
      unstable_batchedUpdates(() => {
        notifications.showNotification({
          color: "#9333ea",
          title: "An error occured while registering. Try again later.",
          autoClose: 5500,
        });
      });
    } finally {
      setVisible(false);
    }
  };

  return (
    <div className="relative md:grid-cols-2 min-h-screen md:gap-8 lg:gap-16  grid-cols-1 place-content-center	 w-full py-[5rem]   grid z-20">
      <div className="absolute w-full z-[-1] -translate-y-1">
        <WavesDown />
      </div>
      <AboutEvent />
      <div
        id="form"
        className=" shadow-xl md:mt-0 mt-8 md:w-[95%] lg:w-[90%] xl:w-[65%]  w-[90%] mx-auto  md:ml-0 md:mr-auto bg-[#1e1e1e] p-8"
      >
        <span className="text-[2.2rem]">Register</span>
        <br />
        <span className="text-[0.8rem]">
          Only 1 member from a team should register.
        </span>

        <form
          className="mt-6 grid gap-3 relative z-30 "
          onSubmit={async (e) => {
            e.preventDefault();
            await submit();
          }}
        >
          <LoadingOverlay visible={visible} />
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
            icon={<span className="material-icons">apartment</span>}
            required
            label="College"
            variant="filled"
            placeholder="Harvard University"
            {...form.getInputProps("college")}
          />
          <Select
            icon={<span className="material-icons">face</span>}
            placeholder="Team Size"
            label="Team Size"
            required
            data={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
            ]}
            {...form.getInputProps("teamSize")}
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
            <TextInput
            icon={<span className="material-icons">face</span>}
            required
            label="Hackerrank ID - Enter the ID you will use in the contest"
            variant="filled"
            placeholder="alan_turing"
            error={form.errors.name}
            onBlur={() => form.validateField("hackerrankID")}
            {...form.getInputProps("hackerrankID")}
          />
          <div className="flex gap-4">
            <Select
              icon={<span className="material-icons">date_range</span>}
              placeholder="Enter your year"
              label="Year"
              required
              data={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
              ]}
              {...form.getInputProps("year")}
            />
            <Select
              icon={<span className="material-icons">class</span>}
              required
              label="Section"
              variant="filled"
              data={[
                { value: "A", label: "A" },
                { value: "B", label: "B" },
                { value: "C", label: "C" },
                { value: "D", label: "D" },
              ]}
              placeholder="Enter your section"
              {...form.getInputProps("section")}
            />
          </div>
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
          {/* <p className="mt-3 text-xs text-red-300">
          *Registrants will go through a short interview before being selected
          for the workshop.
        </p> */}
          <Button
            type="submit"
            size="md"
            className="bg-purple-600 mt-[2rem]  hover:bg-purple-800 shadow-md"
          >
            Submit
          </Button>
        </form>
      </div>

      <Modal
        opened={opened}
        centered
        onClose={() => setOpened(false)}
        title="Almost there !"
      >
        <Questions form={form} setOpened={setOpened} />
      </Modal>
      <div className="absolute w-full h-max bottom-0 opacity-[0.60] z-[15]">
        <Art />
      </div>
    </div>
  );
}

const Questions = ({ form, setOpened }) => {
  const [q1, setQ1] = useState("");
  const [error, setError] = useState({ q1: "", q2: "" });
  const [q2, setQ2] = useState("");
  const [visible, setVisible] = useState(false);
  const nav = useNavigate();
  return (
    <div className="relative">
      <LoadingOverlay visible={visible} />
      <Textarea
        placeholder="Start here"
        required
        error={error.q1}
        variant="filled"
        onChange={(e) => {
          if (e.target.value.length >= 50) setError({ q1: "", q2: error.q2 });
          setQ1(e.target.value);
        }}
        autosize
        label="What fascinates you about programming ?"
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
        label="Do you have any programming experience?"
        autosize
        minRows={3}
      />
      <Button
        type="submit"
        size="md"
        onClick={async () => {
          setVisible(true);
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
              form.reset();
            });

            nav("/registered", { state: form.values.name });
          }
          setVisible(false);
        }}
        className="bg-purple-600 mt-[1rem] ml-auto w-full  hover:bg-purple-800 shadow-md"
      >
        Submit
      </Button>
    </div>
  );
};
