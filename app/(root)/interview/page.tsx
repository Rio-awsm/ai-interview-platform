import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.actions";
import React from "react";

const InterviewPage = async () => {
  const user = await getCurrentUser();
  
  return (
    <>
      <h3>Interview generation</h3>
      <Agent
        userName={user?.name!}
        userId={user?.id}
        profileImage={user?.profileURL}
        type="generate"
      />
    </>
  );
};

export default InterviewPage;
