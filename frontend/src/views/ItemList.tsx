import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useGetItemsQuery, usePurchaseItemMutation } from "../app/services/api";

export default function ItemList() {
  const { data, error, isLoading } = useGetItemsQuery();
  const [purchaseItem] = usePurchaseItemMutation();

  const handlePurchase = (id: number) => () => {
    purchaseItem(id);
  };

  if (isLoading) {
    return <>{" Loading..."}</>;
  }

  if (error) {
    return <>{error}</>;
  }

  if (data === undefined) {
    return <>{" No items"}</>;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map(({ _id: key, name, purchased }) => {
        const labelId = `checkbox-list-label-${key}`;

        return (
          <ListItem key={key} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handlePurchase(key)}
              disabled={purchased}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={purchased}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={name}  sx={{textDecoration: purchased ? "line-through" : ""}} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
