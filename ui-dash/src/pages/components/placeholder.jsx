import React from "react";
import Card from "@/components/ui/Card";
import Grid from "@/components/skeleton/Grid";
import SkeletionTable from "@/components/skeleton/Table";
import ListLoading from "@/components/skeleton/ListLoading";

const placeholder = () => {
  return (
    <div className="space-y-5">
      <Card title="مثال یک">
        <Grid count={3} />
      </Card>
      <Card title="مثال دو">
        <SkeletionTable count={3} />
      </Card>
      <Card title="مثال سه">
        <ListLoading count={3} />
      </Card>
    </div>
  );
};

export default placeholder;
