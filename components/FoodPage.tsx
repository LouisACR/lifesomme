"use client";

import { Database } from "@/types_db";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useCallback, useEffect, useState } from "react";

interface FoodPage {
  id: string;
}

const FoodPage: React.FC<FoodPage> = ({ id }) => {
  type FoodType = Database["public"]["Tables"]["foods"]["Row"];
  const supabase = useSupabaseClient();
  const [food, setFood] = useState<FoodType | null>();
  const getFood = useCallback(async () => {
    try {
      const foodQuery = supabase
        .from("foods")
        .select()
        .eq("id", id)
        .returns<FoodType>()
        .single();
      const { data, error } = await foodQuery;
      if (error) throw error;
      setFood(data);
    } catch {
      setFood(null);
    }
  }, [supabase, id]);
  useEffect(() => {
    getFood();
  }, [supabase, id, getFood]);
  return <div>{food?.name}</div>;
};

export default FoodPage;
