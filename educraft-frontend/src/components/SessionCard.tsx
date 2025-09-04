import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../../components/ui/button";

export type SessionCardProps = {
  title: string;
  duration: string;
  studyPeriod: string;
  exams: string;
  status: "Past" | "Upcoming" | "Ongoing";
  level: string;
  actionText: string;
  coursePath?: string; // optional path for navigation
};

const SessionCard = ({
  title,
  duration,
  studyPeriod,
  exams,
  status,
  level,
  actionText,
  coursePath = "/courses", // fallback path
}: SessionCardProps) => {
  const navigate = useNavigate();

  const statusColors: Record<SessionCardProps["status"], string> = {
    Past: "bg-gray-200 text-gray-700",
    Upcoming: "bg-blue-100 text-blue-700",
    Ongoing: "bg-green-100 text-green-700",
  };

  const handleClick = () => {
    navigate(coursePath);
  };

  return (
    <Card className="shadow-md rounded-2xl transition hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Badge className={statusColors[status]}>{status}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{level} Level</p>
      </CardHeader>

      <CardContent className="space-y-2 text-sm text-gray-700">
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Study Period:</strong> {studyPeriod}
        </p>
        <p>
          <strong>Exams:</strong> {exams}
        </p>
      </CardContent>

      <CardFooter>
        <Button onClick={handleClick} className="w-full">
          {actionText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;
