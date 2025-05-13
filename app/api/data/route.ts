import dbConnect from "@/lib/mongodb";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

const langSchema = z.enum(["en", "fr", "es"]);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lang = searchParams.get("lang") || "en";

    langSchema.parse(lang);

    const { db } = await dbConnect();

    const general = await db.collection("general").findOne({});
    const generalData: General | object = general
      ? {
          name: general.name[lang],
          title: general.title[lang],
          headline: general.headline[lang],
          about: general.about[lang],
          socials: general.socials,
        }
      : {};

    const experiences = await db.collection("experiences").find({}).toArray();
    const experiencesData: Experience[] = experiences.map((exp) => ({
      ...exp,
      title: exp.title[lang],
      company: exp.company[lang],
      href: exp.href,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description[lang],
      skills: exp.skills[lang],
    }));

    const education = await db.collection("education").find({}).toArray();
    const educationData: Education[] = education.map((edu) => ({
      ...edu,
      subject: edu.subject[lang],
      degree: edu.degree[lang],
      university: edu.university[lang],
      href: edu.href,
      startDate: edu.startDate,
      endDate: edu.endDate,
      description: edu.description[lang],
    }));

    const volunteering = await db.collection("volunteering").find({}).toArray();
    const volunteeringData: Volunteering[] = volunteering.map((vol) => ({
      ...vol,
      position: vol.position[lang],
      event: vol.event[lang],
      organisation: vol.organisation[lang],
      href: vol.href,
      startDate: vol.startDate,
      endDate: vol.endDate,
      description: vol.description[lang],
    }));

    const projects = await db.collection("projects").find({}).toArray();
    const projectsData: Project[] = projects.map((proj) => ({
      ...proj,
      name: proj.name[lang],
      framework: proj.framework[lang],
      description: proj.description[lang],
      href: proj.href,
      stars: proj.stars,
    }));

    const certifications = await db
      .collection("certifications")
      .find({})
      .toArray();
    const certificationsData: Certification[] = certifications.map((cert) => ({
      ...cert,
      name: cert.name[lang],
      badgeURL: cert.badgeURL,
      href: cert.href,
      authority: cert.authority[lang],
    }));

    return NextResponse.json({
      general: generalData,
      experiences: experiencesData,
      education: educationData,
      volunteering: volunteeringData,
      projects: projectsData,
      certifications: certificationsData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation Error:", error.errors);
      return NextResponse.json(
        { error: "Unsupported language" },
        { status: 400 }
      );
    }

    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
