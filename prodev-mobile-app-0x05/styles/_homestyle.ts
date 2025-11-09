import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  searchGroup: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    marginLeft: 12,
    width: 50,
    height: 40,
    backgroundColor: "#34967c",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  filterContainer: {
    width: 100,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#f8f8f8",
  },

  paginationContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967c",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
