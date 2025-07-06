"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SPEAKERS, SPEAKER_CATEGORIES, type Speaker } from "@/lib/constants/speakers"
import { motion } from "framer-motion"
import { Award, Briefcase, Calendar, Globe, Linkedin, Plane, Twitter, Users } from "lucide-react"
import { useState } from "react"

const Speakers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const filteredSpeakers =
    selectedCategory === "all" ? SPEAKERS : SPEAKERS.filter((speaker) => speaker.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "keynote":
        return <Award className="h-4 w-4" />
      case "panelist":
        return <Users className="h-4 w-4" />
      case "moderator":
        return <Briefcase className="h-4 w-4" />
      default:
        return <Plane className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "keynote":
        return "bg-primary text-white"
      case "panelist":
        return "bg-blue-500 text-white"
      case "moderator":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold mb-2 block">Industry Leaders</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet Our Speakers
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Learn from Africa's most influential aviation leaders, policymakers, and innovators who are shaping the
              future of the continent's aviation industry.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-4 h-12">
              {SPEAKER_CATEGORIES.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 text-sm">
                  {getCategoryIcon(category.id)}
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                  <Badge variant="default" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto"
        >
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Speaker Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <AvatarFallback className="w-full h-full rounded-none text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getCategoryColor(speaker.category)} flex items-center gap-1`}>
                        {getCategoryIcon(speaker.category)}
                        {speaker.category.charAt(0).toUpperCase() + speaker.category.slice(1)}
                      </Badge>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{speaker.title}</p>
                    <p className="text-muted-foreground text-sm mb-4">{speaker.company}</p>

                    {/* View Profile Button */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      View Full Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Speaker Modal/Detail View */}
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Speaker Image */}
                  <div className="md:w-1/3">
                    <Avatar className="w-full aspect-square rounded-lg overflow-hidden">
                      <AvatarImage
                        src={selectedSpeaker.image || "/placeholder.svg"}
                        alt={selectedSpeaker.name}
                        className="w-full h-auto object-cover"
                      />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                        {selectedSpeaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Speaker Details */}
                  <div className="md:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{selectedSpeaker.name}</h2>
                        <p className="text-primary font-semibold text-lg">{selectedSpeaker.title}</p>
                        <p className="text-muted-foreground">{selectedSpeaker.company}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedSpeaker(null)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        ✕
                      </Button>
                    </div>

                    {/* Session Info */}
                    {selectedSpeaker.sessionTitle && (
                      <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          Speaking Session
                        </h3>
                        <p className="font-medium">{selectedSpeaker.sessionTitle}</p>
                        <p className="text-sm text-muted-foreground">{selectedSpeaker.sessionTime}</p>
                      </div>
                    )}

                    {/* Bio */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Biography</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedSpeaker.expertise.map((skill) => (
                          <Badge key={skill} variant="default">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        {selectedSpeaker.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {selectedSpeaker.social.linkedin && (
                        <Button variant="outline" size="sm">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      )}
                      {selectedSpeaker.social.twitter && (
                        <Button variant="outline" size="sm">
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                      )}
                      {selectedSpeaker.social.website && (
                        <Button variant="outline" size="sm">
                          <Globe className="h-4 w-4 mr-2" />
                          Website
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Speaker Lineup?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for industry experts and thought leaders to share their insights at AAIS. If you're
              interested in speaking at future events, we'd love to hear from you.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply to Speak
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Speakers
