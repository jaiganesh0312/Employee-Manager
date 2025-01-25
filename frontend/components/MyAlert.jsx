import React from "react";
import {Alert} from "@nextui-org/react";

export default function MyAlert({isVisible, handleVisibility, title, description, color, variant}) {
  return (
    <div className="flex flex-col gap-4 absolute top-4 right-2">
      {isVisible && (
        <Alert
          color={color}
          description={description}
          isVisible={isVisible}
          title={title}
          variant={variant}
          onClose={() => handleVisibility(false)}
        />
      )
      }
    </div>
  );
}

