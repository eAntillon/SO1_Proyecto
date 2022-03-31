// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.6.1
// source: protos/game.proto

package protos

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GameRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Gameid  int32 `protobuf:"varint,1,opt,name=gameid,proto3" json:"gameid,omitempty"`
	Players int32 `protobuf:"varint,2,opt,name=players,proto3" json:"players,omitempty"`
}

func (x *GameRequest) Reset() {
	*x = GameRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_game_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GameRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameRequest) ProtoMessage() {}

func (x *GameRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_game_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameRequest.ProtoReflect.Descriptor instead.
func (*GameRequest) Descriptor() ([]byte, []int) {
	return file_protos_game_proto_rawDescGZIP(), []int{0}
}

func (x *GameRequest) GetGameid() int32 {
	if x != nil {
		return x.Gameid
	}
	return 0
}

func (x *GameRequest) GetPlayers() int32 {
	if x != nil {
		return x.Players
	}
	return 0
}

type GameReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Response string `protobuf:"bytes,1,opt,name=response,proto3" json:"response,omitempty"`
}

func (x *GameReply) Reset() {
	*x = GameReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_game_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GameReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameReply) ProtoMessage() {}

func (x *GameReply) ProtoReflect() protoreflect.Message {
	mi := &file_protos_game_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameReply.ProtoReflect.Descriptor instead.
func (*GameReply) Descriptor() ([]byte, []int) {
	return file_protos_game_proto_rawDescGZIP(), []int{1}
}

func (x *GameReply) GetResponse() string {
	if x != nil {
		return x.Response
	}
	return ""
}

var File_protos_game_proto protoreflect.FileDescriptor

var file_protos_game_proto_rawDesc = []byte{
	0x0a, 0x11, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x04, 0x67, 0x61, 0x6d, 0x65, 0x22, 0x3f, 0x0a, 0x0b, 0x47, 0x61, 0x6d,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x67, 0x61, 0x6d, 0x65,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x69, 0x64,
	0x12, 0x18, 0x0a, 0x07, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x07, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x22, 0x27, 0x0a, 0x09, 0x47, 0x61,
	0x6d, 0x65, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x32, 0x3f, 0x0a, 0x0b, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74, 0x65, 0x47, 0x61,
	0x6d, 0x65, 0x12, 0x30, 0x0a, 0x08, 0x50, 0x6c, 0x61, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x11,
	0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x0f, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x65, 0x70,
	0x6c, 0x79, 0x22, 0x00, 0x42, 0x0b, 0x5a, 0x09, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protos_game_proto_rawDescOnce sync.Once
	file_protos_game_proto_rawDescData = file_protos_game_proto_rawDesc
)

func file_protos_game_proto_rawDescGZIP() []byte {
	file_protos_game_proto_rawDescOnce.Do(func() {
		file_protos_game_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_game_proto_rawDescData)
	})
	return file_protos_game_proto_rawDescData
}

var file_protos_game_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_protos_game_proto_goTypes = []interface{}{
	(*GameRequest)(nil), // 0: game.GameRequest
	(*GameReply)(nil),   // 1: game.GameReply
}
var file_protos_game_proto_depIdxs = []int32{
	0, // 0: game.ExecuteGame.PlayGame:input_type -> game.GameRequest
	1, // 1: game.ExecuteGame.PlayGame:output_type -> game.GameReply
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_protos_game_proto_init() }
func file_protos_game_proto_init() {
	if File_protos_game_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_game_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GameRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_game_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GameReply); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_game_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protos_game_proto_goTypes,
		DependencyIndexes: file_protos_game_proto_depIdxs,
		MessageInfos:      file_protos_game_proto_msgTypes,
	}.Build()
	File_protos_game_proto = out.File
	file_protos_game_proto_rawDesc = nil
	file_protos_game_proto_goTypes = nil
	file_protos_game_proto_depIdxs = nil
}
