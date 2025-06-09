import {
  BookOpenIcon,
  SquareCheck,
  File,
  TextCursorInput,
  FileText,
  CircleHelp,
  CirclePlay,
  ArrowRightLeft,
  Loader,
  CircleDot,
  Sprout,
  Bookmark,
} from "lucide-react";
import { ComponentType, SVGProps } from "react";

export const iconLibrary: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  openbook: BookOpenIcon,
  checkbox: SquareCheck,
  card: File,
  input: TextCursorInput,
  form: FileText,
  tooltip: CircleHelp,
  button: CirclePlay,
  toggle_switch: ArrowRightLeft,
  loader: Loader,
  radio_button: CircleDot,
  pattern: Sprout,
  my_favorites: Bookmark,
};
