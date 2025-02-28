import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('events')
@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new event' })
  @ApiResponse({ status: 201, description: 'Event successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all events' })
  @ApiResponse({ status: 200, description: 'List of all events.' })
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an event by ID' })
  @ApiResponse({ status: 200, description: 'Event found.' })
  @ApiResponse({ status: 404, description: 'Event not found.' })
  async findOne(@Param('id') id: string) {
    const event = await this.eventService.findOne(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }
  @Get('hospital/:hospitalId')
  @ApiOperation({ summary: 'Retrieve events by hospital ID' })
  @ApiResponse({
    status: 200,
    description: 'List of events for the specified hospital.',
  })
  @ApiResponse({
    status: 404,
    description: 'No events found for this hospital.',
  })
  async findByHospital(@Param('hospitalId') hospitalId: string) {
    return this.eventService.findByHospital(hospitalId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing event' })
  @ApiResponse({ status: 200, description: 'Event successfully updated.' })
  @ApiResponse({ status: 404, description: 'Event not found.' })
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an event' })
  @ApiResponse({ status: 200, description: 'Event successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Event not found.' })
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
