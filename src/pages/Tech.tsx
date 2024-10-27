import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { useState } from "react";
import { skills } from "../data/skills";
import { Badge } from "../components/ui/Badge";

import Button from "../components/ui/Button";
import Divider from "../components/ui/Divider";

export default function Tech() {
  const [activeSkill, setActiveSkill] = useState("full-stack");

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Divider />
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter md:text-5xl bg-clip-text text-gray-950">
          Field Expertise
        </h1>
        <p className="text-xl text-gray-950">
          Languages, frameworks, and tech stacks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Object.entries(skills).map(([key, skill]) => (
            <Button
              key={key}
              variant={activeSkill === key ? "primary" : "outline"}
              className="h-auto py-4 flex flex-col items-center justify-center"
              onClick={() => setActiveSkill(key)}
            >
              {skill.icon}
              <span className="mt-2 text-lg font-semibold">{skill.title}</span>
            </Button>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              {skills[activeSkill]?.icon}
              {skills[activeSkill]?.title}
            </CardTitle>
            <CardDescription>
              {skills[activeSkill]?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills[activeSkill]?.areas.map((area, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  {" "}
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {area.icon}
                    {area.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.techs.map((tech, techIndex) => (
                      <Badge key={techIndex} className="" variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
