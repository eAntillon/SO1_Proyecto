// Code generated by protoc-gen-go. DO NOT EDIT.
// source: configuracion.proto

package confproto

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type GameRequest struct {
	Gameid               int32    `protobuf:"varint,1,opt,name=gameid,proto3" json:"gameid,omitempty"`
	Players              int32    `protobuf:"varint,2,opt,name=players,proto3" json:"players,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GameRequest) Reset()         { *m = GameRequest{} }
func (m *GameRequest) String() string { return proto.CompactTextString(m) }
func (*GameRequest) ProtoMessage()    {}
func (*GameRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_af29c3d97c631adc, []int{0}
}

func (m *GameRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GameRequest.Unmarshal(m, b)
}
func (m *GameRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GameRequest.Marshal(b, m, deterministic)
}
func (m *GameRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GameRequest.Merge(m, src)
}
func (m *GameRequest) XXX_Size() int {
	return xxx_messageInfo_GameRequest.Size(m)
}
func (m *GameRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GameRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GameRequest proto.InternalMessageInfo

func (m *GameRequest) GetGameid() int32 {
	if m != nil {
		return m.Gameid
	}
	return 0
}

func (m *GameRequest) GetPlayers() int32 {
	if m != nil {
		return m.Players
	}
	return 0
}

type GameReply struct {
	Response             string   `protobuf:"bytes,1,opt,name=response,proto3" json:"response,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GameReply) Reset()         { *m = GameReply{} }
func (m *GameReply) String() string { return proto.CompactTextString(m) }
func (*GameReply) ProtoMessage()    {}
func (*GameReply) Descriptor() ([]byte, []int) {
	return fileDescriptor_af29c3d97c631adc, []int{1}
}

func (m *GameReply) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GameReply.Unmarshal(m, b)
}
func (m *GameReply) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GameReply.Marshal(b, m, deterministic)
}
func (m *GameReply) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GameReply.Merge(m, src)
}
func (m *GameReply) XXX_Size() int {
	return xxx_messageInfo_GameReply.Size(m)
}
func (m *GameReply) XXX_DiscardUnknown() {
	xxx_messageInfo_GameReply.DiscardUnknown(m)
}

var xxx_messageInfo_GameReply proto.InternalMessageInfo

func (m *GameReply) GetResponse() string {
	if m != nil {
		return m.Response
	}
	return ""
}

func init() {
	proto.RegisterType((*GameRequest)(nil), "confproto.GameRequest")
	proto.RegisterType((*GameReply)(nil), "confproto.GameReply")
}

func init() { proto.RegisterFile("configuracion.proto", fileDescriptor_af29c3d97c631adc) }

var fileDescriptor_af29c3d97c631adc = []byte{
	// 177 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4e, 0xce, 0xcf, 0x4b,
	0xcb, 0x4c, 0x2f, 0x2d, 0x4a, 0x4c, 0xce, 0xcc, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0xe2, 0x04, 0x09, 0x82, 0x99, 0x4a, 0xf6, 0x5c, 0xdc, 0xee, 0x89, 0xb9, 0xa9, 0x41, 0xa9, 0x85,
	0xa5, 0xa9, 0xc5, 0x25, 0x42, 0x62, 0x5c, 0x6c, 0xe9, 0x89, 0xb9, 0xa9, 0x99, 0x29, 0x12, 0x8c,
	0x0a, 0x8c, 0x1a, 0xac, 0x41, 0x50, 0x9e, 0x90, 0x04, 0x17, 0x7b, 0x41, 0x4e, 0x62, 0x65, 0x6a,
	0x51, 0xb1, 0x04, 0x13, 0x58, 0x02, 0xc6, 0x55, 0x52, 0xe7, 0xe2, 0x84, 0x18, 0x50, 0x90, 0x53,
	0x29, 0x24, 0xc5, 0xc5, 0x51, 0x94, 0x5a, 0x5c, 0x90, 0x9f, 0x57, 0x9c, 0x0a, 0x36, 0x80, 0x33,
	0x08, 0xce, 0x37, 0x72, 0xe5, 0x62, 0x4f, 0x4f, 0x2d, 0xf1, 0xcc, 0x4b, 0xcb, 0x17, 0xb2, 0xe2,
	0xe2, 0x08, 0xc8, 0x49, 0xac, 0x04, 0xe9, 0x13, 0x12, 0xd3, 0x83, 0x3b, 0x46, 0x0f, 0xc9, 0x25,
	0x52, 0x22, 0x18, 0xe2, 0x05, 0x39, 0x95, 0x4a, 0x0c, 0x4e, 0xdc, 0x51, 0x08, 0xd7, 0x27, 0xb1,
	0x81, 0x29, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xfc, 0x1e, 0x46, 0x19, 0xe6, 0x00, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// GetInfoClient is the client API for GetInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type GetInfoClient interface {
	PlayGame(ctx context.Context, in *GameRequest, opts ...grpc.CallOption) (*GameReply, error)
}

type getInfoClient struct {
	cc *grpc.ClientConn
}

func NewGetInfoClient(cc *grpc.ClientConn) GetInfoClient {
	return &getInfoClient{cc}
}

func (c *getInfoClient) PlayGame(ctx context.Context, in *GameRequest, opts ...grpc.CallOption) (*GameReply, error) {
	out := new(GameReply)
	err := c.cc.Invoke(ctx, "/confproto.getInfo/PlayGame", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GetInfoServer is the server API for GetInfo service.
type GetInfoServer interface {
	PlayGame(context.Context, *GameRequest) (*GameReply, error)
}

// UnimplementedGetInfoServer can be embedded to have forward compatible implementations.
type UnimplementedGetInfoServer struct {
}

func (*UnimplementedGetInfoServer) PlayGame(ctx context.Context, req *GameRequest) (*GameReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PlayGame not implemented")
}

func RegisterGetInfoServer(s *grpc.Server, srv GetInfoServer) {
	s.RegisterService(&_GetInfo_serviceDesc, srv)
}

func _GetInfo_PlayGame_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GameRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GetInfoServer).PlayGame(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/confproto.getInfo/PlayGame",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GetInfoServer).PlayGame(ctx, req.(*GameRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _GetInfo_serviceDesc = grpc.ServiceDesc{
	ServiceName: "confproto.getInfo",
	HandlerType: (*GetInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PlayGame",
			Handler:    _GetInfo_PlayGame_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "configuracion.proto",
}
