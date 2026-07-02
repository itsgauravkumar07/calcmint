import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/typography";
import { Card } from "@/components/ui/card";

import {
  CardTitle,
  Label,
  Paragraph,
} from "@/components/typography";

interface GuideCardProps {
  title: string;
  description?: string;
  image: string;
  slug: string;
  category: string;
  readingTime: string;

  variant?: "featured" | "vertical" | "horizontal";

  className?: string;
}

export function GuideCard({
  title,
  description,
  image,
  slug,
  category,
  readingTime,
  variant = "vertical",
  className,
}: GuideCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={`/guides/${slug}`}>
        <Card
          className={cn(
            "group overflow-hidden rounded-3xl border-border bg-card transition-all duration-300 card-shadow hover:-translate-y-1 card-shadow-hover",
            className
          )}
        >
          <div className="flex gap-4 p-4">

            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl">

              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

            <div className="flex flex-1 flex-col">

              <Badge className="w-fit">
                {category}
              </Badge>

              <CardTitle className="mt-3 line-clamp-2 text-lg">
                {title}
              </CardTitle>

              <div className="mt-auto flex items-center gap-2">

                <Clock className="h-4 w-4 text-text-muted" />

                <Label>
                  {readingTime}
                </Label>

              </div>

            </div>

          </div>
        </Card>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/guides/${slug}`}>
        <Card
          className={cn(
            "group overflow-hidden rounded-4xl border-border bg-card transition-all duration-300 card-shadow hover:-translate-y-1 card-shadow-hover",
            className
          )}
        >
          <div className="relative aspect-[16/9] overflow-hidden">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          <div className="space-y-5 p-8">

            <div className="flex items-center justify-between">

              <Badge>
                {category}
              </Badge>

              <div className="flex items-center gap-2">

                <Clock className="h-4 w-4 text-text-muted" />

                <Label>
                  {readingTime}
                </Label>

              </div>

            </div>

            <CardTitle>
              {title}
            </CardTitle>

            {description && (
              <Paragraph>
                {description}
              </Paragraph>
            )}

            <div className="flex items-center gap-2 font-medium text-primary transition group-hover:gap-3">

              Read Guide

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/guides/${slug}`}>
      <Card
        className={cn(
          "group overflow-hidden rounded-3xl border-border bg-card transition-all duration-300 card-shadow hover:-translate-y-1 card-shadow-hover",
          className
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        <div className="space-y-4 p-6">

          <Badge>
            {category}
          </Badge>

          <CardTitle className="line-clamp-2">
            {title}
          </CardTitle>

          {description && (
            <Paragraph className="line-clamp-2">
              {description}
            </Paragraph>
          )}

          <div className="flex items-center justify-between pt-2">

            <div className="flex items-center gap-2">

              <Clock className="h-4 w-4 text-text-muted" />

              <Label>
                {readingTime}
              </Label>

            </div>

            <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />

          </div>

        </div>
      </Card>
    </Link>
  );
}