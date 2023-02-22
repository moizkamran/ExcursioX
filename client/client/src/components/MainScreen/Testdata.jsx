import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@mantine/core";
import { Text, Title } from "@mantine/core";

export function Testdata(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    display: "inline-flex",
    margin: "0 10px 10px 0",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card
        style={{
          width: 250,

          borderRadius: 10,
          backgroundColor: "#66bb6a",
        }}
      >
        <div style={{ display: "flex" }}></div>

        <Text>
          {10} {props.id}
        </Text>
        <div style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 14, color: "white" }}>
            2- New Visas to process
          </Text>
          <Text style={{ fontSize: 14, color: "white" }}>
            2- New Visas to process
          </Text>
          <Text style={{ fontSize: 14, color: "white" }}>
            2- New Visas to process
          </Text>
        </div>
      </Card>
    </div>
  );
}
