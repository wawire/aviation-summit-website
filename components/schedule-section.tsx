"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, CalendarClock } from "lucide-react"

const AGENDA = [
  { time: "08:30", title: "Registration & Networking Breakfast" },
  { time: "09:30", title: "Opening Keynote - Minister of Transport" },
  { time: "10:15", title: "CEO Panel: The Future of African Carriers" },
  { time: "12:00", title: "Networking Lunch" },
  { time: "13:30", title: "Workshops & Breakout Sessions" },
  { time: "17:00", title: "Evening Reception" },
]

const PRELIMINARY_PROGRAMME = [
  { time: "08:30 – 09:30", session: "Registration &amp; Networking Breakfast", speakers: "—" },
  {
    time: "09:30 – 10:15",
    session: "Opening Keynote: The Investment Outlook",
    speakers: "Minister of Transport, Kenya",
  },
  { time: "10:15 – 11:00", session: "Panel 1: Financing Next-Gen Airports", speakers: "IFC, ADB, Fraport, IATA" },
  { time: "11:00 – 11:30", session: "Coffee Break &amp; Exhibition Tour", speakers: "—" },
]

const SESSIONS = [
  { time: "09:00", title: "Opening Keynote", speaker: "AAIS Steering Committee" },
  { time: "10:30", title: "Sustainability & Green Aviation", speaker: "Dr Amina Njoroge" },
  { time: "12:00", title: "Networking Lunch", speaker: "" },
  { time: "13:30", title: "Financing African Aviation", speaker: "Panel Discussion" },
  { time: "15:00", title: "Digital Transformation & AI", speaker: "Ing. Kwame Mensah" },
]

export function ScheduleSection() {
  const scheduleData = [
    {
      day: "Day 1 - March 15, 2025",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          type: "networking",
          location: "Main Lobby",
          description: "Check-in and networking with fellow attendees",
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Ceremony",
          type: "keynote",
          location: "Main Auditorium",
          description: "Welcome address and summit overview",
          speaker: "Summit Director",
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote: The Future of African Aviation",
          type: "keynote",
          location: "Main Auditorium",
          description: "Vision for transforming Africa's aviation landscape",
          speaker: "Industry Leader",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break & Networking",
          type: "break",
          location: "Exhibition Hall",
          description: "Refreshments and sponsor exhibitions",
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Infrastructure Development",
          type: "panel",
          location: "Main Auditorium",
          description: "Modernizing airports and air traffic management",
          speaker: "Industry Experts",
        },
        {
          time: "12:30 - 13:30",
          title: "Networking Lunch",
          type: "networking",
          location: "Grand Ballroom",
          description: "Lunch with networking opportunities",
        },
        {
          time: "13:30 - 15:00",
          title: "Workshop: Sustainable Aviation",
          type: "workshop",
          location: "Conference Room A",
          description: "Environmental responsibility and efficiency",
          speaker: "Sustainability Experts",
        },
        {
          time: "15:00 - 15:30",
          title: "Afternoon Break",
          type: "break",
          location: "Exhibition Hall",
          description: "Refreshments and exhibitions",
        },
        {
          time: "15:30 - 17:00",
          title: "Investment & Funding Models",
          type: "panel",
          location: "Main Auditorium",
          description: "Innovative financing for aviation growth",
          speaker: "Financial Experts",
        },
        {
          time: "18:00 - 20:00",
          title: "Welcome Reception",
          type: "networking",
          location: "Rooftop Terrace",
          description: "Cocktails and networking dinner",
        },
      ],
    },
    {
      day: "Day 2 - March 16, 2025",
      events: [
        {
          time: "08:30 - 09:00",
          title: "Morning Coffee",
          type: "networking",
          location: "Main Lobby",
          description: "Coffee and light breakfast",
        },
        {
          time: "09:00 - 10:30",
          title: "Regional Partnerships Panel",
          type: "panel",
          location: "Main Auditorium",
          description: "Collaborative frameworks for growth",
          speaker: "Regional Leaders",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Hall",
          description: "Networking and exhibitions",
        },
        {
          time: "11:00 - 12:30",
          title: "Innovation Showcase",
          type: "presentation",
          location: "Innovation Hub",
          description: "Latest aviation technologies and solutions",
          speaker: "Tech Innovators",
        },
        {
          time: "12:30 - 13:30",
          title: "Networking Lunch",
          type: "networking",
          location: "Grand Ballroom",
          description: "Final networking opportunity",
        },
        {
          time: "13:30 - 14:30",
          title: "Closing Keynote",
          type: "keynote",
          location: "Main Auditorium",
          description: "Summit wrap-up and next steps",
          speaker: "Summit Chair",
        },
        {
          time: "14:30 - 15:00",
          title: "Closing Ceremony",
          type: "ceremony",
          location: "Main Auditorium",
          description: "Thank you and farewell",
        },
      ],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "panel":
        return "bg-green-100 text-green-800 border-green-200"
      case "workshop":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "networking":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "break":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "presentation":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      case "ceremony":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="schedule" className="section-padding bg-muted/30 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Event Schedule</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days packed with insights, networking, and opportunities to shape the future of African aviation.
          </p>
        </div>

        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center text-primary">{day.day}</h3>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="card-hover-effect border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-2 text-primary font-semibold min-w-[120px]">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h4 className="font-heading text-lg font-bold">{event.title}</h4>
                            <Badge variant="outline" className={getTypeColor(event.type)}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground mb-2">{event.description}</p>

                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                            {event.speaker && (
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.speaker}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Schedule subject to change. Registered attendees will receive updates via email.
              </p>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                All times are in local time (GMT+1)
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Event Schedule (Day 1)</h2>

          <div className="grid gap-6">
            {SESSIONS.map((s) => (
              <Card key={s.time}>
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:gap-6">
                  <div className="w-24 text-primary font-semibold">{s.time}</div>
                  <div className="flex-1">
                    <p className="font-medium">{s.title}</p>
                    {s.speaker && <p className="text-sm text-muted-foreground">{s.speaker}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Conference Schedule</h2>
          <ol className="relative border-l border-border pl-6">
            {AGENDA.map((item, idx) => (
              <li key={idx} className="mb-10 ml-4">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-background">
                  <CalendarClock className="w-3.5 h-3.5 text-white" />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <time className="block mb-2 text-sm text-muted-foreground">{item.time}</time>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Preliminary Programme</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left font-semibold">Time</th>
                  <th className="p-3 text-left font-semibold">Session</th>
                  <th className="p-3 text-left font-semibold">Speakers</th>
                </tr>
              </thead>
              <tbody>
                {PRELIMINARY_PROGRAMME.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3">{item.time}</td>
                    <td className="p-3">{item.session}</td>
                    <td className="p-3">{item.speakers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
