import LeafletFieldMap from "./LeafletFieldMap";
import session3 from "../../../data/session-3.json";
import fields from "../../../data/fields.json";

export default function FieldMapCard() {
  return (
    <section className="bg-white rounded-2xl shadow p-4">
      <LeafletFieldMap session={session3} fields={fields} />
    </section>
  );
}