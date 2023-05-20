import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <form action="/weather" method="get">
        City: <input type="text" name="city" />
        <input type="submit" value="Fetch weather" />
      </form>
    </div>
  );
}
