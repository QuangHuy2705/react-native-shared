import {
  Metrics,
} from "~/constants";
import RBSheet from "react-native-raw-bottom-sheet";

// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import {
  Button, SafeAreaView, ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity, View
} from "react-native";
// import { OPTION_TYPE } from "../../shared/types";
import { IconButton } from "react-native-paper";
import PRColors from "~/constants/PRColors";
export type OPTION_TYPE = {
  label: string,
  value: number,
}

type PropType = {
  title: string,
  options: OPTION_TYPE[],
  selected: number,
  onChange: Function,
  disabled?: boolean
}

// FIXME :
const PRSelectInput = (props: PropType) => {
  const {
    title,
    options,
    selected,
    onChange,
    disabled = false
  } = { ...props };

  const [_selected, setSeleted] = useState(props.selected);
  const refRBSheet = useRef();

  const [_label, setLabel] = useState(null);
  useEffect(() => {
    setSeleted(selected);
    setLabel(options.find(op => op.value === selected)?.label);

  }, [_selected]);
  const Header = (
    <View style={styles.modalTitleWrapper}>
      <IconButton
        size={30}
        icon={"close"}
        onPress={() => refRBSheet.current.close()} />
      <View style={{ flex: 1 }}>
        <Text style={{
          alignSelf: "center"
        }}>{title}</Text>

      </View>
      <IconButton
        style={{ opacity: 0 }}
        icon={"close"}
      />
    </View>
  );

  return (
    <SafeAreaView
    >
      <TouchableOpacity style={styles.container}
        onPress={() => {
          !disabled && refRBSheet.current.open();
        }}>
        <View style={{ opacity: disabled ? 0.5 : 1 }}>
          <Text
            style={styles.label}>{title}</Text>
          <Text
            style={styles.input}>{_label}</Text>
        </View>
        <IconButton icon={"chevron-down"}
          color={PRColors.icon} />
      </TouchableOpacity>
      <RBSheet
        // ref={refRBSheet}
        // height={Metrics.deviceHeight/2}

        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: { display: "none" },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            maxHeight: Metrics.deviceHeight / 2,
            paddingBottom: 20
          }
        }}
      >
        <SafeAreaView>
          {Header}
          <ScrollView>
            {
              props.options.map(item => {
                return (
                  <TouchableOpacity
                    key={item.value}
                    style={[item.value === _selected ? styles.optionSelected : {}]}
                    onPress={() => {
                      setSeleted(item.value);
                      props.onChange(item);
                    }}>
                    <View
                      style={[{
                        height: 60,
                        borderBottomWidth: 0.5,
                        borderBottomColor: "#dbdbde",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                      }
                        , styles.option]}>
                      <Text
                        style={{
                          color: "#2b2b2b",
                          fontSize: 15,
                        }}>{item.label} </Text>
                      {item.value === _selected &&
                        <IconButton
                          style={{ backgroundColor: PRColors.success }}
                          icon="check"
                          color={'white'}
                          size={20} />
                        // <Image style={{
                        //     width: 24,
                        //     height: 24,
                        //     marginRight: 20,
                        //     alignItems: 'flex-end',
                        //   }} source={PRImages.tick}></Image>
                      }
                    </View>
                  </TouchableOpacity>
                );
              })
            }
          </ScrollView>
        </SafeAreaView>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingRight: 0,
  },
  modalTitleWrapper: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: .5,
    // backgroundColor: "red"
  },
  input: {
    paddingTop: 5,
    fontSize: 15
    // color:"blue"
  },
  option: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 21,
    borderBottomColor: "#f2f2f2"
  },
  optionSelected: {
    backgroundColor: "#f2f2f2"
  },
  label: {
    paddingTop: 5,
    paddingBottom: 0
  }
});
export default PRSelectInput;
