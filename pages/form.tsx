import React, { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValue {
  name: string;
  nickname: string;
  email: string;
  password: string;
  password_confirm: string;
}

const Form = () => {
  const { register, handleSubmit, watch, formState } = useForm<FormValue>();
  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  // Functions
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  //LifeCycle
  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);

  // Render
  return (
    <div className="w-full bg-amber-100 h-screen flex flex-col gap-6">
      <form
        className="text-black flex flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label htmlFor="name">이름</label>
        <input
          {...register("name", {
            required: "이름은 필수입니다.",
            maxLength: 25,
          })}
          className="text-white"
          id="name"
          type="name"
          name="name"
          placeholder="홍길동"
        />
        {formState.errors.name && <p>{formState.errors.name.message}</p>}
        <label htmlFor="nickname">닉네임</label>
        <input
          {...register("nickname", {
            required: "닉네임은 필수입니다.",
            maxLength: 25,
          })}
          className="text-white"
          id="nickname"
          type="nickname"
          name="nickname"
          placeholder="닉네임"
        />
        {formState.errors.nickname && (
          <p>{formState.errors.nickname.message}</p>
        )}
        <label htmlFor="email">이메일</label>
        <input
          {...register("email", {
            required: "이메일은 필수입니다.",
            pattern: /^\S+@\S+$/i,
          })}
          className="text-white"
          id="email"
          type="email"
          name="email"
          placeholder="test@email.com"
        />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
        <label htmlFor="password">비밀번호</label>
        <input
          {...register("password", {
            required: "비밀번호를 잘 입력해주세요",
            minLength: 5,
          })}
          className="text-white"
          id="password"
          type="password"
          name="password"
          placeholder="*********"
        />
        {formState.errors.password && (
          <p>{formState.errors.password.message}</p>
        )}
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          {...register("password_confirm", {
            required: "비밀번호를 잘 확인해주세요",
            validate: (value: string) => value === passwordRef.current,
          })}
          className="text-white"
          id="passwordConfirm"
          type="password"
          name="password_confirm"
          placeholder="*********"
        />
        {formState.errors.password_confirm && (
          <p>{formState.errors.password_confirm.message}</p>
        )}
        <button type="submit" disabled={formState.isSubmitting}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Form;
